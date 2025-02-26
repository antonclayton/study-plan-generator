import React, { useState } from "react";
import { StudyPlanInputType } from "../../types/StudyPlanTypes";

interface CreatePlanProps {
  handleCreateStudyPlan: (newPlan: StudyPlanInputType) => void;
}

// acts as the create/form input for study plan creation
const CreatePlan: React.FC<CreatePlanProps> = ({ handleCreateStudyPlan }) => {
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("");

  const handleSubmit = () => {
    const newPlan: StudyPlanInputType = {
      goal: goal,
      plan: plan,
    };
    handleCreateStudyPlan(newPlan);
    setGoal("");
    setPlan("");
  };
  return (
    <div className="flex flex-col justify-center items-center w-full bg-red-400 h-1/4 m-2">
      <input
        type="text"
        placeholder="I want to learn _____"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="border-2 border-black m-2 text-center bg-white p-2 rounded-xl"
      />
      <input
        type="text"
        placeholder="plan placeholder"
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
        className="border-2 border-black m-2 w-3/4 bg-white p-2 rounded-xl"
      />
      <button
        onClick={handleSubmit}
        className="border-2 bg-green-800 cursor-pointer py-2 px-4 rounded-xl m-2 text-white border-black font-bold"
      >
        Generate Plan
      </button>
    </div>
  );
};

export default CreatePlan;
