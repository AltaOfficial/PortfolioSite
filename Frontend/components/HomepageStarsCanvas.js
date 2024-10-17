"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function HomepageStarsCanvas() {
  const amountOfStarsToRender = 100;
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
    for (let i = 0; i < amountOfStarsToRender; i++) {
      context.beginPath();
      let canvasDotX = Math.floor(Math.random() * canvas.offsetWidth);
      let canvasDotY = Math.floor(Math.random() * canvas.offsetWidth);
      canvasDots.push([canvasDotX, canvasDotY]);
      context.arc(canvasDotX, canvasDotY, Math.random() * 4, 0, 2 * Math.PI);
      context.stroke();
      context.fill();
    }
  }, []);
  return (
    <canvas
      onMouseMove={handleMouseMove}
      ref={canvasRef}
      className="z-[0] absolute"
    ></canvas>
  );
}
