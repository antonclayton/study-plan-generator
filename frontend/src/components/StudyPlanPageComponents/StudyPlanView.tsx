import React, { useState } from "react";
import { StudyPlanInputType, StudyPlanType } from "../../types/StudyPlanTypes";

interface StudyPlanViewProps {
  selectedPlan: StudyPlanType | null;
}

const StudyPlanView: React.FC<StudyPlanViewProps> = ({ selectedPlan }) => {
  return (
    <div className="flex justify-center items-center w-full h-full border-4 rounded-3xl bg-zinc-950 border-zinc-700">
      StudyPlanView
    </div>
  );
};

export default StudyPlanView;
