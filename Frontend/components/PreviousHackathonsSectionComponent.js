import { useEffect, useState } from "react";
import HackathonComponent from "./HackathonComponent";
import { getHackathons } from "@/sanity/lib/sanity-utils";
import { getImageAsset } from "@sanity/asset-utils";

export default function PreviousHackathonsSectionComponent({
  previousHackathonsRef,
}) {
  const [hackathons, setHackathons] = useState();

  useEffect(() => {
    getHackathons().then((hackathons) => {
      setHackathons(hackathons);
    });
  }, []);

  return (
    <div
      className="mt-20 sm:mt-32 ml-2 sm:ml-5"
      id="hackathons"
      ref={previousHackathonsRef}
    >
      <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 sm:mb-10">
        Past Hackathons
      </p>
      <div className="flex gap-4 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-700">
        {hackathons &&
          hackathons.map((hackathon) => (
            <HackathonComponent
              key={hackathon._id}
              title={hackathon.title}
              frontPicture={
                hackathon.hackathonImages.filter(
                  (hackathonImage) => hackathonImage.isFeatured === true
                ).length > 0
                  ? getImageAsset(
                      hackathon.hackathonImages.filter(
                        (hackathonImage) => hackathonImage.isFeatured === true
                      )[0].hackathonImage.asset._ref,
                      {
                        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
                        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
                      }
                    ).url
                  : getImageAsset(
                      hackathon.hackathonImages[0].hackathonImage.asset._ref,
                      {
                        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
                        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
                      }
                    ).url
              }
              startDate={hackathon.startDate}
              endDate={hackathon.endDate}
              sentenceExplaination={hackathon.shortDescription}
              hackathonId={hackathon._id}
            />
          ))}
      </div>
    </div>
  );
}
