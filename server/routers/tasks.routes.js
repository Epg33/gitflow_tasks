const express = require('express');
const router = express.Router();
const task = require('../models/schema');

router.post('/tasks', async (req, res)=> {
    const {title, description, done} = req.body;
    const Task = new task(title, description, done);
    await Task.save();
    res.json({ message: 'Task saved successfully' });
})


router.put('/tasks/:id', async (req, res) => {
    const {title, description, done} = req.body;
    const Task = new Task(id, title, description, done);
    await task.findByIdAndUpdate(req.params.id, Task);
    res.json({message: 'Task updated successfully'});
});

module.exports = router;