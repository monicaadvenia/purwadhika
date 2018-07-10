//INPUT DATA
// var db = require('mongodb').MongoClient;
// var url = 'mongodb://monica:1234@localhost:27017/expmongo';

// db.connect(url, (error, data) =>{
//     console.log("Terhubung ke MongoDB!");
//     inputData(data, () => {
//         data.close();    
//     });
// });

// // #2 Insert Data
// var inputData = (datab,callb) => {
//     var collection = datab.collection('karyawan');
//     collection.insertMany(
//         [{nama:'Andi', usia:21}],
//         (gagal, berhasil) => {
//             console.log("Data sukses tersimpan!");
//             callb(berhasil);
//         }
//     )
// }

// // AMBIL DATA
// var db = require('mongodb').MongoClient;
// var url = 'mongodb://monica:1234@localhost:27017/expmongo';

// db.connect(url, (error, data) =>{
//     console.log("Terhubung ke MongoDB!");
//     ambilData(data, () => {
//         data.close();    
//     });
// });

// var ambilData = (db) => {
//     var collection = db.collection('karyawan');
//     collection.find({}).toArray((error, hasil) => {
//         console.log(hasil)
//     })
// }

//INPUT & AMBIL DATA
// var db = require('mongodb').MongoClient;
// var url = 'mongodb://monica:1234@localhost:27017/expmongo';

// db.connect(url, (error, data) =>{
//     console.log("Terhubung ke MongoDB!");
//     inputData(data, () => {
//         ambilData(() => {
//             data.close();    
//         });
//     });
// });

// db.connect(url, (error, data) => {
//     console.log('Terhubung ke MongoDB!')
//     inputData(data)
//     ambilData(data)
//     data.close();
// })

// var inputData = (datab,callb) => {
//     var collection = datab.collection('karyawan');
//     collection.insertMany(
//         [{nama:'Caca', usia:22}],
//         (gagal, berhasil) => {
//             console.log("Data sukses tersimpan!");
//             callb(berhasil);
//         }
//     )
// }

// var ambilData = (db, callb) => {
//     var collection = db.collection('karyawan');
//     collection.find({}).toArray((error, hasil) => {
//         console.log(hasil)
//     })
// }

// var db = require('mongodb').MongoClient;
// var url = 'mongodb://monica:1234@localhost:27017/expmongo';

// db.connect(url, (error, data) => {
//     console.log('Terhubung ke MongoDB!')
    
//     //kalau mau input data, pakai inputData
//     //kalau mau ambil data, pakai ambilData
//     inputData(data, () => {
//         ambilData(data, () => {
//         })
//         data.close();
//     })
//     // Kalau mau seakan-akan langsung otomatis control + C, pakai data.close();
//     // data.close();
// })

// //tes dulu sampai di sini, jalan ga (pakai node app)

// // =========== masukin data
// var inputData = (x,y) => {
//     var collection = x.collection('karyawan');
//     collection.insertMany(
//         [{nama: 'Dedi', usia: 27}],
//         (gagal, hasil) => {
//             console.log('Data sukses diinput!');
//             y (hasil)
//         }
//     )
// }

// // =========== ambil data
// var ambilData = (db) => {
//     var collection = db.collection('karyawan');
//     collection.find({}).toArray((error, hasil) => {
//         console.log(hasil)
//     })
// }

// EXPRESS & MONGO DB
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var db = require('mongodb').MongoClient;
var url = 'mongodb://monica:1234@localhost:27017/expmongo';

db.connect(url, (error, data) => {
    console.log('Ole!Terhubung ke MongoDB')
});

app.get('/', (req,res) => {
    console.log(`Anda nge-get ke ${req.url}`);
    res.send('Anda get ke/')
});

//UNTUK GET DATA
app.get('/karyawan', (req,res) => {
    db.connect(url, (error, data) => {
        var kol = data.collection('karyawan');
        kol.find({}).toArray((error, hasil) => {
            console.log(hasil);
            res.send(hasil);
        })
    })
});

//UNTUK GET DATA TERTENTU
app.get('/karyawan/:nama', (req,res) => {
    db.connect(url, (error, data) => {
        var kol = data.collection('karyawan');
        var cari = req.url.substr(10, req.url.length);
        kol.find({nama:cari}).toArray((error, hasil) => {
            console.log(hasil);
            res.send(hasil);
        })
    })
});

//UNTUK GET DATA TERTENTU - req.params.nama
app.get('/pegawai/:nama', (req,res) => {
    db.connect(url, (error, data) => {
        var kol = data.collection('karyawan');
        var cari = req.params.nama;
        var cari1 = cari[0].toUpperCase() + cari.substr(1, cari.length);
        kol.find({nama:cari1}).toArray((error, hasil) => {
            console.log(hasil);
            res.send(hasil);
        })
    })
});

//UNTUK POST DATA
app.post('/pegawai', (req,res) => {
    db.connect(url, (error, data) => {
        var dataKirim = {
            nama: req.body.nama,
            usia: req.body.usia
        }
        var kol = data.collection('karyawan');
        kol.insert(dataKirim, (error, hasil) =>{
            console.log(hasil);
            res.send(hasil);
        })
    })
});

app.listen(3210, () => {
    console.log('Server aktif di @3210')
});