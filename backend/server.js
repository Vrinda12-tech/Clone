import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoose.db.js";
dotenv.config();

import authRoutes from "./routes/auth.routes.js";
const app = express();
const PORT= process.env.PORT ||5000;

app.use("/api/auth",authRoutes);
app.listen(PORT,()=>{
    console.log(`server is runnning ${PORT}`);
    connectMongoDB();
});