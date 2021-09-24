const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const app = require('./app');

mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(con=>{
    console.log("DB connected");
}).catch(err=>console.log(err));

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log('server started on localhost:80000')
})