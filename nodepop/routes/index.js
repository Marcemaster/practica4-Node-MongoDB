var express = require('express');
var router = express.Router();
var anunciosRouter = require('./API/anuncios');



/* GET home page. */
router.get('/', function(req, res, next) {

  // CÓMO PASAR EL JSON DE ANUNCIOS A TRAVÉS DE VIEWS INDEX.JS???

  res.render('index', { title: 'Nodepop', anuncios: 5 });
});

module.exports = router;
