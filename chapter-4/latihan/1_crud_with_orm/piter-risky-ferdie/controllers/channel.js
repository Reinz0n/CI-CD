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
        const {user_id, name, description} = req.body;

            if (!user_id || !name) {
                return res.status(400).json({
                    status: false,
                    message: 'user_id and name is required!',
                    data: null
                });
            }

            const user = await user.findOne({where: {id: user_id}});
            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: `can't find user with id ${user_id}`,
                    data: null
                });
            }

            const video = await Video.create({
                user_id: user_id,
                name: name,
                description: description
            });

            return res.status(201).json({
                status: true,
                message: 'success',
                data: video
            });
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