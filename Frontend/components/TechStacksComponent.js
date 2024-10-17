import TechnologyComponent from "./TechnologyComponent";

export default function TechStacksComponent() {
  return (
    <div className="h-96 grid grid-cols-4">
      <div className="flex flex-col gap-4">
        {/* Map all of the categories */}
        <p className="text-3xl mb-2 font-semibold">Web Frameworks -</p>
        <TechnologyComponent
          pictureUrl={
            "https://cdn-images-1.medium.com/max/280/1*lKN9xV1YEin-2wfAiGySBA.png"
          }
          techName={"React"}
          familiarity={"Familiar"}
          expirienceDesc={
            "Tested with it, to learn the basics, before moving on to next.js"
          }
        />
        <TechnologyComponent
          pictureUrl={
            "https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg"
          }
          techName={"Nextjs"}
          familiarity={"Very Familiar"}
          expirienceDesc={
            "Tested with it, to learn the basics, before moving on to next.js"
          }
        />
        {/* Map all the technoligies in that category */}
      </div>
      <div className="flex flex-col gap-4">
        {/* Map all of the categories */}
        <p className="text-3xl mb-2 font-semibold">Tools -</p>
        <TechnologyComponent
          pictureUrl={
            "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png"
          }
          techName={"Figma"}
          familiarity={"Kinda Familiar"}
          expirienceDesc={
            "Tested with it, to learn the basics, before moving on to next.js"
          }
        />
        {/* Map all the technoligies in that category */}
      </div>
      <div className="flex flex-col gap-4">
        {/* Map all of the categories */}
        <p className="text-3xl mb-2 font-semibold">Langauages -</p>
        <TechnologyComponent
          pictureUrl={
            "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--programming-language-logos-icons-1720083.png?f=webp"
          }
          techName={"Python"}
          familiarity={"Very Familiar"}
          expirienceDesc={
            "Tested with it, to learn the basics, before moving on to next.js"
          }
        />
        {/* Map all the technoligies in that category */}
      </div>
      <div className="flex flex-col gap-4">
        {/* Map all of the categories */}
        <p className="text-3xl mb-2 font-semibold">Web Services -</p>
        <TechnologyComponent
          pictureUrl={
            "https://cdn-images-1.medium.com/max/280/1*lKN9xV1YEin-2wfAiGySBA.png"
          }
          techName={"React"}
          familiarity={"Very Familiar"}
          expirienceDesc={
            "Tested with it, to learn the basics, before moving on to next.js"
          }
        />
        {/* Map all the technoligies in that category */}
      </div>
    </div>
  );
}
