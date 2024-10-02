"use client";

import React, { Fragment, useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";
import { ExperienceDataType } from "@/lib/types";
import { useTheme } from "@/contexts/theme-context-provider";

const Experience = () => {
  const { ref } = useSectionInView("Experience");

  return (
    <section ref={ref} id="experience" className="mb-28 scroll-mt-28">
      <SectionHeading>My Experience</SectionHeading>
      {/* https://github.com/stephane-monnot/react-vertical-timeline/issues/171#issuecomment-1868709984 */}
      <VerticalTimeline lineColor="">
        {experienceData.map((experience) => (
          <Fragment key={experience.title}>
            <TimelineElement experience={experience} />
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

interface TimelineElementProps {
  experience: ExperienceDataType;
}

// Issue: https://github.com/framer/motion/issues/1853
function TimelineElement({ experience }: TimelineElementProps) {
  const { theme } = useTheme();

  const [ref, inView] = useInView({
    rootMargin: "0% 0% -20%",
  });

  // Animations in the timeline are broken in Next14, so we have to manually trigger them.
  // https:github.com/stephane-monnot/react-vertical-timeline/issues/171#issuecomment-2072422001
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (inView && !hasAnimated) setHasAnimated(true);
  }, [inView, hasAnimated]);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: `0.4rem solid ${theme === "light" ? "#9ca3af" : "rgba(255, 255, 255, 0.5"}`,
      }}
      date={experience.date}
      icon={experience.icon}
      iconStyle={{
        background: theme === "light" ? "white" : "rgb(17, 24, 39)",
        fontSize: "1.5rem",
        boxShadow: `0 0 0 4px ${theme === "light" ? "#fff" : "rgb(31,41,55)"},inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`,
      }}
      visible={hasAnimated}
    >
      <div ref={ref}>
        <h3 className="font-semibold capitalize">{experience.title}</h3>
        <p className="!mt-0 font-normal">{experience.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {experience.description}
        </p>
      </div>
    </VerticalTimelineElement>
  );
}
