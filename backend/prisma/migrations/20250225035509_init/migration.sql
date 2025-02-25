-- CreateTable
CREATE TABLE "StudyPlan" (
    "id" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StudyPlan_pkey" PRIMARY KEY ("id")
);
