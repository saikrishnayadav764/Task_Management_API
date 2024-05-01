
# Travel Diary Platform Application

The Travel Diary Platform Application is a Node.js-based system designed to manage and store travel entries securely. It offers functionalities to create, read, update, and delete travel entries via a RESTful API.

## Introduction

The Travel Diary Platform Application allows users to create, manage, and store their travel experiences. Leveraging Node.js and Express.js for backend development, it provides a robust API for interacting with diary entries stored in a database.

## Features

- User authentication and authorization
- CRUD operations on diary entries
- Secure storage of travel entries
- Object-oriented programming principles applied for scalability and maintainability

## Folder Structure

The application follows a well-organized folder structure:

```
Travel_Diary_Platform/
│
├── config/
│   ├── db.js
│   └── middleware.js
│
├── controllers/
│   ├── authController.js
│   └── diaryController.js
│
├── models/
│   ├── User.js
│   └── DiaryEntry.js
│
├── routes/
│   ├── authRoutes.js
│   └── diaryRoutes.js
│
├── services/
│   ├── authService.js
│   └── diaryService.js
│
└── utils/
    ├── errorHandler.js
    └── validation.js
```

- **config**: Contains configuration files for database and middleware.
- **controllers**: Contains controller files for handling user authentication and diary entry operations.
- **models**: Defines the schemas for User and DiaryEntry models.
- **routes**: Defines routes for user authentication and diary entry operations.
- **services**: Contains service files for business logic separation.
- **utils**: Includes utility files for error handling and validation.

## Installation

To set up the application locally, follow these steps:

1. Clone the repository: `https://github.com/saikrishnayadav764/travel-diary-backend.git`
2. Change directory: `cd travel_diary_platform`
3. Install dependencies: `npm install`
4. Configure database connection in `config/db.js`
5. Start the server: `node app.js`

### Sending Authorization Token

For authenticated endpoints, the Authorization token should be included in the HTTP headers of the request. It must be sent as a Bearer token.

#### Example:

```http
GET /api/diary HTTP/1.1
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE2MTk1NDY2MzZ9.YwEBGhBkOFDMqFecUvRLH7EQvWjG7ty7U8nozBE-ucQ
```

In the above example, replace the token value (`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE2MTk1NDY2MzZ9.YwEBGhBkOFDMqFecUvRLH7EQvWjG7ty7U8nozBE-ucQ`) with the actual JWT token obtained after successful login.

## Usage

The server starts at http://localhost:3000 by default. Once the server is running, you can access the defined API endpoints.

## API Endpoints

### User Authentication

- **POST /api/auth/register**: Register a new user

  Example:
  ```json
  {
    "username": "ram",
    "email": "ram@gmail.com",
    "password": "ram"
  }
  ```

- **POST /api/auth/login**: Login an existing user

  Example:
  ```json
  {
    "email": "john@gmail.com",
    "password": "john"
  }
  ```

- **GET /api/auth/profile**: Get user profile (requires authentication)

  Example Response:
  ```json
  {
    "_id": "661bcdb312bcbf32cb9791da",
    "username": "john",
    "email": "john@gmail.com",
    "__v": 0
  }
  ```

### Diary Entries

- **POST /api/diary**: Create a new diary entry (requires authentication)

  Example:
  ```json
  {
    "title": "Trip to Paris",
    "description": "Visited Eiffel Tower and Louvre Museum.",
    "date": "2023-07-15",
    "location": "Paris, France",
    "photos": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]
  }
  ```

- **GET /api/diary**: Get all diary entries (requires authentication)

- **GET /api/diary/:id**: Get a specific diary entry by ID (requires authentication)

- **PUT /api/diary/:id**: Update a diary entry by ID (requires authentication)

  Example:
  ```json
  {
    "title": "Updated Title",
    "description": "Updated description of the trip.",
    "location": "Paris, France"
  }
  ```

- **DELETE /api/diary/:id**: Delete a diary entry by ID (requires authentication)

## Authentication

User authentication is implemented using JSON Web Tokens (JWT). Upon successful login, a JWT token is generated and used for subsequent authenticated requests.

## User Data Structure

### User

- **_id**: ObjectId (automatically generated)
- **username**: String (required, unique)
- **password**: String (required, hashed)

## Diary Entry Data Structure

### DiaryEntry

- **_id**: ObjectId (automatically generated)
- **title**: String (required)
- **description**: String
- **date**: Date (required)
- **location**: String
- **photos**: Array of Strings (URLs)

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- bcryptjs (for password hashing)

## Deployed API Link

[https://lazy-blue-abalone-slip.cyclic.app]
