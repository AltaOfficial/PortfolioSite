import { FiX } from "react-icons/fi";

export default function HamburgerMenuComponent({
  hamburgerMenuOpen,
  setHamburgerMenuOpen,
}) {
  return (
    <div
      className="fixed w-full h-full z-10 bg-black"
      style={{
        translate: `0% ${100 * (hamburgerMenuOpen ? 0 : 1)}%`,
        transition: "translate 300ms ease-in-out",
      }}
    >
      <FiX
        onClick={() => {
          document.body.style.overflow = "";
          setHamburgerMenuOpen(false);
        }}
        className="absolute right-0 m-5 z-30"
        size={25}
      ></FiX>
      <div className="h-full w-full z-10 bg-black place-items-center place-content-center text-center">
        <div className="flex flex-col text-2xl font-bold gap-4">
          <a
            href="#techStacks"
            onClick={() => {
              document.body.style.overflow = "";
              setHamburgerMenuOpen(false);
            }}
          >
            My Tech Stacks
          </a>
          <a
            onClick={() => {
              document.body.style.overflow = "";
              setHamburgerMenuOpen(false);
            }}
            href="#hackathons"
          >
            Hackathons Attended
          </a>
          <a
            onClick={() => {
              document.body.style.overflow = "";
              setHamburgerMenuOpen(false);
            }}
            href="#projects"
          >
            Projects Worked On
          </a>
        </div>
      </div>
    </div>
  );
}
