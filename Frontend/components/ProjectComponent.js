export default function ProjectComponent({
  title,
  frontPicture,
  tags,
  sentenceExplaination,
}) {
  return (
    <div className="bg-[#161515] w-[22rem] h-[32rem] p-4 rounded-2xl border border-white flex flex-col gap-2">
      <p className="text-3xl font-semibold my-3">Club Website</p>
      <img
        className="rounded-lg self-center"
        src="https://codemyviews-blog-post-images.s3.amazonaws.com/uploads/stripe.jpg"
        alt=""
        width={"350px"}
      />
      <div className="font-bold text-black flex gap-2 mt-3 ">
        <p className="bg-white px-4 py-1 rounded-lg">Next.js</p>
        <p className="bg-white px-4 py-1 rounded-lg">React</p>
        <p className="bg-white px-4 py-1 rounded-lg">Typescript</p>
      </div>
      <p className="font-semibold place-content-center">
        A comprehensive club website designed specifically for our project in
        college, featuring detailed information.
      </p>
      <button className="flex border-white border font-semibold mx-2 mt-2 py-3 place-content-center rounded-xl hover:text-black hover:bg-white">
        See more
      </button>
    </div>
  );
}
