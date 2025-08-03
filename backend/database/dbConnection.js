import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 
console.log("JWT Secret Key:", process.env.JWT_SECRET_KEY);
export const dbConnection = () => {
  console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
console.log("Loaded PORT:", process.env.PORT);
 

mongoose.connect(process.env.MONGO_URI, {
  dbName: "HealthcareDB",
})
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error("Error connecting to database:", err);
    });
};