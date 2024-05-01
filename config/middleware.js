const jwt = require("jsonwebtoken");
const User = require("../models/User");


function authenticate(req, res, next) {
  
  // const hp = req.header("Authorization");
  // console.log(hp)

  // if (!hp) {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }

  // const token = req.header("Authorization").split(" ")[1];
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Invalid token" });
  }
}


// Define roles with their corresponding permissions
const rolePermissions = {
  admin: ["users", "createTask", "getTasks", "updateTask", "deleteTask", "getTaskById", "assignTaskToUser", "updateTaskStatus", "calculateTaskMetrics"],
  manager: ["users", "createTask", "getTasks", "updateTask", "deleteTask", "getTaskById", "assignTaskToUser", "updateTaskStatus", "calculateTaskMetrics"],
  user: ["createTask", "getTasks", "updateTask", "deleteTask", "getTaskById", "assignTaskToUser", "updateTaskStatus"],
  viewer: ["getTasks", "getTaskById"],
};

// Middleware function to check role-based access control
const checkRolePermissions = (requiredPermissions) => async (req, res, next) => {
  try {
    // Getting the user ID from the request (assuming it's available after authentication)
    const userId = req.user.id;

    // Retrieving the user from the database
    const user = await User.findById(userId);

    // Checking if the user has a valid role
    if (!user || !user.role) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Checking if the user's role has the required permissions for the endpoint
    const userRolePermissions = rolePermissions[user.role];
    const hasPermission = requiredPermissions.every((permission) =>
      userRolePermissions.includes(permission)
    );

    if (!hasPermission) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }

    // If the user has the required permissions, allowing access to the endpoint
    next();
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {authenticate,checkRolePermissions};
