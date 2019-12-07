const User = require('../models/User');
// index, show, store, update, destroy.
module.exports = {
   async store(req, res) {
        const { email, name } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email, name });
        }


        return res.json(user);
    }
}