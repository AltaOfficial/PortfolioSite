import Link from "next/link";

export default function ProjectOverviewComponent() {
  return (
    <div className="grid grid-cols-2 gap-10 mt-10">
      <div className="flex place-content-center">
        <img
          className="rounded-lg outline outline-white outline-3"
          src="https://spreadsimple.com/blog/content/images/2022/08/stripe-main-page.png"
          alt=""
          width={"640"}
          height={"360"}
        />
      </div>
      <div className="pt-5">
        <div className="mb-6">
          <p className="text-4xl font-semibold">Club Website</p>
          <p className="opacity-75">4/19/2020 - 10/11/2024</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl">
            A comprehensive club website designed specifically for our project
            in college, featuring detailed information. The website serves as a
            central hub for members to access resources, upcoming events, and
            project collaborations.
          </p>
          <div className="flex gap-2 font-semibold">
            <p className="bg-[#444A5A] rounded-md p-1 px-2">Next.js</p>
            <p className="bg-[#444A5A] rounded-md p-1 px-2">React</p>
            <p className="bg-[#444A5A] rounded-md p-1 px-2">Tailwindcss</p>
            <button>See all...</button>
          </div>
          <div className="flex">
            <Link className="text-[#6A99FF] font-semibold" href={"#"}>
              Visit Website
            </Link>
            <p className="px-2">|</p>
            <Link className="text-[#6A99FF] font-semibold" href={"#"}>
              See Github Repo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
