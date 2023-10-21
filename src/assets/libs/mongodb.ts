import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL!);
    console.log("DB Connected!!!");
  } catch (error) {
    console.log(error);
  }
}
