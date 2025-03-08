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
    <div className="flex flex-col justify-center items-center w-full bg-zinc-950 h-1/4 rounded-t-3xl border-x-4 border-b-2 border-t-4 border-zinc-700">
      <p className="w-2/3 text-[10px] lg:p-1 lg:m-1 sm:text-sm lg:text-base xl:text-lg text-white text-center">
        Please be specific! <br />
        Example: Introductory Python
      </p>
      <input
        type="text"
        placeholder="I want to learn _______!"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="border-2 border-black m-0.5 text-center w-3/4 bg-zinc-300 p-0.5 rounded-xl text-xs lg:p-2 lg:m-2 lg:text-xl font-bold"
      />
      {/* <input
        type="text"
        placeholder="plan placeholder"
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
        className="border-2 border-black m-2 w-3/4 bg-white p-2 rounded-xl"
      /> */}
      <button
        onClick={handleSubmit}
        className="border-2 bg-green-900 cursor-pointer w-3/4 text-xs py-0.5 px-1 rounded-xl m-2 text-white border-black font-bold lg:py-2 lg:px-4 lg:text-xl hover:scale-101 hover:bg-green-800 transition-transform duration-300"
      >
        Generate Plan
      </button>
    </div>
  );
};

export default CreatePlan;
