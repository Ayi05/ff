const express = require('express');
const taskController = require("./controllers/TaskController");

require("./config/db")
const app = express();

const port = process.env.PORT || 7500;
app.use(express.json());

// CORS Access
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// API ENDPOINTS
app
  .route("/tasks")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);


app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

// Redeploiement