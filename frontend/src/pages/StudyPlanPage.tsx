import { useEffect, useState } from "react";
import { StudyPlanType, StudyPlanInputType } from "../types/StudyPlanTypes";
import {
  StudyPlansList,
  CreatePlan,
  StudyPlanView,
} from "../components/StudyPlanPageComponents";

// passed into CreatePlan component as props

const StudyPlan = () => {
  // TODO: reset studyPlans useState to [] by default OR add logic to fill studyPlans with plans from DB
  const [studyPlans, setStudyPlans] = useState<StudyPlanType[]>([]); // List of study plans.
  const [selectedPlan, setSelectedPlan] = useState<StudyPlanType | null>(null); // the study plan to be displayed in the StudyPlanDisplay component.
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateStudyPlan = async (newPlan: StudyPlanInputType) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/protected/plans",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPlan),
        }
      );
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteStudyPlan = async (planId: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/protected/plans/${planId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
      const message: string = responseData.message;
      console.log("Deleted Plan ID:", planId);
      console.log("Message:", message);

      setStudyPlans(studyPlans.filter((plan) => plan.id !== planId)); // filter out the deleted plan
      if (selectedPlan && selectedPlan.id === planId) {
        // clear selectedPlan if it is currently the one on display
        setSelectedPlan(null);
      }
    } catch (error) {
      console.error("Error deleting study plan:", error);
    }
  };

  useEffect(() => {
    const fetchStudyPlans = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/protected/plans"
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `HTTP Error! status: ${response.status}, message: ${errorData}`
          );
        }

        const responseData = await response.json();

        console.log(responseData);

        if (responseData) {
          setStudyPlans(responseData);
        } else {
          console.warn("No study plans found or unexpected response structure");
          setStudyPlans([]);
        }
      } catch (error) {
        console.error("Error creating study plan: ");
      }
    };
    fetchStudyPlans();
  }, []);

  const onStudyPlanClick = (studyPlan: StudyPlanType) => {
    setSelectedPlan(studyPlan);
  };

  //TODO: Refresh logic when studyPLans changes)
  useEffect(() => {}, [studyPlans]);

  return (
    <div className="flex bg-black h-[calc(100vh-4rem)]">
      {/*Left side -> CreatePlan and StudyPlanList components */}
      <div className="w-1/3 flex flex-col h-full mx-1">
        <CreatePlan handleCreateStudyPlan={handleCreateStudyPlan} />
        <StudyPlansList
          studyPlans={studyPlans}
          onStudyPlanClick={onStudyPlanClick}
          handleDeleteStudyPlan={handleDeleteStudyPlan}
        />
      </div>

      {/*Right side -> Study Plan View */}
      <div className="w-2/3  h-full mx-1">
        <StudyPlanView selectedPlan={selectedPlan} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default StudyPlan;
