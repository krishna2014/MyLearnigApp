var express = require('express');
var router = express.Router();

//service to handle the get header template items request
router.get('/getHeaderList', function (req, res, next) {
    var response = {};
    var itemsList = [
        { name: 'REFERENCES' },
        { name: 'TESTING' },
        { name: 'HOME' },
        { name: 'NODEJS' }
    ];
    response.items = itemsList;
    res.status(200).send(response);
});

module.exports = router;