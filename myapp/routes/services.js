var express = require('express');
var router = express.Router();

//service to handle the get header template items request
router.get('/getHeaderList', function(req, res, next) {
    console.log('request Occured');
  var response = {};
  var itemsList = [
    {name: 'HOME'},
    {name: 'NODEJS'},
    {name: 'TESTING'},
    {name: 'REFERENCES'}];
    response.items = itemsList;
    res.status(200).send(response);
});

module.exports = router;