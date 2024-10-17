"use client";
import Navbar from "@/components/Navbar";
import ProjectOverviewComponent from "@/components/ProjectOverviewComponent";
import { useRef } from "react";
import HomepageStarsCanvas from "@/components/HomepageStarsCanvas";

export default function Project() {
  const projectsRef = useRef();
  const previousHackathonsRef = useRef();
  return (
    <div className="h-dvh">
      <Navbar
        projectsRef={projectsRef}
        previousHackathonsRef={previousHackathonsRef}
      />
      <HomepageStarsCanvas maxSize={2} />
      <div className="px-36">
        <ProjectOverviewComponent />
        <div className="mt-20">
          <p>
            Inspiration As a team with experience in early childhood education
            and tutoring, we noticed a significant gap in the literacy levels
            with which students enter college. Given the use of high-level texts
            in many courses, we aimed to create a tool to assist students in
            developing these crucial skills by simplifying such texts. What it
            does As a team with experience in early childhood education and
            tutoring, we noticed a significant gap in the literacy levels with
            which students enter college. Given the use of high-level texts in
            many courses, we aimed to create a tool to assist students in
            developing these crucial skills by simplifying such texts. How I
            built it This software was built using Django for the backend
            functionality, BeautifulSoup for the web scrapers handling the
            original inputted text, Postgres for the article database, Bootstrap
            for the UI and front-end development, and OpenAIs API for the AI
            component. Accomplishments that Im proud of We are proud to announce
            that the product currently functions as intended, and we firmly
            believe it can make a difference in students academic journeys. Our
            hope is that this tool will aid students in enhancing their literacy
            skills and fostering a passion for reading. Furthermore, by
            utilizing real online articles, Maestro has the potential to
            significantly improve overall knowledge of current events.
            Challenges Faced One of the main challenges was integrating the
            website with our clubs existing systems. We had to ensure seamless
            data flow between the website and our membership database.
            Additionally, optimizing the website for performance and
            accessibility was a top priority throughout the development process.
            Future Plans Our plan is to further develop Maestro and tailor it
            for K-12 education. We envision teachers using this tool to
            customize articles for each student in their class and adjust the
            generated problems accordingly. Through this approach, students can
            enhance their literacy skills at their own pace, while teachers gain
            insights into individual student performance through the accuracy of
            the generated questions.
          </p>
          <div>
            <p className="text-2xl">Full tech stack</p>
            <div className="flex gap-2 font-semibold">
              <p className="bg-[#444A5A] rounded-md p-1 px-2">Next.js</p>
              <p className="bg-[#444A5A] rounded-md p-1 px-2">React</p>
              <p className="bg-[#444A5A] rounded-md p-1 px-2">Tailwindcss</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
