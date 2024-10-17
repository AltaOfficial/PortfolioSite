import { useEffect, useState } from "react";
import ProjectComponent from "./ProjectComponent";
import { getAllProjects } from "@/app/actions";

export default function ProjectsSectionComponent({ projectsRef }) {
  const [projects, setProjects] = useState();

  useEffect(() => {
    const fetchProjects = async () => {
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
    <div className="mt-32 ml-5" ref={projectsRef}>
      <p className="text-6xl font-semibold mb-10">My Projects</p>
      {projects && (
        <div>
          {projects.map((project, index) => (
            <ProjectComponent
              title={project.title}
              thumbnailUrl={project.thumbnail_url}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
