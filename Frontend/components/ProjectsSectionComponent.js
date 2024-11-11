import { useEffect, useState } from "react";
import ProjectComponent from "./ProjectComponent";
import { getProjects } from "@/sanity/lib/sanity-utils";
import { getImageAsset } from "@sanity/asset-utils";

export default function ProjectsSectionComponent({ projectsRef }) {
  const [projects, setProjects] = useState();

  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <div className="mt-32 ml-5" id="projects" ref={projectsRef}>
      <p className="text-6xl font-semibold mb-10">My Projects</p>
      <div className="flex gap-4 overflow-x-auto pb-10">
        {projects &&
          projects.map((project) => (
            <ProjectComponent
              key={project._id}
              title={project.title}
              tags={project.tags}
              sentenceExplaination={project.shortDescription}
              projectId={project._id}
              thumbnailUrl={
                project.projectImages.filter(
                  (projectImage) => projectImage.isFeatured == true
                ).length > 0
                  ? getImageAsset(
                      project.projectImages.filter(
                        (projectImage) => projectImage.isFeatured == true
                      )[0].projectImage.asset._ref,
                      {
                        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
                        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
                      }
                    ).url
                  : getImageAsset(
                      project.projectImages[0].projectImage.asset._ref,
                      {
                        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
                        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
                      }
                    ).url
              }
            />
          ))}
      </div>
    </div>
  );
}
