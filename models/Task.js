
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    initDate: {type: Number, require: true, default: Date.now},
    isDone: {type: Boolean, require: true, default: false},
    title: {type: String, require: true},
    description: {type: String, require: false}
});

module.exports = mongoose.model("all_tasks", taskSchema);