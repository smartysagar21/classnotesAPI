import express from "express";
import {
  getAllNotes,
  getNotesACS,
  getNotesAI,
  getNotesAPE,
  getNotesEM2,
  getNotesPG,
  getNotesPS2,
  getNotesRER,
  update,
} from "../controllers/Notes.js";

const router = express.Router();

router.post("/update", update);

router.get("/all", getAllNotes);

router.get("/em2", getNotesEM2);

router.get("/ps2", getNotesPS2);

router.get("/ai", getNotesAI);

router.get("/acs", getNotesACS);

router.get("/ape", getNotesAPE);

router.get("/pg", getNotesPG);

router.get("/rer", getNotesRER);

export default router;
