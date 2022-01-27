var express = require('express');
var router = express.Router();
var anunciosRouter = require('./API/anuncios');
const Anuncio = require("../models/anuncio.js")




/* GET home page. */
router.get('/', async function(req, res, next) {
  
  const nombre = req.query.nombre;
  const venta = req.query.venta;
  const precio = req.query.precio;
  const foto = req.query.foto;
  const tags = req.query.tags;
  const skip = req.query.skip;
  const limit = req.query.limit;
  const select = req.query.select;
  const sort = req.query.sort;
  const filtros = {};

  if (nombre) {filtros.nombre = nombre;}
  if (venta) {filtros.venta = venta;}
  if (precio) {filtros.precio = precio;}
  if (foto) {filtros.foto = foto;}
  if (tags) {filtros.tags = tags;}
  
  const arrayDeAnuncios =  await Anuncio.lista(filtros, skip, limit, select, sort)

  for (let i= 0; i < arrayDeAnuncios.length; i++) {
    console.log(arrayDeAnuncios[i])
  }

//  arrayDeAnuncios = JSON.stringify(arrayDeAnuncios)
  
  res.render('index', { title: 'Nodepop', anuncios: arrayDeAnuncios });
});




module.exports = router;
