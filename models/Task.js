const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please input the name of the task."],
        trim: true,
        maxlenght: [20, "The task name should be no more than 20 words."]
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Task", TaskSchema);