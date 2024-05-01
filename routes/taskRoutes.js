

const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskById,
  assignTaskToUser,
  updateTaskStatus,
  calculateTaskMetrics,
} = require("../controllers/taskController");
const {authenticate, checkRolePermissions} = require("../config/middleware");


// Endpoint for calculating task metrics
router.get("/metrics", authenticate, checkRolePermissions(["calculateTaskMetrics"]), calculateTaskMetrics);

// Endpoint for creating a new task
router.post("/", authenticate, checkRolePermissions(["createTask"]), createTask);

// Endpoint for retrieving all tasks
router.get("/", authenticate, checkRolePermissions(["getTasks"]), getTasks);

// Endpoint for retrieving a task by its ID
router.get("/:id", authenticate, checkRolePermissions(["getTaskById"]), getTaskById);

// Endpoint for updating a task by its ID
router.put("/:id", authenticate, checkRolePermissions(["updateTask"]), updateTask);

// Endpoint for deleting a task by its ID
router.delete("/:id", authenticate, checkRolePermissions(["deleteTask"]), deleteTask);

// Endpoint for assigning a task to a user
router.post("/:id/assign", authenticate, checkRolePermissions(["assignTaskToUser"]), assignTaskToUser);

// Endpoint for updating the status of a task by its ID
router.put("/:id/status", authenticate, checkRolePermissions(["updateTaskStatus"]), updateTaskStatus);




module.exports = router;
