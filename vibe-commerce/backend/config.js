import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    ;
  } catch (error) {
    throw error;
    process.exit(1);
  }
};
