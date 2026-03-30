const mongoose=require('mongoose');

const taskSchema = new mongoose.Schema({
//task name is important,trim removes extra spaces
    title: {
        type: String,
        required: true,
        trim: true,
        },
//true-task done,false-not done
    completed: {
        type: Boolean,
        default: false
        },
//enum enforces 3 states of priority
    priority: {
        type: String,
        enum: ['low','medium','high'],
        default: 'medium'
        }
       },
    {timestamps:true});
//mongodb auto-adds createdat/updatedat fields
        
module.exports = mongoose.model('Task',taskSchema);
//makes this model available to other files       