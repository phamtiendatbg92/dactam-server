var express = require('express');
var router = express.Router();
var {AccountModel, NewsModel, ProductModel} = require ('../public/db-connector.js');



/* GET home page. */
router.get('/api/v1.0/get-all-product', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
  const filter = {};
  AccountModel.find(filter, function (err, doc) {
    res.json(doc);
  });
});

module.exports = router;
