import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { setupUserRoutes } from "./modules/user";
import { setupStatsRoutes } from "./modules/stats";
import { setupStepRoutes } from "./modules/step";
import { setupRecipeRoutes } from "./modules/recipe";
import { setupCategoryRoutes } from "./modules/category";
import { setupCommentRoutes } from "./modules/comment";
import { setupFavoriteRoutes } from "./modules/favorite";
import { setupIngredientRoutes } from "./modules/ingredient";
import { setupRatingRoutes } from "./modules/rating";

const app = express();

app.use(express.json());
app.use(morgan("common"));
// app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/user", setupUserRoutes());
app.use("/api/recipe", setupRecipeRoutes());
app.use("/api/step", setupStepRoutes());
app.use("/api/stats", setupStatsRoutes());
app.use("/api/favorite", setupFavoriteRoutes());
app.use("/api/ingredient", setupIngredientRoutes());
app.use("/api/rating", setupRatingRoutes());
app.use("/api/category", setupCategoryRoutes());
app.use("/api/comment", setupCommentRoutes());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Global error handler:", err);

  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }

  if (err.name === "NotFoundError") {
    return res.status(404).json({ message: err.message });
  }

  // Error thường
  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
