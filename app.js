const morgan = require('morgan');
const express = require('express');
const ToDoRouter = require('./routes/ToDoRoutes');

const app = express();
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/to-do',ToDoRouter);

module.exports = app;
