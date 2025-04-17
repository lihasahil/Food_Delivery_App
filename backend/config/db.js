import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sahil:sahil123@cluster0.twmzo.mongodb.net/fooddelivery"
    )
    .then(() => console.log("DB Connected"));
};
