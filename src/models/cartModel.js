const mongoose = require("mongoose");   //Importing mongoose package
const ObjectId = mongoose.Schema.Types.ObjectId;

//Instantiate a mongoose schema
const cartSchema = new mongoose.Schema({ 
    userId: {
        type: ObjectId,
        refs: 'User', 
        required: true,
        unique: true
    },
    items: [{
        productId: {
            type: ObjectId,
            refs: 'Product',
            required: true,  
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        }
    }],
    totalPrice: {
        type: Number, 
        required: true
        // Holds total price of all the items in the cart
    },
    totalItems: {
        type: String, 
        required: true,
        // Holds total number of items in the cart
    },
}, { timestamps: true });

//creating a model from schema and export it 
module.exports = mongoose.model('Cart', cartSchema) 
