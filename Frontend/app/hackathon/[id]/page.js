"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import HomepageStarsCanvas from "@/components/HomepageStarsCanvas";
import { getHackathon } from "@/sanity/lib/sanity-utils";
import { useParams } from "next/navigation";
import { PortableText } from "next-sanity";
import { getImageAsset } from "@sanity/asset-utils";
import Link from "next/link";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import { FaGithub } from "react-icons/fa6";

export default function Hackathon() {
  const fullTechStack = useRef();
  const params = useParams();
  const images = [
    "https://spreadsimple.com/blog/content/images/2022/08/stripe-main-page.png",
  ];
  const [hackathon, setHackathon] = useState();

  useEffect(() => {
    getHackathon(params.id).then((hackathon) => {
      setHackathon(hackathon);
    });
  }, []);

  return (
    <div className="h-dvh">
      <Navbar notOnHomePage={true} />
      <HomepageStarsCanvas maxSize={2} />
      <div className="px-36">
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="flex place-content-center">
            {hackathon && (
              <ImageSlider
                imageUrls={hackathon.hackathonImages
                  .filter(
                    (hackathonImageSet) => hackathonImageSet.isFeatured != true
                  )
                  .map((hackathonImageSet) => {
                    return getImageAsset(
                      hackathonImageSet.hackathonImage.asset._ref,
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
                {hackathon && hackathon.title}
              </p>
              <p className="opacity-75">
                {hackathon &&
                  `${new Date(hackathon.startDate).toLocaleDateString("en-US")} - ` +
                    (hackathon.endDate
                      ? `${new Date(hackathon.endDate).toLocaleDateString("en-US")}`
                      : "Present")}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xl">
                {hackathon && hackathon.shortDescription}
              </p>
              <div className="flex">
                {hackathon && hackathon.liveSiteLink && (
                  <Link
                    className="text-[#6A99FF] font-semibold"
                    href={hackathon.liveSiteLink}
                    target="_blank"
                  >
                    Visit Website
                  </Link>
                )}
                {hackathon && hackathon.repoLink && hackathon.liveSiteLink && (
                  <p className="px-2">|</p>
                )}
                {hackathon && hackathon.repoLink && (
                  <Link
                    className="text-[#6A99FF] font-semibold flex place-items-center gap-1"
                    href={hackathon.repoLink}
                    target="_blank"
                  >
                    <FaGithub className="fill-white" size={20} />
                    See Github Repo
                  </Link>
                )}
              </div>
              <div className="flex flex-col flex-wrap gap-2 font-semibold">
                {hackathon && <p>Team</p>}
                <div className="flex gap-2">
                  {hackathon &&
                    hackathon.team.map((teamMember, index) => (
                      <div key={index} className="flex flex-col gap-2">
                        <Link
                          href={
                            teamMember.teamMemberUrl
                              ? teamMember.teamMemberUrl
                              : ""
                          }
                          target="_blank"
                          className={`flex flex-row place-items-center ${teamMember.teamMemberUrl ? "" : "cursor-default"}`}
                        >
                          <Image
                            width={30}
                            height={30}
                            src={
                              getImageAsset(
                                teamMember.teamMemberAvatar.asset._ref,
                                {
                                  projectId:
                                    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
                                  dataset:
                                    process.env.NEXT_PUBLIC_SANITY_DATASET,
                                }
                              ).url
                            }
                            alt=""
                            className="rounded-full"
                          />
                          <p className="px-2">{teamMember.teamMemberName}</p>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          {hackathon && <PortableText value={hackathon.content} />}
          <div className="h-7 mt-10">
            <p className="text-2xl" ref={fullTechStack}>
              Full Tech Stack
            </p>
            <div className="flex gap-2 font-semibold pb-10">
              {hackathon &&
                hackathon.tags.map((tag, index) => (
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
