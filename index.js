const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})



const addProduct = require('./controllers/addProduct');
const deleteProduct = require('./controllers/deleteProduct');
const searchProduct = require('./controllers/searchProduct');
const updateProduct = require('./controllers/updateProduct');

app.get('/api/products/:product_id', searchProduct);
app.delete('/api/products/:product_id', deleteProduct);
app.post('/api/products/', addProduct);
app.put('/api/products/:product_id', updateProduct);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
