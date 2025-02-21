"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { HamburgerMenuContext } from "@/components/hamburger menu/hamburgerMenuContext";
import { FaDiscord, FaGithub } from "react-icons/fa6";

export default function Navbar({
  projectsRef,
  previousHackathonsRef,
  techStacksRef,
  notOnHomePage,
}) {
  const router = useRouter();
  const { hamburgerMenuIsOpen, setHamburgerMenuIsOpen } =
    useContext(HamburgerMenuContext);

  return (
    <div className="navbar flex place-content-between place-items-center px-5 py-8">
      <div>
        <Link href={"/"}>Jaedonfarr.dev</Link>
      </div>

      <GiHamburgerMenu
        onClick={() => {
          setHamburgerMenuIsOpen(true);
          document.body.style.overflow = "hidden";
          console.log("open");
          console.log(hamburgerMenuIsOpen);
        }}
        className="sm:hidden"
        size={25}
      />

      <div className="sm:flex hidden place-items-center">
        <div className="flex gap-16 mr-10 place-items-center font-semibold">
          <button
            onClick={() => {
              if (notOnHomePage) {
                router.push("/#techStacks");
              } else {
                techStacksRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="text-center flex relative hover-glow-2"
          >
            My tech <br />
            stacks
          </button>
          <button
            onClick={() => {
              if (notOnHomePage) {
                router.push("/#hackathons");
              } else {
                previousHackathonsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="text-center flex relative hover-glow-2"
          >
            Hackathons
            <br /> Attended
          </button>
          <button
            onClick={() => {
              if (notOnHomePage) {
                router.push("/#projects");
              } else {
                projectsRef.current?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-center flex relative hover-glow-2"
          >
            Projects
            <br /> Worked On
          </button>
        </div>
        <div className="flex gap-3">
          <a
            href="http://discordapp.com/users/301029614447230976"
            target="_blank"
          >
            <FaDiscord size={23} />
          </a>
          <a href="https://github.com/AltaOfficial" target="_blank">
            <FaGithub size={23} />
          </a>
        </div>
      </div>
    </div>
  );
}
