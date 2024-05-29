import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./modules/auth/routes/auth.routes";
import Cookies from "cookies";
// import errorHandler from './middleware/errorHandler';

const app = express();

// Middlewares
// Configuración de variables de entorno
dotenv.config({ path: path.resolve(__dirname, "..", `.env.${process.env.NODE_ENV}`) });
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
app.use("/auth", authRoutes);

export default app;
