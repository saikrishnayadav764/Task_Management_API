const Task = require("../models/taskSchema");

async function createTask(req, res) {
  try {
    const { title, description, status, assignee } = req.body;

    const newTask = new Task({
      title,
      description,
      status,
      assignee,
    });

    await newTask.save();

    res.json(newTask);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

async function getTasks(req, res) {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

async function getTaskById(req, res) {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

async function updateTask(req, res) {
  try {
    const taskId = req.params.id;
    const { title, description, status, assignee } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, description, status, assignee },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

async function deleteTask(req, res) {
  try {
    const taskId = req.params.id;

    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

async function assignTaskToUser(req, res) {

  try {
    const taskId = req.params.id;
    const {  userId } = req.body;

    const task = await Task.findById(taskId);
    console.log(task)

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.assignee = userId;
    await task.save();

    res.json({ message: "Task assigned to user successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

async function updateTaskStatus(req, res) {


  try {
    const taskId = req.params.id;
    const { status } = req.body;

    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.status = status;
    await task.save();

    res.json({ message: "Task status updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

async function calculateTaskMetrics(req, res) {
  try {
    // Getting total number of tasks
    const totalTasks = await Task.countDocuments();

    // Getting number of tasks completed
    const completedTasks = await Task.countDocuments({ status: 'DONE' });

    // Getting number of tasks in progress
    const inProgressTasks = await Task.countDocuments({ status: 'IN_PROGRESS' });

    // Calculating tasks pending (tasks that are not completed or in progress)
    const pendingTasks = totalTasks - completedTasks - inProgressTasks;

    res.json({
      totalTasks,
      completedTasks,
      inProgressTasks,
      pendingTasks,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskById,
  assignTaskToUser,
  updateTaskStatus,
  calculateTaskMetrics,
};
