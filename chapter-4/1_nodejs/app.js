require('dotenv').config();
const user = require('./queries/user');

async function main() {
    try {
        const res = await user.get(1);

        // const res = await user.create('anggi', 'anggi@gmail.com', 'password');

        // const res = await user.delete(14);

        // const res = await user.update(6, 'irji', 'Login123');
        console.log(res);
    } catch (err) {
        if (err.message) {
            console.log(err.message);
            return;
        }

        console.log(err);
    }
}
main()


