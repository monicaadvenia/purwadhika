var mongoose = require('mongoose');
var PowerRanger = require('./models/PowerRangers')

var url = 'mongodb://monica:1234@localhost/expmongo';
mongoose.connect(url, () => {
    console.log('terhubung ke mongodb')
});

// //INPUT DATA
// new PowerRanger({
//     nama: 'Budi',
//     warna: 'Biru',
//     usia: '25'
// }).save().then((newUser) => {
//     console.log(`Data masuk hore! yg masuk: ${newUser}`)
// });

// //SHOW ALL DATA
// PowerRanger.find((error, data) => {
//     console.log(data);
// });

//SHOW SPESIFIC DATA
PowerRanger.find({nama:'Budi'}, (error, data) => {
    console.log(data);
});