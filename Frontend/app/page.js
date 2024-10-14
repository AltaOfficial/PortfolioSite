"use client";
import Navbar from "@/components/Navbar";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import ProjectsSectionComponent from "@/components/ProjectsSectionComponent";
import PreviousHackathonsSectionComponent from "@/components/PreviousHackathonsSectionComponent";
import HomepageStarsCanvas from "@/components/HomepageStarsCanvas";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef();
  const previousHackathonsRef = useRef();
  return (
    <div className="h-dvh">
      <Navbar
        projectsRef={projectsRef}
        previousHackathonsRef={previousHackathonsRef}
      />
      <HomepageStarsCanvas></HomepageStarsCanvas>
      <HeroSectionComponent projectsRef={projectsRef} />
      <ProjectsSectionComponent projectsRef={projectsRef} />
      <PreviousHackathonsSectionComponent
        previousHackathonsRef={previousHackathonsRef}
      />
    </div>
  );
}
