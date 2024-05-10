const mongoose = require('mongoose');
const cartItemSchema = new mongoose.Schema({
    title: String,
    price: String,
    size: String,
    location: String,
    image: String,
    readytomove: String
});

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'MbsUser' },
    items: [cartItemSchema]
});

module.exports = mongoose.model('CartedItems', cartSchema);