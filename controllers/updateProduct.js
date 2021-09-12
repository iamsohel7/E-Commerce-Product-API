let Data = require('../model/dataModel');

updateProduct = (req, res) => {
    Data.findById(req.params.product_id)
        .then(data => {

            data.name = req.body.name ? req.body.name : data.name;
            data.category_name = req.body.category_name ? req.body.category_name : data.category_name;
            data.description = req.body.description ? req.body.description : data.description;
            data.buy_price = req.body.buy_price ? req.body.buy_price : data.buy_price;
            data.sell_price = req.body.sell_price ? req.body.sell_price : data.sell_price;
            data.quantity = req.body.quantity ? req.body.quantity : data.quantity;

            data.save()
                .then(() => res.status(200).json({ "status": "success" }))
                .catch(err => res.status(400).json({
                    "status": "failure",
                    "reason": "An error occurred"
                }));
        })
        .catch(err => res.status(400).json('Error: ' + err));
}


module.exports = updateProduct;