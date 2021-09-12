let Data = require('../model/dataModel');

deleteProduct = (req, res) => {
    Data.findByIdAndDelete(req.params.product_id)
        .then(() => res.status(200).json({ "status": "success" }))
        .catch(err => res.status(400).json({ "status": "failure", "reason": "An error Occurred" }));
}


module.exports = deleteProduct;