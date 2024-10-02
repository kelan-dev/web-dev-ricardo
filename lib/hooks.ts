import { useActiveSectionContext } from "@/contexts/active-section-context-provider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionNameType } from "./types";

export function useSectionInView(
  name: SectionNameType,
  rootMargin: string = "-30% 0% -70%",
) {
  // Intersections occur 30% from the top of the viewport by default
  const { ref, inView } = useInView({ rootMargin });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    // Ignore intersections that occur within 1 second of a nav item click.
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(name);
    }
  }, [inView, name, setActiveSection, timeOfLastClick]);

  return { ref, inView };
}
