const {Channel} = require('../models');

module.exports = {
    index: async (req, res, next) => {
        try {
            const channels = await Channel.findAll();

            return res.status(200).json({
                status: true,
                message: 'success',
                data: channels
            });
        } catch (error) {
            next(err);
        }
    },

    show: async (req, res, next) => {
        try {
            const {channel_id} = req.params;

            const channel = await Channel.findOne({where: {id: channel_id}});

            if (!channel) {
                return res.status(404).json({
                    status: false,
                    message: `can't find channel with id ${channel_id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: channel
            });
        } catch (error) {
            next(error);
        }
    },

    store: async (req, res, next) => {
        try {
            const {name, description} = req.body;

            const channel = await Channel.create({
                name: name,
                description: description
            });

            return res.status(201).json({
                status: true,
                message: 'success',
                data: channel
            });
        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const {channel_id} = req.params;

            const updated = await Channel.update(req.body, {where: {id: channel_id}});

            if (updated[0] == 0) {
                return res.status(404).json({
                    status: false,
                    message: `can't find channel with id ${channel_id}!`,
                    data: null
                });
            }

            return res.status(201).json({
                status: true,
                message: 'success',
                data: null
            });
        } catch (error) {
            next(error);
        }
    },

    destroy: async (req, res, next) => {
        try {
            const {channel_id} = req.params;

            const deleted = await Channel.destroy({where: {id: channel_id}});

            if (!deleted) {
                return res.status(404).json({
                    status: false,
                    message: `can't find channel with id ${channel_id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: null
            });
        } catch (error) {
            next(error);
        }
    }
};