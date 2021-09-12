let Data = require('../model/dataModel');

addProduct = (req, res) => {

    let name = req.body.name;
    let category_name = req.body.category_name;
    let description = req.body.description;
    let buy_price = req.body.buy_price;
    let sell_price = req.body.sell_price;
    let quantity = req.body.quantity;

    if (quantity >= 0) {
        const newData = new Data({
            name,
            category_name,
            description,
            buy_price,
            sell_price,
            quantity
        });

        newData.save()
            .then(() => res.status(201).json(newData))
            .catch(err => res.status(400).json({ "Status": "Failure", "reason": "An Error Occured" }));
    } else {
        res.status(416).json({ "Status": "Failure", "reason": "Quantity can't be negative" });
    }
}


module.exports = addProduct;