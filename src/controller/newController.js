const { model } = require("mongoose")

class NewsController {
    index(res,req){
        res.render('news')
    }
}

module.exports = new NewsController