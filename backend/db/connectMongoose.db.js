import mongoose from "mongoose";
const connectMongoDB=async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongo_db is connect ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to mongoose:${error.message}`)
        process.exit(1)

       
    }
}
export default connectMongoDB;