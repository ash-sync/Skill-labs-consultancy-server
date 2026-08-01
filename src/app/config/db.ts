import mongoose from "mongoose";
import { envVars } from "./env";
import seedAdmin from "../utils/seedAdmin";
import { seedDemoData } from "../utils/seedDemoData";

let isSeeded = false;

export const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        await mongoose.connect(envVars.DB_URL);
        console.log("Connected to MongoDB successfully!");

        if (!isSeeded) {
            isSeeded = true;
            await seedAdmin();
            await seedDemoData();
        }
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw error;
    }
};
