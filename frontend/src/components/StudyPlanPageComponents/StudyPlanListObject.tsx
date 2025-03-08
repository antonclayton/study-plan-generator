import React from "react";
import { StudyPlanType } from "../../types/StudyPlanTypes";

interface StudyPlanListObjectProps {
  studyPlan: StudyPlanType;
  onClick: () => void;
}

const StudyPlanListObject: React.FC<StudyPlanListObjectProps> = ({
  studyPlan,
  onClick,
}) => {
  return (
    <div
      className="w-full bg-zinc-800 border-2 rounded-lg py-0.5 px-1 lg:py-2 lg:px-4 cursor-pointer hover:bg-zinc-700 my-0.5 sm:my-1 lg:my-2"
      onClick={onClick}
    >
      <h2 className="text-white w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        I want to learn {studyPlan.goal}
      </h2>
      <p className="w-full text-[9px] text-gray-300 sm:text-xs md:text-sm lg:text-base xl:text-lg">
        {studyPlan.plan?.substring(0, 30)}...
      </p>
    </div>
  );
};

export default StudyPlanListObject;
