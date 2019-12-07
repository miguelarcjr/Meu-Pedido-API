const mongoose = require('mongoose');

const Order = mongoose.model('Order');

module.exports = {
    async index(req, res) {
        const { restaurant_id } = req.headers;
        
        orders = await Order.find({restaurant: restaurant_id}).populate('foods').populate('user');

        return res.json(orders);
    },
    
    async update(req, res) {
        const { id } = req.params; 
        const dados = req.body;

        const order = await Order.findByIdAndUpdate(
            id,
            dados,
            { new: true }
        );
        
        return res.json(order);
    },
}