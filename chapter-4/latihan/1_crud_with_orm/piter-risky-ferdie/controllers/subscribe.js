const {subscribe} = require("../models")
module.exports = {

index : async (req,res,next) => {
    try {
        const subscribes = await subscribe.findAll();

        return res.status(200).json({
            status : true,
            message: "succes",
            data : subscribes
        })
    } catch (err) {
        next(err);
    }
},

showDetail : async (req,res,next) => {
    try {
        const subscribe_id = req.params.id
        const subscribes = await subscribe.findOne({where: {id: subscribe_id}});

        if(!subscribes){
            return res.status(404).json({
                status : false,
                message: `cannot get subscribe with subscribe id ${subscribe_id}`,
                data : null
            });
        }

        return res.status(200).json({
            status : true,
            message: "succes",
            data : subscribes
        });

    } catch (err) {
        next(err)
    }
},

store : async (req,res,next) => {
    try {
        const {name, description} = req.body;

        const subscribes = await subscribe.create({
            name: name,
            description : description
        })
        
        return res.status(201).json({
            status : true,
            message: "succes",
            data : subscribes
        })
    } catch (err) {
        next(err);
    }
},

update : async (req,res,next) => {
    try {
        const subscribe_id = req.params.id
    
        const update = await subscribe.update(req.body, {where: {id: subscribe_id}});
        
        if(!update[0]){
            return res.status(404).json({
                status : false,
                message: `cannot update subscribe with subscribe id ${subscribe_id}`,
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
        const subscribe_id = req.params.id
    
        const deleted = await subscribe.destroy({where: {id: subscribe_id}});
        
        if(!deleted){
            return res.status(404).json({
                status : false,
                message: `cannot delete subscribe with subscribe id ${subscribe_id}`,
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