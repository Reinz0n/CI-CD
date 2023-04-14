const {channel} = require("../models")
module.exports = {

index : async (req,res,next) => {
    try {
        const channels = await channel.findAll();

        return res.status(200).json({
            status : true,
            message: "succes",
            data : channels
        })
    } catch (err) {
        next(err);
    }
},

showDetail : async (req,res,next) => {
    try {
        const channel_id = req.params.id
        const channels = await channel.findOne({where: {id: channel_id}});

        if(!channels){
            return res.status(404).json({
                status : false,
                message: `cannot get channel with channel id ${channel_id}`,
                data : null
            });
        }

        return res.status(200).json({
            status : true,
            message: "succes",
            data : channels
        });

    } catch (err) {
        next(err)
    }
},

store : async (req,res,next) => {
    try {
        const {name, description} = req.body;

        const channels = await channel.create({
            name: name,
            description : description
        })
        
        return res.status(201).json({
            status : true,
            message: "succes",
            data : channels
        })
    } catch (err) {
        next(err);
    }
},

update : async (req,res,next) => {
    try {
        const channel_id = req.params.id
    
        const update = await channel.update(req.body, {where: {id: channel_id}});
        
        if(!update[0]){
            return res.status(404).json({
                status : false,
                message: `cannot update channel with channel id ${channel_id}`,
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
        const channel_id = req.params.id
    
        const deleted = await channel.destroy({where: {id: channel_id}});
        
        if(!deleted){
            return res.status(404).json({
                status : false,
                message: `cannot delete channel with channel id ${channel_id}`,
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