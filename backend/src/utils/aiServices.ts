import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function generateStudyPlan(goal: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Create a personalized study plan to achieve the following goal: I want to learn "${goal}". 
    Please structure the plan step by step, using the following format:
    - Step 1: [Brief explanation of step 1]
    - Step 2: [Brief explanation of step 2]
    - Step 3: [Brief explanation of step 3]
    Continue this format for each step. Ensure each step is clearly numbered and separated by a dash and a colon (e.g., "Step 1:").`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("AI generation failed:", error);
    throw new Error("Failed to generate study plan");
  }
}
