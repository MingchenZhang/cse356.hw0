var Express = require('express');
var BodyParser = require('body-parser');
var When = require('when');

exports.getRoute = function (s) {
    var router = Express.Router();

    var urlParser = BodyParser.urlencoded({extended: false, limit: '10kb'});
    var jsonParser = BodyParser.json({limit: '10kb'});

    router.get('/', function (req, res, next) {
        res.render('home-page');
    });

    router.get('/hw0.html', function (req, res, next) {
        res.render('home-page');
    });

    return router;
};