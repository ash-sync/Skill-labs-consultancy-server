import express, { Request, Response } from "express"
import cors from 'cors'
const app = express()
import cookieParser from 'cookie-parser';
import { router } from "./app/routes";
import { notFound } from "./app/utils/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const allowedOrigins = [
  "http://localhost:4173",
  "http://localhost:3000",
  "https://skill-labs-consultancy-client.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Skill labs Server"
    });
});

// https://skill-labs-consultancy-client.vercel.app/


app.use('/api', router);

app.use(notFound);
app.use(globalErrorHandler);

export default app;