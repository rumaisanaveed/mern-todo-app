const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc Register a user
// @route POST api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  // get the body
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory.");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists.");
  }
  // hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  // create the user
  const user = await User.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });
  if (user) {
    console.log(user);
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data isn't valid.");
  }
});

// @desc Login user
// @route POST api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
  // get the body
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide the complete data.");
  }
  // check if the user already exists
  const user = await User.findOne({ email });
  // match the passwords & generate access token
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid.");
  }
});

module.exports = { registerUser, loginUser };
