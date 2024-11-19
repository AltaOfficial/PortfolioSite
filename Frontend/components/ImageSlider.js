import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ImageSlider({ imageUrls, className }) {
  const [imageIndex, setImageIndex] = useState(0);

  function moveToNext() {
    setImageIndex((index) => {
      if (index == imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function moveToPrevious() {
    setImageIndex((index) => {
      if (index == 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div
      className={
        "flex sm:w-[640px] sm:h-[360px] w-[320px] h-[180px] relative overflow-hidden" +
        (className ? " " + className : "")
      }
    >
      <div className="flex">
        {imageUrls.map((imageUrl) => (
          <img
            className="w-full h-full flex-grow-0 flex-shrink-0"
            key={imageUrl}
            src={imageUrl}
            alt=""
            style={{
              translate: `${-100 * imageIndex}%`,
              transition: "translate 300ms ease-in-out",
            }}
          />
        ))}
      </div>
      <button
        onClick={moveToPrevious}
        className="absolute left-0 bottom-1/2 translate-y-1/2"
      >
        <FiChevronLeft stroke="white" fill="black" size={40} />
      </button>
      <button
        onClick={moveToNext}
        className="absolute right-0 bottom-1/2 translate-y-1/2"
      >
        <FiChevronRight stroke="white" fill="black" size={40} />
      </button>
    </div>
  );
}
