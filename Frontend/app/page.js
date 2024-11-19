"use client";
import Navbar from "@/components/Navbar";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import ProjectsSectionComponent from "@/components/ProjectsSectionComponent";
import PreviousHackathonsSectionComponent from "@/components/PreviousHackathonsSectionComponent";
import HomepageStarsCanvas from "@/components/HomepageStarsCanvas";
import TechStackSectionComponent from "@/components/TechStackSectionComponent";
import { HamburgerMenuComponent } from "@/components/hamburger menu/HamburgerMenuComponent";
import { useRef, useState } from "react";

export default function Home() {
  const projectsRef = useRef();
  const previousHackathonsRef = useRef();
  const techStacksRef = useRef();
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  return (
    <div className="h-dvh">
      <Navbar
        projectsRef={projectsRef}
        previousHackathonsRef={previousHackathonsRef}
        techStacksRef={techStacksRef}
        setHamburgerMenuOpen={setHamburgerMenuOpen}
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
