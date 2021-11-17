import express from "express";
const router = express.Router();
import {
  getUserProfile,
  getUsers,
  getUserById,
  authUser,
  registerUser,
} from "../controllers/userControllers.js";

router.route("/").get(getUsers).post(registerUser);
router.route("/login").post(authUser);
router.route("/:id").get(getUserById);
router.route("/profile").get(getUserProfile);

export default router;
