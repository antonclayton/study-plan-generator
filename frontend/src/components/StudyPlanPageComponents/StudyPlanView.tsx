import React, { useState } from "react";
import { StudyPlanInputType, StudyPlanType } from "../../types/StudyPlanTypes";
import LoadingSpinner from "../LoadingSpinner";

interface StudyPlanViewProps {
  selectedPlan: StudyPlanType | null;
  isLoading: boolean;
}

const extractSteps = (plan: string) => {
  const stepRegex = /- Step \d+: (.+)/g;
  const steps = [];
  let match;
  while ((match = stepRegex.exec(plan)) !== null) {
    steps.push(match[1]);
  }
  return steps;
};

const StudyPlanView: React.FC<StudyPlanViewProps> = ({
  selectedPlan,
  isLoading,
}) => {
  const steps = selectedPlan?.plan ? extractSteps(selectedPlan.plan) : [];
  return (
    <div className="flex justify-center items-center w-full h-full border-4 rounded-3xl bg-zinc-950 border-zinc-700">
      <div className="flex flex-col items-center w-9/10 h-9/10 border-4 rounded-3xl bg-zinc-800 border-zinc-700">
        {isLoading ? (
          <h1 className="text-white mt-2 sm:mt-3 lg:mt-6 xl:mt-8 font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl">
            Plan is being generated! Please wait a few seconds...
          </h1>
        ) : selectedPlan && selectedPlan.goal ? (
          <h1 className="text-white mt-2 sm:mt-3 lg:mt-6 xl:mt-8 font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl underline underline-offset-4">
            {selectedPlan && !isLoading
              ? selectedPlan.goal
              : "No Plan Selected"}
          </h1>
        ) : (
          <h1 className="text-white mt-2 sm:mt-3 lg:mt-6 xl:mt-8 font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl">
            Select or create a plan!
          </h1>
        )}
        <div className="flex text-white mt-2 sm:mt-3 lg:mt-6 xl:mt-8 font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg w-9/10 border-2 h-4/5 max-h-4/5 rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 overflow-y-auto ">
          {isLoading ? (
            <div className="flex flex-col w-full items-center">
              <p className="text-white text-center mb-4">
                Generating your study plan...
              </p>
              <LoadingSpinner isLoading={true} />
            </div>
          ) : selectedPlan && selectedPlan.plan ? (
            <div className="text-white mt-4">
              {steps.length > 0 ? (
                <ul className="list-decimal ml-5 space-y-2">
                  {steps.map((step, index) => (
                    <li
                      key={index}
                      className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg"
                    >
                      {step}
                      <br />
                      <br />
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No steps found.</p>
              )}
            </div>
          ) : (
            "Nothing here..."
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyPlanView;
