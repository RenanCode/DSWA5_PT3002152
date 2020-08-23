var controller = require('../controllers/home')();
module.exports = fuction(app){
    app.get('/index', controller.index);
    app.get('/', controller.index);
}
