//USING MYSQL PACKAGE

// const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Plutoiscute123$',
//     database: 'express_mysql' 
// });

// db.connect();

// // 1# Select All Data
// var sql = 'SELECT * FROM karyawan';
// db.query(sql, (err, result) => {
//     if(err) throw err;
//     console.log(result);
// });

// db.end();

// // 2# Select Spesific Data
// var nama = 'Budi';
// var sql = 'SELECT * FROM karyawan where nama = ?';
// db.query(sql, nama, (err, result) => {
//     if(err) throw err;
//     console.log(result);
// });

// db.end();

// // 3# Insert Data
// var data = {nama:"Caca", usia:26};
// var sql = 'INSERT INTO karyawan SET ?';
// db.query(sql, data, (err, result) => {
//     if(err) throw err;
//     console.log(result);
// });

// db.end();

// // 4# Delete Data
// var nama = 'Caca';
// var sql = 'DELETE from karyawan where nama=?';
// db.query(sql, nama, (err, result) => {
//     if(err) throw err;
//     console.log(result);
// });

// db.end();

// // 5a# Update Data
// var nama = 'Andi';
// var sql = 'UPDATE karyawan SET nama="Zizi" where nama=?';
// db.query(sql, nama, (err, result) => {
//     if(err) throw err;
//     console.log(result);
// });

// db.end();

// // 5b# Update Data
// var x = 'Andi';
// var y = 'Zizi';
// var sql = 'UPDATE karyawan SET nama=? where nama=?';
// db.query(sql, [x,y], (err, result) => {
//     if(err) throw err;
//     console.log(result);
// });

// db.end();

//EXPRESS & MYSQL

// #GET Route to Select All Data
// const express = require('express');
// const app = express();
// const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Plutoiscute123$',
//     database: 'express_mysql' 
// });

// db.connect();

// app.get('/', (req, res)=>{
//     // res.send('Backend ready!');
//     // 1# Select All Data
//     var sql = 'SELECT * FROM karyawan';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send(result);
//     });
// });

// app.listen(3210, () =>{
//     console.log('Server aktif @port 3210')
// })

// // #GET Route to Insert Data 1
// const express = require('express');
// const app = express();
// const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Plutoiscute123$',
//     database: 'express_mysql' 
// });

// db.connect();

// app.get('/inputsiti', (req, res)=>{
//     var data = {nama:"Siti", usia:21};
//     var sql = 'INSERT INTO karyawan SET ?';
//     db.query(sql, data, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Data sukses diinput');
//     });
// });

// app.listen(3210, () =>{
//     console.log('Server aktif @port 3210')
// })

// #GET Route to Insert Data 2
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Plutoiscute123$',
    database: 'express_mysql' 
});

db.connect();

app.get('/inputsiti', (req, res)=>{
    var data = {nama:"Siti", usia:21};
    var sql = 'INSERT INTO karyawan SET ?';
    db.query(sql, data, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Data sukses diinput');
    });
});

app.post('/', (req, res)=>{
    var data = {
        nama: req.body.nama,
        usia: req.body.usia
    };
    var sql = 'INSERT INTO karyawan SET ?';
    db.query(sql, data, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send({
            status: 'POST SUKSES',
            nama: req.body.nama,
            usia: req.body.usia
        });
    });
});

app.listen(3210, () =>{
    console.log('Server aktif @port 3210')
})

//kalau mau delete harus pake app.put