import Link from "next/link";

export default function ProjectComponent({
  title,
  thumbnailUrl,
  tags,
  sentenceExplaination,
  projectId,
}) {
  return (
    <div className="bg-[#161515] h-[32rem] p-4 rounded-2xl border border-white">
      <div className="w-[20rem] flex flex-col gap-2">
        <p className="text-3xl font-semibold my-3">{title}</p>
        <div className="h-44 place-content-center">
          <img className="rounded-lg self-center " src={thumbnailUrl} alt="" />
        </div>
        <div className="font-bold text-black flex gap-2 mt-3 h-8">
          {tags
            .filter((tag) => tag.isFeatured == true)
            .map((tag, index) => (
              <p key={index} className="bg-white px-4 py-1 rounded-lg">
                {tag.techName}
              </p>
            ))}
        </div>
        <p className="font-semibold h-24 place-content-start">
          {sentenceExplaination}
        </p>
        <Link
          href={`/project/${projectId}`}
          className="flex border-white border font-semibold mx-2 mt-2 py-3 place-content-center rounded-xl hover:text-black hover:bg-white"
        >
          See more
        </Link>
      </div>
    </div>
  );
}
