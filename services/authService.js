const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function registerUser(username, email, password) {
  try {
    let user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ username, email, password: hashedPassword });
    await user.save();

    return user;
  } catch (error) {
    throw error;
  }
}

async function loginUser(email, password) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = { registerUser, loginUser };
