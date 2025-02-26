export interface StudyPlanInputType {
  goal: string;
  plan?: string;
}

export interface StudyPlanType extends StudyPlanInputType {
  id: string;
  createdAt: Date;
}
