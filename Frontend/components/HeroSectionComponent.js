import HandWaveLogoSvg from "./HandWaveLogoSvg";

export default function HeroSectionComponent({ projectsRef }) {
  return (
    <div className="flex flex-col items-center justify-center h-[42rem]">
      <div className="flex items-center">
        <p className="font-bold text-3xl sm:text-4xl">Hi, I&apos;m Jaedon</p>
        <HandWaveLogoSvg />
      </div>
      <p className="font-medium text-lg sm:text-xl mt-2">
        Love building websites 💻, interested in AI 🤖.
      </p>
      <button
        onClick={() => {
          projectsRef.current.scrollIntoView({ behavior: "smooth" });
        }}
        className="bg-white text-lg rounded-lg text-black p-2 font-semibold mt-6 flex relative justify-center hover:after:absolute hover:after:z-[-1] hover:after:content-[''] hover:after:bg-white hover:after:blur-lg hover:after:h-full hover:after:w-full"
      >
        View My Projects
      </button>
      <canvas className="z-[-1]"></canvas>
    </div>
  );
}
