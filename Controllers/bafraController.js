const User = require('./../Models/bafraModel')

exports.getAllBafra = async (req, res, next) => {
    try{
        const users = await User.find()
        res.status(200).json({data: users, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.createBafra = async (req, res, ) => {
    try{
        const user = await User.create(req.body);
        // console.log(req.body.name)
        res.json({data:user, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.getBafra = async (req, res,) => {
    try{
        const user = await User.findById(req.params.id);
        
        res.json({data:user, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.updateBafra = async (req, res,) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body);
        
        res.json({data:user, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.deleteBafra = async (req, res,) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        
        res.json({data:user, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}
