import HandWaveLogoSvg from "./HandWaveLogoSvg";

export default function HeroSectionComponent({ projectsRef }) {
  function canvasArrow() {}

  return (
    <div className="flex flex-col place-items-center place-content-center h-[calc(100%-15rem)]">
      <div className="flex place-items-center">
        <p className="font-bold text-4xl">Hi I&apos;m Jaedon</p>
        <HandWaveLogoSvg />
      </div>
      <p className="font-medium text-xl">I like coding and stuff.</p>
      <button
        onClick={() => {
          projectsRef.current.scrollIntoView({ behavior: "smooth" });
        }}
        className="bg-white text-lg rounded-lg text-black p-2 font-semibold mt-8 flex relative justify-center hover:after:absolute hover:after:z-[-1] hover:after:content-[''] hover:after:bg-white hover:after:blur-lg hover:after:h-[100%] hover:after:w-[100%]"
      >
        View My Projects
      </button>
      <canvas className="z-[-1]"></canvas>
    </div>
  );
}
