// app.js

const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./utils/errorHandler");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const swagger = require('./swagger');



// Loading environment variables
require("dotenv").config();

// Connecting to the database
connectDB();

// Initializeing Express app
const app = express();

// Integrating Swagger documentation
swagger(app);

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);

// Error handling middleware
// app.use(errorHandler);

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
