"use strict";

var express = require("express");
const createError = require("http-errors");
const Anuncio = require("../../models/anuncio.js");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const nombre = req.query.nombre;
    const venta = req.query.venta;
    const precio = req.query.precio;
    const precioMin = req.query.precioMin;
    const precioMax = req.query.precioMax;
    const foto = req.query.foto;
    const tags = req.query.tags;
    const skip = req.query.skip;
    const limit = req.query.limit;
    const sort = req.query.sort;
    const filtros = {};

    if (nombre) {
      filtros.nombre = nombre;
    }
    if (venta) {
      filtros.venta = venta;
    }
    if (precio) {
      filtros.precio = precio;
    }
    if (precioMin) {
      filtros.precio = { $gte: precioMin };
    }
    if (precioMax) {
      filtros.precio = { $lte: precioMax };
    }
    if (precioMax && precioMin) {
      filtros.precio = { $gte: precioMin, $lte: precioMax };
    }
    if (foto) {
      filtros.foto = foto;
    }
    if (tags) {
      filtros.tags = tags;
    }

    const anuncios = await Anuncio.lista(filtros, skip, limit, sort);

    res.json({ results: anuncios });
  } catch (err) {
    next(err);
  }
});

router.get("/tags", async (req,res,next) => {
  try {
    const anuncios = await Anuncio.lista();
    let tag_list = []
    for (let i = 0; i < anuncios.length; i++){
      tag_list.push(anuncios[i].tags)
    }
    tag_list = [].concat.apply([], tag_list)
    tag_list = [... new Set(tag_list)]

    res.json({ results: tag_list });
  } catch (err) {
    next(err);
  }


})
module.exports = router;
