import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  let user;
  try {
    user = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (user) {
    return res.status(404).json({
      success: false,
      message: "User Already Exist",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword });
  } catch (err) {
    return console.log(err);
  }

  let token;
  try {
    token = jwt.sign({ _id: user._id }, process.env.SECRET);
  } catch (err) {
    return console.log(err);
  }

  return res
    .status(200)
    .cookie("token", token, {
      maxAge: 5 * 60 * 1000,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    })
    .json({
      success: true,
      message: "Registerd Successfully",
    });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User does not have an account",
    });
  }

  let match;
  try {
    match = await bcrypt.compare(password, user.password);
  } catch (err) {
    return console.log(err);
  }

  if (!match) {
    return res.status(404).json({
      success: false,
      message: "Incorrect Password",
    });
  }

  let token;
  try {
    token = jwt.sign({ _id: user._id }, process.env.SECRET);
  } catch (err) {
    return console.log(err);
  }

  res
    .status(200)
    .cookie("token", token, {
      maxAge: 5 * 60 * 1000,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    })
    .json({
      success: true,
      message: "Login Successfull",
    });
};

export const users = async (req, res) => {
  let users;
  try {
    users = await User.find({});
  } catch (err) {
    return console.log(err);
  }

  res.json({
    success: true,
    users,
  });
};

export const logout = async (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logout Successfully",
    });
};
