import React from "react";
import { StudyPlanType } from "../../types/StudyPlanTypes";
import StudyPlanListObject from "./StudyPlanListObject";

interface StudyPlansListProps {
  studyPlans: StudyPlanType[];
  onStudyPlanClick: (studyPlan: StudyPlanType) => void;
}

// TODO: ADD SEARCH FUNCTION TO SEARCH FOR STUDYPLANS BY GOAL

// List of StudyPlans (Only shows the Goal of the study plan and not the generated plan)
// List items can be clicked to display them in StudyPlan page.
const StudyPlansList: React.FC<StudyPlansListProps> = ({
  studyPlans,
  onStudyPlanClick,
}) => {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-950 h-3/4 rounded-b-3xl border-x-4 border-t-2 border-b-4 border-zinc-700">
      <div className="flex w-3/4 mt-2 sm:mt-6 lg:mt-10">
        <h2 className="font-bold text-white m-2 text-sm sm:text-base lg:text-xl xl:text-2xl">
          Study Plans:
        </h2>
      </div>
      {/* List container (overflows y)*/}
      <div className="flex flex-col justify-start items-center w-3/4 max-h-3/4 overflow-y-auto">
        {studyPlans && studyPlans.length > 0 ? (
          studyPlans.map((studyPlan) => (
            <StudyPlanListObject
              key={studyPlan.id}
              studyPlan={studyPlan}
              onClick={() => onStudyPlanClick(studyPlan)}
            />
          ))
        ) : (
          <p>No study plans available</p>
        )}
      </div>
    </div>
  );
};

export default StudyPlansList;
