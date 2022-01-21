const mongoose = require("mongoose")

const anuncioSchema = new mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
})

module.exports = mongoose.model("Anuncio", anuncioSchema)