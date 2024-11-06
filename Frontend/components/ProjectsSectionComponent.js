import { useEffect, useState } from "react";
import ProjectComponent from "./ProjectComponent";
import { getAllProjects } from "@/app/actions";

export default function ProjectsSectionComponent({ projectsRef }) {
  const [projects, setProjects] = useState();

  useEffect(() => {
    const fetchProjects = async () => {
      // try to use useMemo here, so it doesnt refresh everytime user goes back to the homepage, since data isnt changing that often
      const { data, error } = await getAllProjects();
      if (error) {
        setProjects(null);
        console.error(error);
      } else {
        setProjects(data);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="mt-32 ml-5" id="projects" ref={projectsRef}>
      <p className="text-6xl font-semibold mb-10">My Projects</p>
      {projects && (
        <div className="flex gap-4 overflow-x-auto pb-10">
          {projects
            .slice()
            .reverse()
            .map((project, index) => (
              <ProjectComponent
                title={project.title}
                sentenceExplaination={project.short_description}
                tags={project.tags}
                thumbnailUrl={project.thumbnail_url}
                projectId={project.id}
                key={index}
              />
            ))}
        </div>
      )}
    </div>
  );
}
