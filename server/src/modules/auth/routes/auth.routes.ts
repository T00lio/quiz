import { Router } from "express";
import { check } from "express-validator";
import { checkJwt } from "../middlewares/checkJwt";
import {
  getUser,
  postForgotPassword,
  postLogout,
  postResetPassword,
  postSignin,
  postSignup,
} from "../controllers/auth.controller";
import { getGoogle, postGoogleCallback } from "../controllers/google.controller";

const router = Router();

router.get("/user", checkJwt, getUser);

router.post("/signup", [check("email").isEmail(), check("password").isLength({ min: 6 })], postSignup);

router.post("/signin", [check("email").isEmail(), check("password").exists()], postSignin);

router.post("/logout", checkJwt, postLogout);

router.post("/forgot-password", postForgotPassword);

router.post("/reset-password", postResetPassword);

router.get("/google", getGoogle);

// Endpoint para manejar el callback de autorización de Google
router.get("/google/callback", postGoogleCallback);

export default router;
