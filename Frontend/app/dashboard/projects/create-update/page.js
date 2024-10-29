"use client";
import { useRef, useState, useFormState } from "react";
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

export default function createUpdateProject({
  title,
  shortDescription,
  bodyText,
  dates,
  techStack,
  projectId,
}) {
  const initialState = {};
  const [formState, formAction] = useFormState(uploadProject, initialState);
  const [titleState, setTitleState] = useState(title ? title : "");
  const [dateState, setDate] = useState({ from: "", to: "" });
  const [shortDescriptionState, setShortDescriptionState] = useState(
    shortDescription ? shortDescription : ""
  );
  const [liveSiteLinkState, setLiveSiteLinkState] = useState("");
  const [repoLinkState, setRepoLinkState] = useState("");
  const [techStackState, setTechStackState] = useState(
    techStack ? techStack : [{ content: "React", featured: false }]
  );
  const [bodyTextState, setBodyTextState] = useState("");
  const [filesState, setFilesState] = useState([]);
  const body = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  return (
    <div className="p-8">
      <p className="text-5xl font-semibold mb-8">New Project</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (!titleState) {
            toast.open({
              title: "Missing Fields",
              message: "Title is a required field",
            });
            return;
          } else if (!bodyTextState) {
            toast.open({
              title: "Missing Fields",
              message: "Body is a required field",
            });
            return;
          } else if (!shortDescriptionState) {
            toast.open({
              title: "Missing Fields",
              message: "Paragraph explainer is a required field",
            });
            return;
          } else if (!dateState.from) {
            toast.open({
              title: "Missing Fields",
              message: "From date is a required field",
            });
            return;
          } else if (filesState.length == 0) {
            toast.open({
              title: "Missing Fields",
              message: "Atleast 1 project image is required",
            });
            return;
          }

          console.log(JSON.parse(JSON.stringify(filesState)));

          setIsLoading(true);
          uploadProject({
            title: titleState,
            elevatorPitch: shortDescriptionState,
            fullMarkdownDescription: bodyTextState,
            projectId: projectId ? projectId : "",
            dateFrom: dateState.from,
            dateTo: dateState.to,
            imageFiles: JSON.stringify(filesState),
            techStackTags: techStackState,
            liveSiteLink: liveSiteLinkState,
            repoLink: repoLinkState,
          }).then(({ data, error }) => {
            if (data) {
              toast.open({
                title: "Success",
                message: "Successfully created new project",
              });
            } else if (error) {
              toast.open({
                title: "Error occured",
                message: error.message,
              });
            }
            setIsLoading(false);
          });
        }}
      >
        <div className="grid grid-cols-2 gap-64">
          <div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <label>Title</label>
                <input
                  type="text"
                  className="bg-black border-2 border-white rounded-md"
                  name="title"
                  value={titleState}
                  onChange={(event) => setTitleState(event.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label>Date From To</label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    className="bg-black border-2 border-white rounded-md"
                    name="from"
                    value={dateState.from}
                    onChange={(event) =>
                      setDate({
                        from: event.target.value,
                        to: dateState.to,
                      })
                    }
                  />
                  <input
                    type="date"
                    className="bg-black border-2 border-white rounded-md"
                    name="to"
                    value={dateState.to}
                    onChange={(event) =>
                      setDate({ from: dateState.from, to: event.target.value })
                    }
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
                  value={shortDescriptionState}
                  onChange={(event) =>
                    setShortDescriptionState(event.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label>Live site link</label>
                  <input
                    type="text"
                    className="bg-black border-2 border-white rounded-md"
                    name="liveSiteLink"
                    value={liveSiteLinkState}
                    onChange={(event) =>
                      setLiveSiteLinkState(event.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <p>Repo link</p>
                  <input
                    type="text"
                    className="bg-black border-2 border-white rounded-md"
                    name="repoLink"
                    value={repoLinkState}
                    onChange={(event) => setRepoLinkState(event.target.value)}
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
                    contentEditable="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <ImageUpload
              filesState={filesState}
              setFilesState={setFilesState}
            />

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
