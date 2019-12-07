const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    price:  {
        type: Number,
        required: true,
    },
    thumbnail: String,
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }

});

module.exports = mongoose.model('Food',FoodSchema);