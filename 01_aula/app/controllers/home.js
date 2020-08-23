module.exports = function() {
    var controller = {};
    controller.index = function(req, res){
        // retornara a página index.ejs
        res.render('index', {nome: 'ExpressJS'});
    };
    return controller;
}