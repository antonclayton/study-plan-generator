import React from "react";
import { StudyPlanInputType } from "../../types/StudyPlanTypes";

interface CreatePlanProps {
  handleCreateStudyPlan: (newPlan: StudyPlanInputType) => void;
}

// acts as the create/form input for study plan creation
const CreatePlan: React.FC<CreatePlanProps> = ({ handleCreateStudyPlan }) => {
  return (
    <div className="flex justify-center items-center w-full bg-red-400 h-1/4 m-2">
      CreatePlan
    </div>
  );
};

export default CreatePlan;
