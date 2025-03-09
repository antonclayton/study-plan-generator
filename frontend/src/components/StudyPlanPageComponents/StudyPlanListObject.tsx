import React from "react";
import { StudyPlanType } from "../../types/StudyPlanTypes";

interface StudyPlanListObjectProps {
  studyPlan: StudyPlanType;
  onClick: () => void;
  handleDelete: () => void;
}

const StudyPlanListObject: React.FC<StudyPlanListObjectProps> = ({
  studyPlan,
  onClick,
  handleDelete,
}) => {
  return (
    <div className="flex flex-col xl:flex-row w-full bg-zinc-800 border-2 rounded-lg py-0.5 px-1 lg:py-2 lg:px-4 hover:bg-zinc-700 hover:scale-101 transition-transform duration-200 my-0.5 sm:my-1 lg:my-2">
      <div className="w-3/4">
        <h2 className="text-white w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          I want to learn {studyPlan.goal}
        </h2>
        <p className="w-full text-[9px] text-gray-300 sm:text-xs md:text-sm lg:text-base xl:text-lg ">
          {studyPlan.plan?.substring(0, 30)}...
        </p>
      </div>
      <div className="flex justify-center items-center flex-row">
        <button
          onClick={onClick}
          className="text-white text-[9px] sm:text-xs md:text-sm lg:text-base xl:text-lg bg-zinc-600 px-1 py-0.5 md:px-3 md:py-1 mx-1 cursor-pointer rounded-2xl hover:scale-105 transition-transform duration-200"
        >
          Select
        </button>
        <button
          onClick={handleDelete}
          className="text-white text-[9px] sm:text-xs md:text-sm lg:text-base xl:text-lg bg-red-900 px-1 py-0.5 md:px-3 md:py-1 xl:mx-2 mx-0 my-2 cursor-pointer rounded-2xl hover:scale-105 transition-transform duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default StudyPlanListObject;
