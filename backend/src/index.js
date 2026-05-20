import connectDB from "./config/database.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config(
  {
    path: "./.env"
  })

const startServer = async () => {
  try {
    console.log("MONGODB URL: ", process.env.MONGODB_URL);
    await connectDB()

    // checking for error
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`server is running at port: ${process.env.PORT}`)
    })

  } catch (err) {
    console.log("MongoDB connection fails", err)
  }
}
startServer();