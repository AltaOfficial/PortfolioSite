import Link from "next/link";
import DiscordLogoSvg from "./DiscordLogoSvg";

export default function Navbar({ projectsRef, previousHackathonsRef }) {
  return (
    <div className="navbar flex place-content-between place-items-center px-5 py-8">
      <div>
        <p>Jaedonfarr.dev</p>
      </div>

      <div className="flex place-items-center">
        <div className="flex gap-16 mr-10 place-items-center font-semibold">
          <Link
            href="#"
            className="text-center flex relative hover-glow ease-in-out duration-300"
          >
            About Me
          </Link>
          <button
            onClick={() => {
              previousHackathonsRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="text-center flex relative hover-glow-2"
          >
            Hackathons
            <br /> Attended
          </button>
          <button
            onClick={() => {
              projectsRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-center flex relative hover-glow-2"
          >
            Projects
            <br /> Worked On
          </button>
        </div>
        <div>
          <button>
            <DiscordLogoSvg />
          </button>
        </div>
      </div>
    </div>
  );
}
