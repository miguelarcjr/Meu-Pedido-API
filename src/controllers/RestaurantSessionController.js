const mongoose = require('mongoose');

const Restaurant = mongoose.model('Restaurant');

module.exports = {
    async store(req, res) {
        const { email, name } = req.body;

        let restaurant = await Restaurant.findOne({ email });

        if (!restaurant) {
            restaurant = await Restaurant.create({ email, name });
        }

        return res.json(restaurant);
    }
}