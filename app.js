import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/User.js";
import notesRouter from "./routes/Notes.js";

export const app = express();

config({
  path: "./data/config.env",
});

//Using Middlewares
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

//Using Routes
app.use("/api/users", userRouter);
app.use("/api/notes", notesRouter);

app.get("/", (req, res) => {
  res.send("Hello From Kubree");
});
