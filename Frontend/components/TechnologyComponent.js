import React from "react";

export default function TechnologyComponent({
  pictureUrl,
  techName,
  familiarity,
  expirienceDesc,
}) {
  return (
    <div className="w-96 h-36 bg-[#121212] rounded-xl grid grid-cols-3 gap-2 p-4 pb-5">
      <div className="place-items-center place-content-center">
        <img
          src={pictureUrl}
          className="rounded-lg"
          width={"100"}
          height={"100"}
          alt={`${techName} logo`}
        />
      </div>
      <div className="flex flex-col col-span-2 gap-1">
        <div className="flex gap-4">
          <p className="text-2xl font-semibold">{techName}</p>
          <p className="text-black text-sm place-content-center bg-white rounded-lg px-2 font-semibold">
            {familiarity}
          </p>
        </div>
        <p className="text-sm">
          <span className="font-semibold">Exp:</span> {expirienceDesc}
        </p>
      </div>
    </div>
  );
}
