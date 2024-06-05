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
import {
  getGoogle,
  postGoogleCallback,
} from "../controllers/google.controller";
import {
  getGithub,
  postGithubCallback,
} from "../controllers/github.controller";

const router = Router();

router.get("/user", checkJwt, getUser);

router.post(
  "/signup",
  [check("email").isEmail(), check("password").isLength({ min: 6 })],
  postSignup
);

router.post(
  "/signin",
  [check("email").isEmail(), check("password").exists()],
  postSignin
);

router.post("/logout", checkJwt, postLogout);

router.post("/forgot-password", postForgotPassword);

router.post("/reset-password", postResetPassword);
// Endpoint para manejar el callback de autorización de Google
router.get("/google", getGoogle);
router.get("/google/callback", postGoogleCallback);

// Endpoint para manejar el callback de autorización de Github
router.get("/github", getGithub);
router.get("/github/callback", postGithubCallback);

export default router;
