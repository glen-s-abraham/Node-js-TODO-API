const AppError = require('../utils/AppError');
const ToDo = require('./../model/ToDo');
const APIFeatures = require('./../utils/APIFeatures');
const catchAsync = require('./../utils/CatchAsync');

exports.createToDo = catchAsync(async (req,res,next)=>{
    const todo = await ToDo.create(req.body);
    res.status(200).json({
        status: 'success',
        todo
    });
});
    

exports.updateToDo = catchAsync(async (req,res,next)=>{
    const toDo = await ToDo.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });
    res.status(200).json({
        status: 'success',
        toDo
    });
});
    

exports.deleteToDo = catchAsync(async (req,res,next)=>{
    await ToDo.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        message:null
    });
});
    

exports.getAllToDos = catchAsync(async (req,res,next)=>{
    const features = new APIFeatures(ToDo.find(),req.query)
        .filter().sort().limit().paginate();;
       
    const toDos = await features.query;
    res.status(200).json({
        status: 'success',
        toDos
    });
});
    
exports.getSingleToDo = catchAsync(async (req,res,next)=>{
    const toDo = await ToDo.findById(req.params.id);
    if(!toDo){
        return next(new AppError('Object not found',404));
    }
    res.status(200).json({
        status: 'success',
        toDo
    });
});