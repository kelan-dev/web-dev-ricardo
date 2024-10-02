"use client";

import React, { Fragment } from "react";
import SectionHeading from "./section-heading";
import { projectData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectData.map((project) => (
          <Fragment key={project.title}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
