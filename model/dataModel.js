const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: { type: String, required: true },
    category_name: { type: String, required: true },
    description: { type: String, required: true },
    buy_price: { type: Number, required: true },
    sell_price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;