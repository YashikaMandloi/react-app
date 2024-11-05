const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const mailService = require("../services/mailer");
const crypto = require("crypto");

const filterObj = require("../utils/filterObj");

// Model
const User = require("../models/user");
const otp = require("../Templates/Mail/otp");
const resetPassword = require("../Templates/Mail/resetPassword");
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");

// this function will return you jwt token
const signToken = (userId) => jwt.sign({ userId }, process.env.JWT_SECRET);

// Register New User