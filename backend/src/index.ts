import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import planRoutes from "./routes/planRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/plans", planRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
