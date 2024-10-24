import React from "react";

/*
Total things needed:
Project Name
Project elevator pitch
Project longer elevator pitch
date from and to
Project pictures and maybe a video demo
technologies used (with ability to feature some)
Live website link
github link
Project markdown full explaination

*/

export default function createUpdateProject({
  title,
  shortDescription,
  markdownDescription,
  dates,
}) {
  return (
    <div className="p-8">
      <p className="text-5xl font-semibold mb-10">New Project</p>
      <form className="">
        <div className="grid grid-cols-2 gap-40">
          <div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <label>Title</label>
                <input
                  type="text"
                  className="bg-black border-2 border-white rounded-md"
                  name="title"
                />
              </div>

              <div className="flex flex-col">
                <label>Date From To</label>
                <div>
                  <input
                    type="date"
                    className="bg-black border-2 border-white rounded-md"
                    name="from"
                  />
                  <input
                    type="date"
                    className="bg-black border-2 border-white rounded-md"
                    name="to"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label>Paragraph Explainer</label>
                <textarea
                  rows={4}
                  type="text"
                  className="bg-black border-2 border-white rounded-md"
                  name="shortDescription"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label>Live site link</label>
                  <input
                    type="text"
                    className="bg-black border-2 border-white rounded-md"
                    name="liveSiteLink"
                  />
                </div>
                <div className="flex flex-col">
                  <p>Repo link</p>
                  <input
                    type="text"
                    className="bg-black border-2 border-white rounded-md"
                    name="repoLink"
                  />
                </div>
              </div>
            </div>

            <div></div>
          </div>
          <div>
            <div>
              <input type="text" />
            </div>
            <div></div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-white font-semibold text-black rounded-lg p-2 absolute right-0 bottom-0 m-10"
        >
          Save
        </button>
      </form>
    </div>
  );
}
