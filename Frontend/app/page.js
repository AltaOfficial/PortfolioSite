"use client";
import Navbar from "@/components/Navbar";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import ProjectsSectionComponent from "@/components/ProjectsSectionComponent";
import PreviousHackathonsSectionComponent from "@/components/PreviousHackathonsSectionComponent";
import HomepageStarsCanvas from "@/components/HomepageStarsCanvas";
import TechStackSectionComponent from "@/components/TechStackSectionComponent";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef();
  const previousHackathonsRef = useRef();
  const techStacksRef = useRef();

  return (
    <div className="h-dvh">
      <Navbar
        projectsRef={projectsRef}
        previousHackathonsRef={previousHackathonsRef}
        techStacksRef={techStacksRef}
      />
      <HomepageStarsCanvas maxSize={5} />
      <HeroSectionComponent projectsRef={projectsRef} />
      <ProjectsSectionComponent projectsRef={projectsRef} />
      <TechStackSectionComponent techStacksRef={techStacksRef} />
      <PreviousHackathonsSectionComponent
        previousHackathonsRef={previousHackathonsRef}
      />
    </div>
  );
}
