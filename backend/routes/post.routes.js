import express from "express";
import {protectRoutes} from "../middleware/protectRoute.js";
import { createPost ,
    deletePost,
    commentOnPost,
    likeUnlikePost,
    getAll,
    getAllLikes,
    getFollowingPosts,
    getUserPosts

 } from "../controllers/post.contollers.js";
const router = express.Router();
router.get("/likes/:id",protectRoutes,getAllLikes);
router.get("/all",protectRoutes,getAll);
router.post("/create",protectRoutes,createPost);
router.post("/comment/:id",protectRoutes,commentOnPost);
router.post("/like/:id",protectRoutes,likeUnlikePost);
router.delete("/:id", protectRoutes,deletePost);
router.get("/following",protectRoutes,getFollowingPosts);
router.get("user/:username",protectRoutes,getUserPosts);


export default router;

