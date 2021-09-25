const mongoose = require('mongoose');


const toDoSchema = new mongoose.Schema({
    task: {
        type:String,
        required:[true, 'A task must be mentioned'],
        trim:true,
        max:[100,'Task length must be within 100 words']
    },
    reminder_date:{
        type:Date,
        required:[true, 'A task must have a reminder date'],
        min:[Date.now(),'A taks can\'t be assigned to the past']
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false
    }

});

const ToDo = mongoose.model('ToDo',toDoSchema);
module.exports = ToDo;