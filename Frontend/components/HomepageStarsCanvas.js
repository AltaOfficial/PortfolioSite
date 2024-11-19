"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function HomepageStarsCanvas({ className, maxSize }) {
  const canvasDots = [];
  const canvasRef = useRef();

  function handleMouseMove(event) {
    console.log("mouse position: ", event.clientX, event.clientY);
  }

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas?.getContext("2d");

    context.strokeStyle = "white";
    context.fillStyle = "white";
    for (let i = 0; i < (window.innerWidth * 5) / 70; i++) {
      context.beginPath();
      let canvasDotX = Math.floor(Math.random() * canvas.offsetWidth);
      let canvasDotY = Math.floor(Math.random() * canvas.offsetHeight);
      canvasDots.push([canvasDotX, canvasDotY]);
      context.arc(
        canvasDotX,
        canvasDotY,
        Math.random() * maxSize,
        0,
        2 * Math.PI
      );
      context.stroke();
      context.fill();
    }
  }, []);
  return (
    <canvas
      onMouseMove={handleMouseMove}
      ref={canvasRef}
      //height={"100%"}
      //width={"100%"}
      className={"-z-10 absolute w-full " + (className ? className : "")}
    ></canvas>
  );
}
