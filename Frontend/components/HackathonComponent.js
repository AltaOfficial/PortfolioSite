import Link from "next/link";

export default function HackathonComponent({
  title,
  frontPicture,
  startDate,
  endDate,
  sentenceExplaination,
  hackathonId,
}) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-[#161515] h-[32rem] p-4 rounded-2xl border border-white">
      <div className="w-[20rem] flex flex-col gap-2">
        <p className="text-3xl font-semibold my-3">{title}</p>
        <div className="h-44 place-content-center">
          <img className="rounded-lg self-center " src={frontPicture} alt="" />
        </div>
        <div className="font-bold text-black flex gap-2 mt-3 ">
          <p className="bg-white px-4 py-1 rounded-lg text-nowrap">
            {formatter.format(new Date(startDate))} -{" "}
            {formatter.format(new Date(endDate))}
          </p>
        </div>
        <p className="font-semibold h-24 place-content-start">
          {sentenceExplaination}
        </p>
        <Link
          href={`/hackathon/${hackathonId}`}
          className="flex border-white border font-semibold mx-2 mt-2 py-3 place-content-center rounded-xl hover:text-black hover:bg-white"
        >
          See more
        </Link>
      </div>
    </div>
  );
}
