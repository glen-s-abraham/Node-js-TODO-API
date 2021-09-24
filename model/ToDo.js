const mongoose = require('mongoose');


const toDoSchema = new mongoose.Schema({
    task: {
        type:String,
        required:[true, 'A task must be mentioned'],
        trim:true
    },
    reminder_date:{
        type:Date,
        required:[true, 'A task must have a reminder date'],
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false
    }

});

const ToDo = mongoose.model('ToDo',toDoSchema);
module.exports = ToDo;