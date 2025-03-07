import React from "react";
import { StudyPlanType } from "../../types/StudyPlanTypes";
import StudyPlanListObject from "./StudyPlanListObject";

interface StudyPlansListProps {
  studyPlans: StudyPlanType[];
  onStudyPlanClick: (studyPlan: StudyPlanType) => void;
}

// List of StudyPlans (Only shows the Goal of the study plan and not the generated plan)
// List items can be clicked to display them in StudyPlan page.
const StudyPlansList: React.FC<StudyPlansListProps> = ({
  studyPlans,
  onStudyPlanClick,
}) => {
  return (
    <div className="flex flex-col items-center w-full bg-blue-400 h-3/4 border-1">
      <div className="flex w-4/5 mt-2 sm:mt-6 lg:mt-10">
        <h2 className="font-bold text-white m-2 text-sm sm:text-base lg:text-xl xl:text-2xl">
          Study Plans:
        </h2>
      </div>
      {/* List container (overflows y)*/}
      <div className="flex flex-col justify-start items-center w-4/5 max-h-3/4 overflow-y-auto">
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
