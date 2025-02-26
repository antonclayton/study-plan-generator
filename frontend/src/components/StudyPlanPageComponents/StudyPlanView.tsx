import React from "react";
import { StudyPlanType } from "../../types/StudyPlanTypes";

interface StudyPlanViewProps {
  selectedPlan: StudyPlanType | null;
}

const StudyPlanView: React.FC<StudyPlanViewProps> = ({ selectedPlan }) => {
  return <div>StudyPlanView</div>;
};

export default StudyPlanView;
