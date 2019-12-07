const mongoose = require('mongoose');

const Food = mongoose.model('Food');
const Restaurant = mongoose.model('Restaurant');

module.exports = {
    async index(req, res) {
        const { restaurant_id } = req.headers;
        
        const menu = await Food.find({ restaurant: restaurant_id });

        return res.json(menu)
    },

    async store(req, res) {
        const { name, ingredients, price } = req.body;
        const { restaurant_id } = req.headers;

        const restaurant = await Restaurant.findById(restaurant_id);
        
        if (!restaurant) {
            return res.status(400).json({ error: "Restaurant does not exists." })
        }

        const food = await Food.create({
            name,
            ingredients,
            price,
            restaurant: restaurant_id,
        });

        return res.json(food)
    }
}