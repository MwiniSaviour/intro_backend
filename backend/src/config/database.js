import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || process.env.MONGODB_URL
    const connectionInstance = await mongoose.connect(`${mongoURI}`)
    console.log(`MongoDB connection successful ${connectionInstance.connection.host}`)

  } catch (err) {
    console.log("MongoDB connection fails", err)
    process.exit(1)
  }
}
export default connectDB