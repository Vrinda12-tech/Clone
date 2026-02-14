
import User from "../models/user.models.js";
import jwt from "jsonwebtoken";

export const protectRoutes=async (req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"Please login first"});
            }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message:"token dosen't existed"})
        } 
        const user=await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({error:"User not found"});

        }
        req.user=user;
        next();

    } catch (err) {
        console.log("Error in protectedroute,middleware",err.message);
        return res.status(500).json({error:"Internal Server Error"});
    }

}
//we have the user information in the form of cookie so we have to play 
//with that cookie only 
//why we cant acess the cookie in this way ok?

