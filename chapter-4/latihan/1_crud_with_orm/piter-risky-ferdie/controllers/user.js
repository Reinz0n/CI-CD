const {user} = require("../models")
module.exports = {

index : async (req,res,next) => {
    try {
        const users = await user.findAll();

        return res.status(200).json({
            status : true,
            message: "succes",
            data : users
        })
    } catch (err) {
        next(err);
    }
},

showDetail : async (req,res,next) => {
    try {
        const user_id = req.params.id
        const users = await user.findOne({where: {id: user_id}});

        if(!users){
            return res.status(404).json({
                status : false,
                message: `cannot get user with user id ${user_id}`,
                data : null
            });
        }

        return res.status(200).json({
            status : true,
            message: "succes",
            data : users
        });

    } catch (err) {
        next(err)
    }
},

store : async (req,res,next) => {
    try {
        const {name, email, password} = req.body;

        const users = await user.create({
            name: name,
            email : email,
            password: password
        })
        
        return res.status(201).json({
            status : true,
            message: "succes",
            data : users
        })
    } catch (err) {
        next(err);
    }
},

update : async (req,res,next) => {
    try {
        const user_id = req.params.id
    
        const update = await user.update(req.body, {where: {id: user_id}});
        
        if(!update[0]){
            return res.status(404).json({
                status : false,
                message: `cannot update user with user id ${user_id}`,
                data : null
            });
        }
        return res.status(200).json({
            status : true,
            message: "succes",
            data : update[0]
        });
    } catch (err) {
        next(err)
    }
},

destroy : async (req,res,next) => {
    try {
        const user_id = req.params.id
    
        const deleted = await user.destroy({where: {id: user_id}});
        
        if(!deleted){
            return res.status(404).json({
                status : false,
                message: `cannot delete user with user id ${user_id}`,
                data : null
            });
        }
        return res.status(200).json({
            status : true,
            message: "succes",
            data : deleted
        });
    } catch (err) {
        next(err)
    }
}

}