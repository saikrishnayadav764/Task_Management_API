/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         status:
 *           type: string
 *           enum: [TODO, IN_PROGRESS, DONE]
 *         assignee:
 *           type: string
 *           description: ID of the user assigned to the task
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user account
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User account created successfully
 *       '400':
 *         description: Username or email already exists
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login and obtain JWT token
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *           examples:
 *             default:
 *               summary: Log in as admin user
 *               value:
 *                 email: admin@gmail.com
 *                 password: admin
 *             Manager:
 *               summary: Log in as user manager
 *               value:
 *                 email: manager@gmail.com
 *                 password: manager
 *             User:
 *               summary: Log in as user user
 *               value:
 *                 email: user@gmail.com
 *                 password: user
 *             Viewer:
 *               summary: Log in as user Viewer
 *               value:
 *                 email: viewer@gmail.com
 *                 password: viewer
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       '401':
 *         description: Invalid credentials
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/auth/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Authentication]
 *     responses:
 *       '200':
 *         description: User profile retrieved successfully
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/auth/users:
 *   get:
 *     summary: Get all users
 *     tags: [Authentication]
 *     responses:
 *       '200':
 *         description: List of users retrieved successfully
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * tags:
 *   name: Task Management
 *   description: API endpoints for managing tasks
 */

/**
 * @swagger
 * /api/task:
 *   post:
 *     summary: Create a new task
 *     tags: [Task Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       '200':
 *         description: Task created successfully
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/task:
 *   get:
 *     summary: Get all tasks
 *     tags: [Task Management]
 *     responses:
 *       '200':
 *         description: List of tasks retrieved successfully
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/task/{id}:
 *   get:
 *     summary: Get a task by ID
 *     tags: [Task Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task to retrieve
 *     responses:
 *       '200':
 *         description: Task retrieved successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Task not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/task/{id}:
 *   put:
 *     summary: Update a task by ID
 *     tags: [Task Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       '200':
 *         description: Task updated successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Task not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/task/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     tags: [Task Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task to delete
 *     responses:
 *       '200':
 *         description: Task deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Task not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/task/{id}/assign:
 *   post:
 *     summary: Assign a task to a user
 *     tags: [Task Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task to assign
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Task assigned successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Task not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/task/{id}/status:
 *   put:
 *     summary: Update task status by ID
 *     tags: [Task Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task to update status
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Task status updated successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Task not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/task/metrics:
 *   get:
 *     summary: Get task metrics
 *     tags: [Task Management]
 *     responses:
 *       '200':
 *         description: Task metrics retrieved successfully
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */




const express = require('express');
const router = express.Router();
const { register, login, userProfile, userList } = require('../controllers/authController');
const {authenticate, checkRolePermissions} = require("../config/middleware");

// POST /api/auth/register
router.post('/register', register);

// POST /api/auth/login
router.post('/login', login);

// GET /api/auth/profile
router.get("/profile", authenticate, userProfile);

// GET /api/auth/users
router.get("/users", authenticate, checkRolePermissions(["users"]),userList);

module.exports = router;
