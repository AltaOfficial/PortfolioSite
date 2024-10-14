import ProjectComponent from "./ProjectComponent";

export default function ProjectsSectionComponent({ projectsRef }) {
  return (
    <div className="mt-32 ml-5" ref={projectsRef}>
      <p className="text-6xl font-semibold mb-10">My Projects</p>
      <div>
        <ProjectComponent />
      </div>
    </div>
  );
}
