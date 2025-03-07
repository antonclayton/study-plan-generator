import React from "react";
import { StudyPlanType } from "../../types/StudyPlanTypes";

interface StudyPlanListObjectProps {
  studyPlan: StudyPlanType;
  onClick: () => void;
}

const StudyPlanListObject: React.FC<StudyPlanListObjectProps> = ({
  studyPlan,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <h2>{studyPlan.goal}</h2>
    </div>
  );
};

export default StudyPlanListObject;
