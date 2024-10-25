"use client";
import React, { useRef, useState } from "react";
import { FiStar, FiTrash, FiX } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
  const [bodyText, setBodyText] = useState("");
  const body = useRef(null);
  return (
    <div className="p-8">
      <p className="text-5xl font-semibold mb-8">New Project</p>
      <form className="">
        <div className="grid grid-cols-2 gap-64">
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
                <div className="flex gap-2">
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
              <div className="flex flex-col gap-2 ">
                <label>Tech Stack</label>
                <div className="h-[7rem] border-2 border-white rounded-md overflow-y-scroll">
                  <div className="flex p-2">
                    <p className="bg-white rounded-md text-black p-1  flex place-items-center gap-1 font-semibold mr-1">
                      Hi
                      <FiStar className="hover:cursor-pointer" />
                      <FiX className="hover:scale-110 hover:cursor-pointer" />
                    </p>
                    <p className="bg-white rounded-md text-black p-1  flex place-items-center gap-1 font-semibold mr-1">
                      Hi
                      <FiStar className="hover:cursor-pointer" />
                      <FiX className="hover:scale-110 hover:cursor-pointer" />
                    </p>
                    <p className="bg-white rounded-md text-black p-1  flex place-items-center gap-1 font-semibold mr-1">
                      Hi
                      <FiStar className="hover:cursor-pointer" />
                      <FiX className="hover:scale-110 hover:cursor-pointer" />
                    </p>
                    <p className="bg-white rounded-md text-black p-1  flex place-items-center gap-1 font-semibold mr-1">
                      Hi
                      <FiStar className="hover:cursor-pointer" />
                      <FiX className="hover:scale-110 hover:cursor-pointer" />
                    </p>
                    <p className="bg-white rounded-md text-black p-1  flex place-items-center gap-1 font-semibold mr-1">
                      Hi
                      <FiStar className="hover:cursor-pointer" />
                      <FiX className="hover:scale-110 hover:cursor-pointer" />
                    </p>
                    <p className="bg-white rounded-md text-black p-1  flex place-items-center gap-1 font-semibold mr-1">
                      Hi
                      <FiStar className="hover:cursor-pointer" />
                      <FiX className="hover:scale-110 hover:cursor-pointer" />
                    </p>
                    <p className="bg-white rounded-md text-black p-1  flex place-items-center gap-1 font-semibold mr-1">
                      Hi
                      <FiStar className="hover:cursor-pointer" />
                      <FiX className="hover:scale-110 hover:cursor-pointer" />
                    </p>
                    <p className="bg-white rounded-md text-black p-1  flex place-items-center gap-1 font-semibold mr-1">
                      Hi
                      <FiStar className="hover:cursor-pointer" />
                      <FiX className="hover:scale-110 hover:cursor-pointer" />
                    </p>
                    <input
                      type="text"
                      className="bg-black flex p-1 font-semibold focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-16">
              <label>Body</label>
              <div className="border-2 border-white rounded-md p-2">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    let cursorPositon = body.current.selectionStart;
                    setBodyText(
                      bodyText.substring(0, body.current.selectionStart) +
                        "&nbsp;" +
                        bodyText.substring(body.current.selectionStart)
                    );
                    setTimeout(() => {
                      // update the cursor position after inserting space
                      body.current.setSelectionRange(
                        cursorPositon + 6,
                        cursorPositon + 6
                      );
                    }, 0);
                  }}
                  onMouseDown={(event) => event.preventDefault()}
                  className="my-2 bg-white text-black font-semibold px-2 py-1 rounded-lg"
                >
                  Insert space
                </button>
                <div className="flex flex-col">
                  <textarea
                    onChange={(event) => {
                      setBodyText(event.target.value);
                    }}
                    value={bodyText}
                    name="body"
                    ref={body}
                    className="h-[23rem] focus:outline-none border-t-2 p-1 border-white bg-black"
                    rows={18}
                    contentEditable="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-10">
              <div className="w-56 h-56 border-2 border-white rounded-md place-items-center place-content-center hover:cursor-pointer">
                <div>
                  <p>Image/Video Upload</p>
                  <p className="text-center">(Drag and drop)</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 h-56 overflow-y-scroll">
                <div className="flex flex-col gap-2">
                  <div className="border-2 border-white w-44 h-24 rounded-md relative">
                    <div className="flex flex-col absolute right-0 p-1">
                      <FiStar size={22} />
                      <FiTrash size={22} />
                    </div>
                  </div>
                  <div className="border-2 border-white w-44 h-24 rounded-md relative">
                    <div className="flex flex-col absolute right-0 p-1">
                      <FiStar size={22} />
                      <FiTrash size={22} />
                    </div>
                  </div>
                  <div className="border-2 border-white w-44 h-24 rounded-md relative">
                    <div className="flex flex-col absolute right-0 p-1">
                      <FiStar size={22} />
                      <FiTrash size={22} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-2">Uploading hi.mp4 - 46%</p>

            <div className="flex flex-col mt-36">
              <label>Markdown</label>
              <div
                className="bg-black border-2 border-white rounded-md h-[27.5rem] p-2 overflow-y-scroll"
                rows={18}
              >
                <ReactMarkdown remarkPlugins={remarkGfm}>
                  {bodyText}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-white font-semibold text-black rounded-lg p-2 absolute right-0 top-0 m-10"
        >
          Save Project
        </button>
      </form>
    </div>
  );
}
