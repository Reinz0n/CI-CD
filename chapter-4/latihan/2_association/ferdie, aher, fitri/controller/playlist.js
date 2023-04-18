const {Playlist, Channel, Video, PlaylistVideo} = require('../models');

module.exports = {
    index: async (req, res, next) => {
        try {
            const playlist = await Playlist.findAll({
                include: [
                    {
                        model: Video,
                        attributes: ['title', 'channel_id', 'description']
                    }
                ]
            });

            return res.status(200).json({
                status: true,
                message: 'success',
                data: playlist
            });
        } catch (error) {
            next(error);
        }
    },

    show: async (req, res, next) => {
        try {
            const {playlist_id} = req.params;

            const playlist = await Playlist.findOne({
                where: {id: playlist_id}, include: [
                    {
                        model: Channel,
                        attributes: ['name', 'description']
                    },
                    {
                        model: Video
                    }
                ]
            });
            
            if (!playlist) {
                return res.status(404).json({
                    status: false,
                    message: `can't find playlist with id ${playlist_id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: playlist
            });
        } catch (error) {
            next(error);
        }
    },

    store: async (req, res, next) => {
        try {
            const {name, description, channel_id} = req.body;

            const channel = await Channel.findOne({where: {id: channel_id}})
            const playlist = await Playlist.findOne({where: {name, channel_id}})

            if (!channel) {
                return res.status(404).json({
                    status: false,
                    message: `can't find channel with id ${channel_id}`
                })
            }

            if (!name || !channel_id) {
                return res.status(400).json({
                    status: false,
                    message: 'name and channel_id are required'
                })
            }

            if (playlist) {
                return res.status(400).json({
                    status: false,
                    message: `${name}'s playlist already exist in channel with id ${channel_id}`
                })
            }

            const data = Playlist.create({
                name,
                description,
                channel_id
            })

            return res.status(201).json({
                status: true,
                message: 'success',
            });
        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const {playlist_id} = req.params;            
            const updated = await Playlist.update(req.body, {where: {id: playlist_id}});

            if (updated[0] == 0) {
                return res.status(404).json({
                    status: false,
                    message: `can't find playlist with id ${playlist_id}!`,
                    data: null
                });
            }
            
            return res.status(201).json({
                status: true,
                message: 'success',
                data: updated
            });
        } catch (error) {
            next(error);
        }
    },

    destroy: async (req, res, next) => {
        try {
            const {playlist_id} = req.params;

            const deleted = await Playlist.destroy({where: {id: playlist_id}});

            if (!deleted) {
                return res.status(404).json({
                    status: false,
                    message: `can't find playlist with id ${playlist_id}!`,
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
    },

    addPlaylistVideo: async (req, res, next) => {
        try {
            const { playlist_id, video_id } = req.body;

            if ( !playlist_id || !video_id ) {
                return res.status(400).json({
                    stasus: false,
                    message: 'playlist_id and video_id are required.'
                })
            }

            const playlist = await Playlist.findOne({where: {id: playlist_id}});
            const video = await Video.findOne({where: {id: video_id}});
            const data = await PlaylistVideo.findOne({where: {playlist_id, video_id}});

            if ( !playlist || !video ) {
                return res.status(404).json({
                    status: false,
                    message: 'playlist or video not found',
                    data: null
                })
            }

            if (data) {
                return res.status(400).json({
                    status: false,
                    message: `video with id ${video_id} already exist in the playlist`
                })
            }

            const create = await PlaylistVideo.create({
                playlist_id,
                video_id
            })

            return res.status(200).json({
                status: true,
                message: 'video added.'
            })
        } catch (error) {
            next(error)
        }
    }
};