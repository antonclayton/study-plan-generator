import React from "react";
import { StudyPlanType } from "../../types/StudyPlanTypes";

interface StudyPlansListProps {
  studyPlans: StudyPlanType[];
}

// List of StudyPlans (Only shows the Goal of the study plan and not the generated plan)
// List items can be clicked to display them in StudyPlan page.
const StudyPlansList: React.FC<StudyPlansListProps> = ({ studyPlans }) => {
  return (
    <div className="flex justify-center items-center w-full bg-blue-400 h-3/4 m-2">
      StudyPlansList
    </div>
  );
};

export default StudyPlansList;
