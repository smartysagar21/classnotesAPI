import mongoose from "mongoose";

const schema = new mongoose.Schema({
  subject: {
    type: "string",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: "string",
    required: true,
  },
  chapter: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  updatedBy: {
    type: mongoose.Schema.Types.String,
    ref: "User",
    required: true,
  },
});

export const Notes = mongoose.model("Notes", schema);
