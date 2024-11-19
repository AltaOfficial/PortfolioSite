"use client";
import { FiX } from "react-icons/fi";
import { HamburgerMenuContext } from "./hamburgerMenuContext";
import { useState, useContext } from "react";

export function HamburgerMenuComponent({
  hamburgerMenuIsOpen,
  setHamburgerMenuIsOpen,
}) {
  setInterval(() => {
    console.log(hamburgerMenuIsOpen);
  }, 2000);
  return (
    <div
      className="fixed h-full w-full z-20 top-0 bg-black"
      style={{
        translate: `0% ${100 * (hamburgerMenuIsOpen ? 0 : 1)}%`,
        transition: "translate 300ms ease-in-out",
      }}
    >
      <FiX
        onClick={() => {
          document.body.style.overflow = "";
          setHamburgerMenuIsOpen(false);
          console.log("close");
        }}
        className="absolute right-0 m-5 z-30"
        size={25}
      ></FiX>
      <div className="h-full w-full z-10 bg-black place-items-center place-content-center text-center underline">
        <div className="flex flex-col text-2xl font-bold gap-4">
          <a
            href="#techStacks"
            onClick={() => {
              document.body.style.overflow = "";
              setHamburgerMenuIsOpen(false);
            }}
          >
            My Tech Stacks
          </a>
          <a
            onClick={() => {
              document.body.style.overflow = "";
              setHamburgerMenuIsOpen(false);
            }}
            href="#hackathons"
          >
            Hackathons Attended
          </a>
          <a
            onClick={() => {
              document.body.style.overflow = "";
              setHamburgerMenuIsOpen(false);
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

export function HamburgerMenuProvider({ children }) {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(null);

  return (
    <HamburgerMenuContext.Provider
      value={{ hamburgerMenuIsOpen, setHamburgerMenuIsOpen }}
    >
      {children}
      <HamburgerMenuComponent
        hamburgerMenuIsOpen={hamburgerMenuIsOpen}
        setHamburgerMenuIsOpen={setHamburgerMenuIsOpen}
      />
    </HamburgerMenuContext.Provider>
  );
}
