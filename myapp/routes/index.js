var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getHeaderList', function(req, res, next) {
    console.log('request Occured');
  var response = {};
  var itemsList = [
    {name: 'REFERENCES'},
    {name: 'PROJECTS'},
    {name: 'TESTING'},
    {name: 'NODEJS'},
    {name: 'HOME'}
    ];
    response.items = itemsList;
    res.status(200).send(response);
});

router.get('/home', function(req, res, next){
  res.render('Angular8_ng-routing');
});

module.exports = router;
