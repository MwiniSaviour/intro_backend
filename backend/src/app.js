import { application } from "express";
import express from "express"
import connectDB from "./config/database.js";

const app = express();

app.use(express.json());

// route import \ middleware import
import userRouter from "./routes/user.route.js"

// route declaration 
app.use("/api/v1/users", userRouter)

export default app