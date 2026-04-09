import express from "express";
//controller

//middlewares

const router = express.Router();

router.route("/").post(createUser);

export default router;
