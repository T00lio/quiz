import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./routes/auth";
import Cookies from "cookies";
// import errorHandler from './middleware/errorHandler';

const app = express();

// Middlewares
// Configuración de variables de entorno
require("dotenv").config();
app.use(bodyParser.json());

// Middleware para habilitar CORS
app.use(
  cors({
    origin: `http://localhost:5173`,
    credentials: true,
  }),
);

// Middleware para manejar cookies
app.use((req, res, next) => {
  req.cookies = new Cookies(req, res);
  next();
});

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

// Middleware para analizar el cuerpo de las solicitudes codificadas en URL
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para manejar errores
// app.use(errorHandler);

// Routes
app.use("/auth", authRouter);

export default app;
