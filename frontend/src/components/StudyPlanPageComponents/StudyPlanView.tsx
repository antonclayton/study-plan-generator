import React, { useState } from "react";
import { StudyPlanInputType, StudyPlanType } from "../../types/StudyPlanTypes";

interface StudyPlanViewProps {
  selectedPlan: StudyPlanType | null;
}

const StudyPlanView: React.FC<StudyPlanViewProps> = ({ selectedPlan }) => {
  return (
    <div className="flex justify-center items-center w-full h-full border-4 rounded-3xl bg-zinc-950 border-zinc-700">
      <div className="flex flex-col items-center w-9/10 h-9/10 border-4 rounded-3xl bg-zinc-800 border-zinc-700">
        <h1 className="text-white mt-2 sm:mt-3 lg:mt-6 xl:mt-8 font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl underline underline-offset-4">
          {selectedPlan ? selectedPlan.goal : "No Plan Selected"}
        </h1>
        <p className="text-white mt-2 sm:mt-3 lg:mt-6 xl:mt-8 font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg w-4/5 border-2 h-4/5 max-h-4/5 rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 overflow-y-auto ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum alias
          nulla est praesentium voluptatem officia eligendi beatae corrupti aut,
          id necessitatibus odit incidunt quaerat adipisci autem itaque
          accusantium voluptate vitae? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Possimus rerum obcaecati fugit eligendi doloremque
          modi! Ducimus aliquid eius nostrum enim ratione animi ex explicabo
          consequuntur quo doloremque. Accusantium, provident qui. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nisi vero vel fugit,
          possimus neque mollitia, impedit laborum commodi quaerat assumenda
          maxime aliquid cum obcaecati consectetur itaque iure nulla inventore
          repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsum alias nulla est praesentium voluptatem officia eligendi beatae
          corrupti aut, id necessitatibus odit incidunt quaerat adipisci autem
          itaque accusantium voluptate vitae? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Possimus rerum obcaecati fugit eligendi
          doloremque modi! Ducimus aliquid eius nostrum enim ratione animi ex
          explicabo consequuntur quo doloremque. Accusantium, provident qui.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero vel
          fugit, possimus neque mollitia, impedit laborum commodi quaerat
          assumenda maxime aliquid cum obcaecati consectetur itaque iure nulla
          inventore repellat?
        </p>
      </div>
    </div>
  );
};

export default StudyPlanView;
