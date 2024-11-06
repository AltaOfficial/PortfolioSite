import TechStacksComponent from "./TechStacksComponent";

export default function TechStackSectionComponent({ techStacksRef }) {
  return (
    <div className="mt-32 ml-5" id="techStacks" ref={techStacksRef}>
      <p className="text-6xl font-semibold mb-10">
        My Tech Stack and Experience
      </p>
      <div>
        <TechStacksComponent />
      </div>
    </div>
  );
}
