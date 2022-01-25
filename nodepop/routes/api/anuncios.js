'use strict';

var express = require('express');
const createError = require('http-errors');
const Anuncio = require("../../models/anuncio.js")
var router = express.Router();


router.get("/", async (req, res, next) => {
    try {
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
        
        const anuncios = await Anuncio.lista(filtros, skip, limit, select, sort);

        res.json({ results: anuncios });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
