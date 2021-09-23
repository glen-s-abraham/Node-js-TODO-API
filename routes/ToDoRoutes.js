const express = require('express');
const ToDoController = require('./../controller/ToDoController');
const router = express.Router();


router
    .route('/')
    .get(ToDoController.getAllToDos)
    .post(ToDoController.createToDo)
router
    .route('/:id')
    .get(ToDoController.getSingleToDo)
    .patch(ToDoController.updateToDo)
    .delete(ToDoController.deleteToDo)
    
module.exports=router;