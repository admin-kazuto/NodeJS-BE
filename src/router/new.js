const { model } = require("mongoose")

class NewController {
    index(res,req){
        //[GET] /new
        res.render('new')
    }
}

module.exports = new NewController
