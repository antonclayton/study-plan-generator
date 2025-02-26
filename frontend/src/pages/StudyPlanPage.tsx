import React, { useState } from "react";
import { StudyPlanType } from "../types/StudyPlanTypes";
import {
  StudyPlansList,
  CreatePlan,
  StudyPlanView,
} from "../components/StudyPlanPageComponents";

const StudyPlan = () => {
  const [studyPlans, setStudyPlans] = useState<StudyPlanType[]>([]); // List of study plans.
  const [selectedPlan, setSelectedPlan] = useState<StudyPlanType | null>(null); // the study plan to be displayed in the StudyPlanDisplay component.
  return (
    <div className="flex bg-white h-[calc(100vh-4rem)]">
      {/*Left side -> CreatePlan and StudyPlanList components */}
      <div className="w-1/3 p-4 flex flex-col h-full">
        <CreatePlan />
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
