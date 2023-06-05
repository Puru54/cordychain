const User = require('./../Models/adminModel')

exports.getAllAdmin = async (req, res, next) => {
    try{
        const users = await User.find()
        res.status(200).json({data: users, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.createAdmin = async (req, res, ) => {
    try{
        const user = await User.create(req.body);
        console.log(req.body.name)
        res.json({data:user, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.getAdmin = async (req, res,) => {
    try{
        const user = await User.findById(req.params.id);
        
        res.json({data:user, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.updateAdmin = async (req, res,) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body);
        
        res.json({data:user, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.deleteAdmin = async (req, res,) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        
        res.json({data:user, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}
