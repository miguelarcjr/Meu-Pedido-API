const mongoose = require('mongoose');

const Order = mongoose.model('Order');
const Restaurant = mongoose.model('Restaurant');
const User = mongoose.model('User')
const Food = mongoose.model('Food')

module.exports = {
    async index(req, res) {
        const { user_id } = req.headers;

        const orders  = await Order.find({ user: user_id }).populate('foods').populate('restaurant');

    
        return res.json(orders);
    },

    async store(req, res) {
        const { foods} = req.body
        const { restaurant_id, user_id } = req.headers;

        const restaurant = await Restaurant.findById(restaurant_id);
        const user = await User.findById(user_id);
        const total = await calculateTotalFood(foods)

        verifyIfExists(restaurant, user);

        
        const order = await Order.create({
            restaurant: restaurant_id,
            user: user_id,
            foods,
            total,
        });

        await order.populate('restaurant').populate('user').populate('foods').execPopulate();

        return res.json(order);
 

        function verifyIfExists(restaurant, user) {
            if (!restaurant) {
                return res.status(400).json({ error: "Restaurant does not exists." })
            }
            if (!user) {
                return res.status(400).json({ error: "User does not exists." })
            }
        }

        async function calculateTotalFood(foods) {
            let total = 0;
            console.log(foods);
            
            for (let i = 0; i < foods.length; i++) {
                const id_food = foods[i];
                const food = await Food.findById(id_food);
                total += food.price                
            }

            return parseFloat(total.toFixed(2));           
        }
    },

}