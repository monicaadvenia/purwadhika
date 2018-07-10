var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//bikin object baru
var prSkema = new Schema({
    nama: String,
    warna: String,
    usia: Number
});

var PowerRanger = mongoose.model('PowerRanger', prSkema);
module.exports = PowerRanger;