const ToDo = require('./../model/ToDo');
const APIFeatures = require('./../utils/APIFeatures');

exports.createToDo = async (req,res)=>{
    try{ 
        const todo = await ToDo.create(req.body);
        res.status(200).json({
            status: 'success',
            todo
        });
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            err
        });
    }
    
}

exports.updateToDo = async (req,res)=>{
    try{
        const toDo = await ToDo.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        res.status(200).json({
            status: 'success',
            toDo
        });
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            err
        });
    }
}

exports.deleteToDo = async (req,res)=>{
    try{
        await ToDo.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            message:null
        });
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            err
        });
    }
}

exports.getAllToDos = async (req,res)=>{
    try{

        const features = new APIFeatures(ToDo.find(),req.query)
                        .filter().sort().limit().paginate();;
        
        const toDos = await features.query;
        res.status(200).json({
            status: 'success',
            toDos
        });
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            err
        });
    }
    
}

exports.getSingleToDo = async (req,res)=>{
    try{
        const toDo = await ToDo.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            toDo
        });
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            err
        });
    }
}

