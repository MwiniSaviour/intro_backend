import express from "express"
import connectDB from "./config/database.js";

const app = express();

app.use(express.json());

// route import \ middleware import
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js";

// route declaration 
app.use("/api/v1/users", userRouter)
app.use("/api/v1/posts", postRouter)

export default app