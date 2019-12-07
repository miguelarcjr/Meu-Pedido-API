const mongoose = require('mongoose');

const Restaurant = mongoose.model('Restaurant');

module.exports = {

    async index(req, res) {
        const restaurants = await Restaurant.find();

        return res.json(restaurants)
    },

    async show(req, res) {
        const restaurant = await Restaurant.findById(req.params.id);

        return res.json(restaurant)
    },

    async store(req, res) {
        const restaurant = await Restaurant.create(req.body);

        return res.json(restaurant)
    },
    
    async update(req, res) {
        const { id } = req.params; 
        const dados = req.body;

        const restaurant = await Restaurant.findByIdAndUpdate(
            id,
            dados,
            { new: true }
        );
        
        return res.json(restaurant);
    },

    async destroy(req, res) {
        const { id } = req.params;

        await Restaurant.findByIdAndDelete(id);

        return res.send();
    }

};