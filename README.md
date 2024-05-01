# Task Management API

The Task Management API is a Node.js-based system designed to manage tasks efficiently. It offers functionalities to create, read, update, and delete tasks via a RESTful API.

## Introduction

The Task Management API allows users to perform CRUD operations on tasks stored in a database. Leveraging Node.js and Express.js for backend development, it provides a robust API for interacting with tasks.

## Folder Structure

The application follows a well-organized folder structure:

```
Task_Management_API/
│
├── config/
│   ├── db.js
│   └── middleware.js
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── models/
│   ├── User.js
│   └── taskSchema.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── services/
│   ├── authService.js
│   └── taskService.js
│
└── utils/
    ├── errorHandler.js
    └── validation.js
```

- **config**: Contains configuration files for database connection and middleware.
- **controllers**: Contains controller files for handling user authentication and task operations.
- **models**: Defines the schema for User and Task models.
- **routes**: Defines routes for user authentication and task operations.
- **services**: Contains service files for business logic separation.
- **utils**: Includes utility files for error handling and validation.

## Installation

To set up the application locally, follow these steps:

1. Clone the repository: `https://github.com/your-username/task-management-api.git`
2. Change directory: `cd Task_Management_API`
3. Install dependencies: `npm install`
4. Configure database connection in `config/db.js`
5. Start the server: `node app.js`

### Sending Authorization Token

For authenticated endpoints, include the Authorization token in the HTTP headers of the request. It must be sent as a Bearer token.

## Usage

The server starts at http://localhost:3000 by default. Once the server is running, you can access and test the defined API endpoints at this swagger documentation http://localhost:3000/api-docs/.

## API Endpoints

### User Authentication

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Login an existing user

### Task Management

- **POST /api/task**: Create a new task (requires authentication)
- **GET /api/task**: Get all tasks (requires authentication)
- **GET /api/task/:id**: Get a specific task by ID (requires authentication)
- **PUT /api/task/:id**: Update a task by ID (requires authentication)
- **DELETE /api/task/:id**: Delete a task by ID (requires authentication)

## Authentication

User authentication is implemented using JSON Web Tokens (JWT). Upon successful login, a JWT token is generated and used for subsequent authenticated requests.

## Task Data Structure

### Task

- **_id**: ObjectId (automatically generated)
- **title**: String (required)
- **description**: String
- **status**: String (enum: [TODO, IN_PROGRESS, DONE])
- **assignee**: String (ID of the user assigned to the task)

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- bcryptjs (for password hashing)

