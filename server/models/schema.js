const mongoose = require("mongoose");
const { Schema } = mongoose;

const task = new Schema ({
    title: {type: String, required: true},
    description: {type: String, required: true},
    done: {type: Boolean, required: true}
})

const taskSchema =  mongoose.model('task', task);
module.exports = taskSchema;
