const express = require('express');
const router = express.Router();//mini app that handles routes
const Task = require('../models/task');
//async/await handles operations takes time(DB calls)
//try/catch blocks handle error handling
router.get('/',async(req,res)=>{
try{
    const tasks = await Task.find();//fetches tasks from mongodb
    res.json(tasks);
}catch(err){
    res.status(500).json({message:err.message});
}
});
//POST - for creating a task
router.post('/', async (req,res) => {
    try{
        const task = new Task({
//req.body is data sent from frontend(task name,priority)
            title: req.body.title,
            priority: req.body.priority
            });
        const newTask = await task.save();
        res.status(201).json(newTask);
       } catch(err){
         res.status(400).json({message: err.message});
       }
     });
     
//PUT - toggle complete/incomplete
router.put('/:id', async(req,res) =>{
    try{
    const task = await Task.findByIdAndUpdate(
    //task id in the url
    req.params.id,
    req.body,
    {
    new: true//return the updated task
    }
    );
    res.json(task);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
});

//DELETE
router.delete('/:id',async (req,res) => {
    try{
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
    } catch(err) {
    res.status(500).json({ message: err.message}); 
    }
});

module.exports = router;

