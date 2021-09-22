const morgan = require('morgan');
const express = require('express');

const app = express();

app.use(morgan('dev'));


app.get('/',(req,res)=>{
    res.send('Welcome to node!');
});

module.exports = app;
