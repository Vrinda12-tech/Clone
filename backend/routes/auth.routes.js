import express from "express";
const router=express.Router();
router.get("/signup",(req, res)=>{
    console.log("yashu di bale bale because I  am a nashedi person");
    res.send("Signup route");
});
export default router;


