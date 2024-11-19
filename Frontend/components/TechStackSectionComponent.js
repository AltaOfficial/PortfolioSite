import { useEffect, useState } from "react";
import TechnologyComponent from "./TechnologyComponent";
import { getTechItems } from "@/sanity/lib/sanity-utils";
import { getImageAsset } from "@sanity/asset-utils";

export default function TechStackSectionComponent({ techStacksRef }) {
  const [techStacks, setTechStacks] = useState();
  const [techCategories, setTechCatergories] = useState();
  const techCategoriesSet = new Set([]);

  useEffect(() => {
    getTechItems().then((techStacks) => {
      techStacks.map((techStackItem) => {
        techCategoriesSet.add(techStackItem.techCategory);
      });

      setTechStacks(techStacks);
      setTechCatergories(Array.from(techCategoriesSet));
    });
  }, []);

  return (
    <div
      className="mt-20 sm:mt-32 ml-2 sm:ml-5"
      id="techStacks"
      ref={techStacksRef}
    >
      <p className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-6 sm:mb-10">
        My Tech Stack and Experience
      </p>
      <div>
        <div className="grid gap-8 md:gap-10 xl:gap-12 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:place-items-center xl:place-items-start lg:place-items-center place-items-center">
          {techCategories &&
            techCategories.map((techCategory, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 items-center sm:items-start"
              >
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                  {techCategory}
                </p>
                {techStacks
                  .filter(
                    (techStackItem) =>
                      techStackItem.techCategory === techCategory
                  )
                  .map((techStackItem) => (
                    <TechnologyComponent
                      key={techStackItem._id}
                      pictureUrl={
                        getImageAsset(techStackItem.techItemLogo.asset._ref, {
                          projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
                          dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
                        }).url
                      }
                      techName={techStackItem.techName}
                      familiarity={techStackItem.familiarity}
                      expirienceDesc={techStackItem.expirience}
                    />
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
