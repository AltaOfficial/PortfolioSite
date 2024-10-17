import TechnologyComponent from "./TechnologyComponent";

export default function TechStacksComponent() {
  return (
    <div className="">
      <div>
        {/* Map all of the categories */}
        <p className="text-3xl">Web -</p>
        <TechnologyComponent
          pictureUrl={
            "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
          }
          techName={"React"}
          familiarity={"Very Familiar"}
          expirienceDesc={
            "Tested with it to learn the basics, before moving to next.js"
          }
        />
        {/* Map all the technoligies in that category */}
      </div>
    </div>
  );
}
