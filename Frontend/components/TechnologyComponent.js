import React from "react";

export default function TechnologyComponent({
  pictureUrl,
  techName,
  familiarity,
  expirienceDesc,
}) {
  return (
    <div className="w-80 h-32 bg-[#121212] rounded-xl grid grid-cols-3 gap-2 p-4 pb-5">
      <div className="place-items-center place-content-center">
        <img
          src={
            "https://cdn-images-1.medium.com/max/280/1*lKN9xV1YEin-2wfAiGySBA.png"
          }
          className="rounded-lg"
          width={"100"}
          height={"100"}
          alt={`${techName} logo`}
        />
      </div>
      <div className="flex flex-col col-span-2">
        <div className="flex gap-2">
          <p className="text-xl font-semibold">{techName}</p>
          <p className="text-black bg-white rounded-lg px-1 font-semibold">
            {familiarity}
          </p>
        </div>
        <p>Exp: {expirienceDesc}</p>
      </div>
    </div>
  );
}
