const Task = require('../models/Task');

// listAllTasks function - To list all tasks   _/
exports.listAllTasks = (req, res) =>{
    Task.find({}, (err, task) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json(task)
    });
}


// createNewTask function - To create new task
exports.createNewTask = (req, res) => {
    let  newTask = new Task (req.body);
    newTask.save((err, task) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(task);
    });
}

// findTask function - To read task by id   _/
exports.readTask = (req, res) =>{
    Task.findById(req.params.taskid, (err, task) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json(task)
    });
}

// updateTask function - To update task status by id
exports.updateTask = (req, res) => {
    Task.findOneAndUpdate({ _id:req.params.taskid }, req.body, (err, task) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(task);
    });
}
    
// deleteTask function - To delete task by id   _/
exports.deleteTask = async ( req, res) => {
    await  Task.findOneAndDelete({ _id:req.params.taskid }, (err) => {
        if (err) {
            return res.status(404).send(err);
        }
        res.status(200).json({ message:"Task successfully deleted"});
    });
}