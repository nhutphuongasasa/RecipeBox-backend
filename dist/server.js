"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const user_1 = require("./modules/user");
const stats_1 = require("./modules/stats");
const step_1 = require("./modules/step");
const recipe_1 = require("./modules/recipe");
const category_1 = require("./modules/category");
const comment_1 = require("./modules/comment");
const favorite_1 = require("./modules/favorite");
const ingredient_1 = require("./modules/ingredient");
const rating_1 = require("./modules/rating");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("common"));
// app.use(helmet());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use("/api/user", (0, user_1.setupUserRoutes)());
app.use("/api/recipe", (0, recipe_1.setupRecipeRoutes)());
app.use("/api/step", (0, step_1.setupStepRoutes)());
app.use("/api/stats", (0, stats_1.setupStatsRoutes)());
app.use("/api/favorite", (0, favorite_1.setupFavoriteRoutes)());
app.use("/api/ingredient", (0, ingredient_1.setupIngredientRoutes)());
app.use("/api/rating", (0, rating_1.setupRatingRoutes)());
app.use("/api/category", (0, category_1.setupCategoryRoutes)());
app.use("/api/comment", (0, comment_1.setupCommentRoutes)());
app.use((err, req, res, next) => {
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
//# sourceMappingURL=server.js.map