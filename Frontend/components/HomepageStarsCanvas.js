"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function HomepageStarsCanvas() {
  const amountOfStarsToRender = 10;
  const canvasRef = useRef();

  function draw(context) {}

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas?.getContext("2d");

    context.strokeStyle = "white";
    context.fillStyle = "white";
    for (let i = 0; i < 100; i++) {
      context.beginPath();
      context.arc(
        Math.floor(Math.random() * canvas.offsetWidth),
        Math.floor(Math.random() * canvas.offsetWidth),
        Math.random() * 4,
        0,
        2 * Math.PI
      );
      context.stroke();
      context.fill();
    }
  }, []);
  return <canvas ref={canvasRef} className="z-[0] absolute"></canvas>;
}
