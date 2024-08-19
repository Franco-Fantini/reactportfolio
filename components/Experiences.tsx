import { workExperience } from "@/data";
import React from "react";
import { Button } from "./UI/Moving-border";

export const Experiences = () => {
  return (
    <div className="py-20" id="experiences">
      <h3 className="heading">
        My
        <span className="text-purple"> work experiences</span>
      </h3>

      <div className="w-full mt-12 grid sm:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 1000) + 1000}
            borderRadius="1.75rem"
            className=" text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex md:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-12 md:w-16"
              />
              <div className="lg:ms-5">
                <h4 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h4>
                <p className="text-start text-white mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
export default Experiences;
