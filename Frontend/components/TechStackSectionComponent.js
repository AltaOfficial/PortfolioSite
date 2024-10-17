import TechStacksComponent from "./TechStacksComponent";

export default function TechStackSectionComponent({ techStackRefs }) {
  return (
    <div className="mt-32 ml-5" ref={techStackRefs}>
      <p className="text-6xl font-semibold mb-10">
        My Tech Stack and Experience
      </p>
      <div>
        <TechStacksComponent></TechStacksComponent>
      </div>
    </div>
  );
}
