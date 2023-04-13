const {Video} = require("../models")
module.exports = {

index : async (req,res,next) => {
    try {
        const videos = await Video.findAll();

        return res.status(200).json({
            status : true,
            message: "succes",
            data : videos
        })
    } catch (err) {
        next(err);
    }
},

showDetail : async (req,res,next) => {
    try {
        const video_id = req.params.id
        const videos = await Video.findOne({where: {id: video_id}});

        if(!videos){
            return res.status(404).json({
                status : false,
                message: `cannot get video with video id ${video_id}`,
                data : null
            });
        }

        return res.status(200).json({
            status : true,
            message: "succes",
            data : videos
        });

    } catch (err) {
        next(err)
    }
},

store : async (req,res,next) => {
    try {
        const {title, description, channel_id} = req.body;

        const videos = await Video.create({
            title: title,
            description : description,
            channel_id: channel_id
        })
        
        return res.status(201).json({
            status : true,
            message: "succes",
            data : videos
        })
    } catch (err) {
        next(err);
    }
},

update : async (req,res,next) => {
    try {
        const video_id = req.params.id
    
        const update = await Video.update(req.body, {where: {id: video_id}});
        
        if(!update[0]){
            return res.status(404).json({
                status : false,
                message: `cannot update video with video id ${video_id}`,
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
        const video_id = req.params.id
    
        const deleted = await Video.destroy({where: {id: video_id}});
        
        if(!deleted){
            return res.status(404).json({
                status : false,
                message: `cannot delete video with video id ${video_id}`,
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