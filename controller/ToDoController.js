
exports.createToDo = (req,res)=>{
    res.status(200).json({
        status: 'success',
        data: 'create'
    });
}

exports.updateToDo = (req,res)=>{
    res.status(200).json({
        status: 'success',
        data: 'update'
    });
}

exports.deleteToDo = (req,res)=>{
    res.status(200).json({
        status: 'success',
        data: 'delete'
    });
}

exports.getAllToDos = (req,res)=>{
    console.log('all to dos');
    res.status(200).json({
        status: 'success',
        data: 'getall'
    });
}

exports.getSingleToDo = (req,res)=>{
    res.status(200).json({
        status: 'success',
        data: 'get single'
    });
}

