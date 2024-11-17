"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import HomepageStarsCanvas from "@/components/HomepageStarsCanvas";
import { PortableText } from "next-sanity";
import { useParams } from "next/navigation";
import { getProject } from "@/sanity/lib/sanity-utils";
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";
import { FaGithub } from "react-icons/fa6";
import { getImageAsset } from "@sanity/asset-utils";

export default function Project() {
  const fullTechStack = useRef();
  const params = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    getProject(params.id).then((project) => setProject(project));
  }, []);

  return (
    <div className="h-dvh">
      <Navbar notOnHomePage={true} />
      <HomepageStarsCanvas maxSize={2} />
      <div className="px-36">
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="flex place-content-center">
            {project && (
              <ImageSlider
                imageUrls={project.projectImages
                  .filter(
                    (projectImageSet) => projectImageSet.isFeatured != true
                  )
                  .map((projectImageSet) => {
                    return getImageAsset(
                      projectImageSet.projectImage.asset._ref,
                      {
                        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
                        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
                      }
                    ).url;
                  })}
                className={"rounded-lg outline outline-white outline-3"}
              />
            )}
          </div>
          <div className="pt-5">
            <div className="mb-6">
              <p className="text-4xl font-semibold">
                {project && project.title}
              </p>
              <p className="opacity-75">
                {project &&
                  `${new Date(project.startDate).toLocaleDateString("en-US")} - ` +
                    (project.endDate
                      ? `${new Date(project.endDate).toLocaleDateString("en-US")}`
                      : "Present")}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xl">{project && project.shortDescription}</p>
              <div className="flex flex-wrap gap-2 font-semibold">
                {project &&
                  project.tags
                    .filter((tag) => tag.isFeatured == true)
                    .map((tag, index) => (
                      <p
                        key={index}
                        className="bg-[#444A5A] rounded-md p-1 px-2"
                      >
                        {tag.techName}
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
                {project && project.liveSiteLink && (
                  <Link
                    className="text-[#6A99FF] font-semibold"
                    href={project.liveSiteLink}
                    target="_blank"
                  >
                    Visit Website
                  </Link>
                )}
                {project && project.repoLink && project.liveSiteLink && (
                  <p className="px-2">|</p>
                )}
                {project && project.repoLink && (
                  <Link
                    className="text-[#6A99FF] font-semibold flex place-items-center gap-1"
                    href={project.repoLink}
                    target="_blank"
                  >
                    <FaGithub className="fill-white" size={20} />
                    See Github Repo
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          {project && <PortableText value={project.content} />}
          <div className="h-7 mt-10">
            <p className="text-2xl" ref={fullTechStack}>
              Full Tech Stack
            </p>
            <div className="flex gap-2 font-semibold pb-10">
              {project &&
                project.tags.map((tag, index) => (
                  <p key={index} className="bg-[#444A5A] rounded-md p-1 px-2">
                    {tag.techName}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
