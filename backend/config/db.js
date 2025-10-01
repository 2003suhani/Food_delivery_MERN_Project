import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://shristikhot:Shristi2003@cluster0.la7aqwz.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}
