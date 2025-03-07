import { useState } from "react";
import { StudyPlanType, StudyPlanInputType } from "../types/StudyPlanTypes";
import {
  StudyPlansList,
  CreatePlan,
  StudyPlanView,
} from "../components/StudyPlanPageComponents";

// passed into CreatePlan component as props

const examplePlans: StudyPlanType[] = [
  {
    goal: "React.js",
    plan: "do this and that",
    id: "1",
    createdAt: new Date(),
  },
  {
    goal: "Node.js",
    plan: "do this and that",
    id: "2",
    createdAt: new Date(),
  },
  {
    goal: "MongoDB",
    plan: "do this and that",
    id: "3",
    createdAt: new Date(),
  },
  {
    goal: "PostgresSQL",
    plan: "do this and that",
    id: "4",
    createdAt: new Date(),
  },
];

const StudyPlan = () => {
  // TODO: reset studyPlans useState to [] by default OR add logic to fill studyPlans with plans from DB
  const [studyPlans, setStudyPlans] = useState<StudyPlanType[]>(examplePlans); // List of study plans.
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

        if (errorData.errors) {
          const validationErrors = errorData.errors;
          throw new Error(JSON.stringify(validationErrors));
        } else {
          throw new Error(
            `HTTP Error! status: ${response.status}, message: ${
              errorData.message || response.statusText
            }`
          );
        }
      }

      const responseData = await response.json();
      const createdPlan: StudyPlanType = responseData.data;
      const message: string = responseData.message;
      console.log("Created Plan:", createdPlan); // testing purposes
      console.log("Message:", message);

      setStudyPlans([...studyPlans, createdPlan]);
      setSelectedPlan(createdPlan);
    } catch (error) {
      console.error("Error creating study plan:", error);
      // alert("Error creating study plan. Please try again.");
    }
  };

  const onStudyPlanClick = (studyPlan: StudyPlanType) => {
    setSelectedPlan(studyPlan);
  };

  return (
    <div className="flex bg-white h-[calc(100vh-4rem)]">
      {/*Left side -> CreatePlan and StudyPlanList components */}
      <div className="w-1/3 flex flex-col h-full">
        <CreatePlan handleCreateStudyPlan={handleCreateStudyPlan} />
        <StudyPlansList
          studyPlans={studyPlans}
          onStudyPlanClick={onStudyPlanClick}
        />
      </div>

      {/*Right side -> Study Plan View */}
      <div className="w-2/3  h-full">
        <StudyPlanView selectedPlan={selectedPlan} />
      </div>
    </div>
  );
};

export default StudyPlan;
