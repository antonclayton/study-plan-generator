import React, { useState } from "react";
import { StudyPlanType, StudyPlanInputType } from "../types/StudyPlanTypes";
import {
  StudyPlansList,
  CreatePlan,
  StudyPlanView,
} from "../components/StudyPlanPageComponents";

// passed into CreatePlan component as props

const StudyPlan = () => {
  const [studyPlans, setStudyPlans] = useState<StudyPlanType[]>([]); // List of study plans.
  const [selectedPlan, setSelectedPlan] = useState<StudyPlanType | null>(null); // the study plan to be displayed in the StudyPlanDisplay component.

  const handleCreateStudyPlan = async (newPlan: StudyPlanInputType) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlan),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP Error! status: ${response.status}, message: ${
            errorData.message || response.statusText
          }`
        );
      }

      const createdPlan: StudyPlanType = await response.json();
      console.log("Created Plan:", createdPlan);

      setStudyPlans([...studyPlans, createdPlan]);
      setSelectedPlan(createdPlan);
    } catch (error) {
      console.error("Error creating study plan:", error);
      alert("Error creating study plan. Please try again.");
    }
  };

  return (
    <div className="flex bg-white h-[calc(100vh-4rem)]">
      {/*Left side -> CreatePlan and StudyPlanList components */}
      <div className="w-1/3 p-4 flex flex-col h-full">
        <CreatePlan handleCreateStudyPlan={handleCreateStudyPlan} />
        <StudyPlansList studyPlans={studyPlans} />
      </div>

      {/*Right side -> Study Plan View */}
      <div className="w-2/3 p-6 h-full">
        <StudyPlanView selectedPlan={selectedPlan} />
      </div>
    </div>
  );
};

export default StudyPlan;
