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
    <div className="flex justify-center items-center w-full bg-blue-400 h-3/4">
      {/* List container (overflows y)*/}
      <div>
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
