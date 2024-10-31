"use client";
import { useRef, useState } from "react";
import { FiStar, FiX } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ImageUpload from "@/components/ImageUpload";
import { uploadProject } from "./actions";
import { useToast } from "@/components/toast/toastContext";

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

// params should be passed in from the url
export default function CreateUpdateProject({
  title,
  shortDescription,
  bodyText,
  dates,
  techStack,
  projectId,
}) {
  const initialState = {
    toastTitle: "",
    toastMessage: "",
    fieldValues: {
      title: "erm...",
      date: { from: "2023-12-12", to: "" },
      shortDescription: "",
      liveSiteLink: "",
      repoLink: "",
      techStack: techStack
        ? techStack
        : [{ content: "React", featured: false }],
    },
  };
  const [isLoading, setIsLoading] = useState();
  const [techStackState, setTechStackState] = useState(
    techStack ? techStack : [{ content: "React", featured: false }]
  );
  const [bodyTextState, setBodyTextState] = useState("erm... what the sigma");
  const body = useRef(null);
  const toast = useToast();

  return (
    <div className="p-8">
      <p className="text-5xl font-semibold mb-8">New Project</p>
      <form
        action={(formData) => {
          uploadProject(formData).then(({ title, message }) => {
            toast.open({
              title: title,
              message: message,
            });
          });
        }}
      >
        <input
          name="projectId"
          type="text"
          value={projectId}
          readOnly
          className="hidden"
        />
        <div className="grid grid-cols-2 gap-64">
          <div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <label>Title</label>
                <input
                  type="text"
                  className="bg-black border-2 border-white rounded-md"
                  name="title"
                  defaultValue={initialState.fieldValues.title}
                />
              </div>

              <div className="flex flex-col">
                <label>Date From To</label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    className="bg-black border-2 border-white rounded-md"
                    name="from"
                    defaultValue={initialState.fieldValues.date.from}
                  />
                  <input
                    type="date"
                    className="bg-black border-2 border-white rounded-md"
                    name="to"
                    defaultValue={initialState.fieldValues.date.to}
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
                  defaultValue={initialState.fieldValues.shortDescription}
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label>Live site link</label>
                  <input
                    type="text"
                    className="bg-black border-2 border-white rounded-md"
                    name="liveSiteLink"
                    defaultValue={initialState.fieldValues.liveSiteLink}
                  />
                </div>
                <div className="flex flex-col">
                  <label>Repo link</label>
                  <input
                    type="text"
                    className="bg-black border-2 border-white rounded-md"
                    name="repoLink"
                    defaultValue={initialState.fieldValues.repoLink}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[31rem]">
                <label>Tech Stack</label>
                <div className="h-[7rem] border-2 border-white rounded-md overflow-y-auto">
                  <div className="flex p-2 flex-wrap gap-2">
                    {techStackState.map((techStackItem, index) => (
                      <p
                        key={index}
                        className="bg-white rounded-md text-black p-1  flex place-items-center gap-1 font-semibold mr-1"
                      >
                        {techStackItem.content}
                        <FiStar
                          onClick={() => {
                            let tempTechStackArray = [...techStackState];
                            tempTechStackArray[index].featured =
                              !techStackItem.featured;
                            setTechStackState(tempTechStackArray);
                          }}
                          fill={techStackItem.featured ? "black" : "none"}
                          className="hover:cursor-pointer"
                        />
                        <FiX
                          onClick={() => {
                            let tempTechStackArray = [...techStackState];
                            tempTechStackArray.splice(index, 1);
                            setTechStackState(tempTechStackArray);
                          }}
                          className="hover:scale-110 hover:cursor-pointer"
                        />
                      </p>
                    ))}
                    <input
                      type="text"
                      value={techStackState}
                      name="techStack"
                      readOnly={true}
                      className="hidden"
                    />
                    <input
                      onChange={(event) => {
                        event.preventDefault();
                        if (event.target.value.includes(",")) {
                          event.target.value
                            .split(",")
                            .filter((item) => item != "")
                            .forEach((tempTextItem) => {
                              setTechStackState([
                                ...techStackState,
                                {
                                  content: tempTextItem,
                                  featured: false,
                                },
                              ]);
                            });
                          event.target.value = "";
                        }
                      }}
                      type="text"
                      className="bg-black flex w-24 p-1 font-semibold focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-16">
              <label>Body</label>
              <div className="border-2 border-white rounded-md p-2">
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    let cursorPositon = body.current.selectionStart;
                    setBodyTextState(
                      bodyTextState.substring(0, body.current.selectionStart) +
                        "&nbsp;" +
                        bodyTextState.substring(body.current.selectionStart)
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
                      setBodyTextState(event.target.value);
                    }}
                    value={bodyTextState}
                    name="body"
                    ref={body}
                    className="h-[23rem] focus:outline-none border-t-2 p-1 border-white bg-black"
                    rows={18}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <ImageUpload />

            <div className="flex flex-col mt-44">
              <label>Markdown</label>
              <div
                className="bg-black border-2 border-white rounded-md h-[27.5rem] p-2 overflow-y-auto"
                rows={18}
              >
                <ReactMarkdown remarkPlugins={remarkGfm}>
                  {bodyTextState}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-white font-semibold text-black rounded-lg p-2 absolute right-0 top-0 m-10"
        >
          {isLoading ? "Saving..." : "Save Project"}
        </button>
      </form>
    </div>
  );
}
