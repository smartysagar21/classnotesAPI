import { Notes } from "../models/notes.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const update = async (req, res) => {
  try {
    const { subject, date, time, chapter, description } = req.body;
    const { token } = req.cookies;

    if (!token) {
      res.status(404).json({
        success: false,
        message: "Login First",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = await User.findById(decoded._id);

    await Notes.create({
      subject,
      date: new Date(`${date}`),
      time,
      chapter,
      description,
      user: req.user,
      updatedBy: req.user.name,
    });
  } catch (err) {
    return console.log(err);
  }

  res.status(201).json({
    success: true,
    message: "Notes updated successfully",
  });
};

export const getAllNotes = async (req, res) => {
  let notes;
  try {
    notes = await Notes.find({});
  } catch (err) {
    return console.log(err);
  }

  res.json({
    success: true,
    notes,
  });
};

export const getNotesEM2 = async (req, res) => {
  let notes;
  try {
    notes = await Notes.find({ subject: "Electrical Machines - II" });
  } catch (err) {
    return console.log(err);
  }

  res.json({
    success: true,
    notes,
  });
};

export const getNotesPS2 = async (req, res) => {
  let notes;
  try {
    notes = await Notes.find({ subject: "Power System - II" });
  } catch (err) {
    return console.log(err);
  }

  res.json({
    success: true,
    notes,
  });
};

export const getNotesACS = async (req, res) => {
  let notes;
  try {
    notes = await Notes.find({ subject: "Adavanced Control System" });
  } catch (err) {
    return console.log(err);
  }

  res.json({
    success: true,
    notes,
  });
};

export const getNotesAPE = async (req, res) => {
  let notes;
  try {
    notes = await Notes.find({ subject: "Advanced Power Electronics" });
  } catch (err) {
    return console.log(err);
  }

  res.json({
    success: true,
    notes,
  });
};

export const getNotesRER = async (req, res) => {
  let notes;
  try {
    notes = await Notes.find({
      subject: "Renewable Energy Resources and Convertors",
    });
  } catch (err) {
    return console.log(err);
  }

  res.json({
    success: true,
    notes,
  });
};

export const getNotesAI = async (req, res) => {
  let notes;
  try {
    notes = await Notes.find({ subject: "Artificial Intelligence" });
  } catch (err) {
    return console.log(err);
  }

  res.json({
    success: true,
    notes,
  });
};

export const getNotesPG = async (req, res) => {
  let notes;
  try {
    notes = await Notes.find({ subject: "Power Generation and Economics" });
  } catch (err) {
    return console.log(err);
  }

  res.json({
    success: true,
    notes,
  });
};
