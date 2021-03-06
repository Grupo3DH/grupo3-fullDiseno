const db = require("../../database/models/index");

module.exports = {
    list: function (req, res) {
        db.User.findAll({
            attributes: ['name', "id", "avatar", "email"]
        })
            .then(function (users) {
                for (let i = 0; i < users.length; i++) {
                    users[i].setDataValue("endpoint", "/api/users/" + users[i].id)
                }

                let respuestaApi = {
                    meta: {
                        status: 200,
                        url: "/api/users",
                        total: users.length
                    },
                    data: users
                }
                res.json(respuestaApi)
            })
            .catch(function () {
                res.json({ status: 500 })
            })
    },
    total: function (req, res) {
        db.User.count().then(function(numero){
            res.json(numero)
        })
    }, 
    detail: function(req,res){
        db.User.findByPk(req.params.id).then(function(user){
                if (user != undefined) {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: "/api/users/" + user.id
                    },
                    data: user
                }
                return res.json(respuesta)
            } else {
                return res.json({ status: 204, msg: "este usuario no se encuentra" })
            }
        })
    },
    ultimo: function(req,res){
        db.User.findAll({ order:[["created_at","DESC"]], limit:1 })
        .then(function (us) {
           us[0].setDataValue("endpoint", "/api/users/ultimo/" + us.length)


            let apiResponse= {
                meta: {
                    status: 200,
                    url: "/api/users/ultimo",
                    total: us.length, 
                },
                data: us
            }
            res.json(apiResponse)
    })
    .catch(function (error) {
        res.json({ status: 500 })
        console.log(error)
    })
    }
}