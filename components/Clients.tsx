import React from "react";
import { TextGenerateEffect } from "./UI/TextGenerateEffect";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./UI/infinite-moving-cards";

export const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h3 className="heading">
        The words from our 
        <span className="text-purple"> clients</span>
      </h3>
      <div className="flex flex-col items-center py-20">
        <div className="rounded-md flex flex-col antialiased items-center relative overflow-hidden">
        <InfiniteMovingCards 
        items={testimonials}
        direction="right"
        speed="slow"/>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
          {companies.map(({id, img, name, nameImg})=>(
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
               <img src={img} alt={name} className="md:w-10 w-5" />
               <img src={nameImg} alt={name} className="md:w-24 w-20"/>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};
export default Clients;
