const db = require("../database/models/index");

indexController = {
    index: function(req,res){
        db.Product.findAll({
            where: {deleted_at: null},
            include: ["image"]
        }).then(function (products) {
            return res.render("index", {products})
        })
    
    }
}


module.exports = indexController;