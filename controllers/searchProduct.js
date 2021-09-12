let Data = require('../model/dataModel');

searchProduct = (req, res) => {

    Data.findById(req.params.product_id)
        .then(data => {
            if (data !== null) {
                res.status(200).json(data)
            } else {
                res.status(404).json({});
            }
        })
        .catch(err => res.status(400).json({ "status": "failure", "reason": "An error ocurred" }));
}


module.exports = searchProduct;