"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import HomepageStarsCanvas from "@/components/HomepageStarsCanvas";
import ReactMarkdown from "react-markdown";
import { useParams } from "next/navigation";
import { getProject } from "@/app/actions";
import Link from "next/link";

export default function Project() {
  const fullTechStack = useRef();
  const params = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    const fetchProjects = async () => {
      // try to use useMemo here, so it doesnt refresh everytime user goes back to the homepage, since data isnt changing that often
      const { data, error } = await getProject(params.id);
      if (error) {
        setProject(null);
        console.error(error);
      } else {
        setProject(data);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="h-dvh">
      <Navbar notOnHomePage={true} />
      <HomepageStarsCanvas maxSize={2} />
      <div className="px-36">
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
              <p className="text-4xl font-semibold">
                {project && project.title}
              </p>
              <p className="opacity-75">
                {project &&
                  `${new Date(project.start_date).getDate()}/${new Date(
                    project.start_date
                  ).getMonth()}/${new Date(
                    project.start_date
                  ).getFullYear()} - ` +
                    (project.end_date
                      ? `${new Date(project.end_date).getDate()}/${new Date(
                          project.end_date
                        ).getMonth()}/${new Date(
                          project.end_date
                        ).getFullYear()}`
                      : "Present")}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xl">{project && project.short_description}</p>
              <div className="flex flex-wrap gap-2 font-semibold">
                {project &&
                  project.tags
                    .filter((tag) => tag.featured == true)
                    .map((tag, index) => (
                      <p
                        key={index}
                        className="bg-[#444A5A] rounded-md p-1 px-2"
                      >
                        {tag.content}
                      </p>
                    ))}
                <button
                  onClick={() => {
                    fullTechStack.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  See all...
                </button>
              </div>
              <div className="flex">
                {project && project.live_site_url && (
                  <Link
                    className="text-[#6A99FF] font-semibold"
                    href={project.live_site_url}
                    target="_blank"
                  >
                    Visit Website
                  </Link>
                )}
                {project && project.repository_url && project.live_site_url && (
                  <p className="px-2">|</p>
                )}
                {project && project.repository_url && (
                  <Link
                    className="text-[#6A99FF] font-semibold"
                    href={project.repository_url}
                    target="_blank"
                  >
                    See Github Repo
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <ReactMarkdown>{project && project.body}</ReactMarkdown>
          <div className="h-7 mt-10">
            <p className="text-2xl" ref={fullTechStack}>
              Full Tech Stack
            </p>
            <div className="flex gap-2 font-semibold pb-10">
              {project &&
                project.tags.map((tag, index) => (
                  <p key={index} className="bg-[#444A5A] rounded-md p-1 px-2">
                    {tag.content}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
