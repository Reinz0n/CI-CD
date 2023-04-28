const {User} = require('../db/models');
const bcryp = require('bcrypt');

module.exports = {
    register: async (req, res, next) => {
        try {
            const {name, email, password} = req.body;

            const exist = await User.findOne({where: {email}});
            if (exist) {
                return res.status(400).json({
                    status: false,
                    message: 'email already used!',
                    data: null
                });
            }

            const hashPassword = await bcryp.hash(password, 10);

            const user = await User.create({
                name, email, password: hashPassword
            });

            return res.status(200).json({
                status: true,
                message: 'user registered!',
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            });
        } catch (err) {
            next(err);
        }
    },

    login: async (req, res, next) => {
        try {

        } catch (err) {
            next(err);
        }
    },

    whoami: async (req, res, next) => {
        try {

        } catch (err) {
            next(err);
        }
    }
};