const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs"); // Use bcryptjs for password hashing
const jwt = require("jsonwebtoken");

// Validation schema for user creation

const userValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email"),
  body("location").notEmpty().withMessage("Location is required"),
];

const userValidationRulesForLogIn = [
  body("email").notEmpty().isEmail(),
  body("password", "Incorrect password").isLength({ min: 6 }),
];

router.post("/createuser", userValidationRules, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await User.create({
      name: req.body.name,
      password: hashedPassword,
      email: req.body.email,
      location: req.body.location,
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

router.post("/loginuser", userValidationRulesForLogIn, async (req, res) => {
  const email = req.body.email;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({ errors: "Please enter a valid email." });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, userData.password);
    if (!passwordMatch) {
      return res.status(400).json({ errors: "Please enter a valid password." });
    }

    const authToken = jwt.sign({ userId: userData._id }, "your_secret_key"); // Replace with your secret key
    res.json({ success: true, authToken });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;