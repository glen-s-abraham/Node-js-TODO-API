const morgan = require('morgan');
const express = require('express');
const app = express();
const APIError = require('./utils/AppError');
const ToDoRouter = require('./routes/ToDoRoutes');
const AppError = require('./utils/AppError');


app.use(express.json());
app.use(morgan('dev'));

app.use('/api/to-do',ToDoRouter);
//unhandeld route exception
app.all('*',(req,res,next)=>{
    next(new AppError(`Can't find ${req.originalUrl}`,404));
});


module.exports = app;
