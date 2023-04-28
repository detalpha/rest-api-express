const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);
Karyawan
pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    // Ambil data semua ruleset
    getDataRuleset(req,res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM tabel_ruleset;
                `
            , function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results 
                });
            });
            connection.release();
        })
    },
    // Ambil data ruleset berdasarkan ID
    getDataRulesetByID(req,res){
        let id = req.params.id;
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM tabel_ruleset WHERE ruleset_id = ?;
                `
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results
                });
            });
            connection.release();
        })
    },
    // Simpan data ruleset
    addDataRuleset(req,res){
        let data = {
            ruleset_text : req.body.ruleset_text,
            function_text : req.body.function_text,
            action : req.body.action,
            sequence : req.body.sequence,
            object : req.body.object,
            field : req.body.field,
            low : req.body.low,
            high : req.body.high,
            search_type : req.body.searchtype
        }
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO tabel_ruleset SET ?;
                `
            , [data],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil tambah data!',
                });
            });
            connection.release();
        })
    },
    // Update data ruleset
    editDataRuleset(req,res){
        let dataEdit = {
            ruleset_nama : req.body.nama,
            ruleset_umur : req.body.umur,
            ruleset_alamat : req.body.alamat,
            ruleset_jabatan : req.body.jabatan
        }
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE tabel_ruleset SET ? WHERE ruleset_id = ?;
                `
            , [dataEdit, id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil edit data!',
                });
            });
            connection.release();
        })
    },
    // Delete data ruleset
    deleteDataRuleset(req,res){
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM tabel_ruleset WHERE ruleset_id = ?;
                `
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil hapus data!'
                });
            });
            connection.release();
        })
    }
}