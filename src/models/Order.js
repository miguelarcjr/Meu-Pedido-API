const mongoose = require('mongoose');

const FoodsOrderSchema = new mongoose.Schema({
    
})

const OrderSchema = new mongoose.Schema({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    foods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }],
    status: {
        type: String,
        enum : ['Aberto','Em Progesso','Pronto','Entregue'],
        default: 'Aberto' 
    },
    paid: {
        type: Boolean,
        default: false
    },
    total: Number
})

module.exports = mongoose.model('Order',OrderSchema)