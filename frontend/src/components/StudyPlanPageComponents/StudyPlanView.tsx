import React from "react";
import { StudyPlanType } from "../../types/StudyPlanTypes";

interface StudyPlanViewProps {
  selectedPlan: StudyPlanType | null;
}

const StudyPlanView: React.FC<StudyPlanViewProps> = ({ selectedPlan }) => {
  return (
    <div className="flex justify-center items-center w-full bg-green-400 h-full mx-2">
      StudyPlanView
    </div>
  );
};

export default StudyPlanView;
