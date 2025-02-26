import React from "react";
import { StudyPlanType } from "../../types/StudyPlanTypes";

interface StudyPlansListProps {
  studyPlans: StudyPlanType[];
}

// List of StudyPlans (Only shows the Goal of the study plan and not the generated plan)
// List items can be clicked to display them in StudyPlan page.
const StudyPlansList: React.FC<StudyPlansListProps> = ({ studyPlans }) => {
  return <div>StudyPlansList</div>;
};

export default StudyPlansList;
