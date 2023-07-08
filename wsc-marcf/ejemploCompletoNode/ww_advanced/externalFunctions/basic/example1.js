
const express = require('express');
const router = express.Router();
const db = require('../../../conexionBD');


const obtenerDatosDeLaBD = (callback) => {
    const query = 'SELECT * FROM user'; 
    db.query(query, (error, results) => {
      if (error) {callback(error, null);return;}
      callback(null, results);
    });
  };



router.get('/ruta3', (req, res) => {
  
    obtenerDatosDeLaBD((error, results) => {
        if (error) {
          res.status(500).json({ error: 'Error al obtener datos' });
          return;
        }
        res.json(results);
      });
});




module.exports = router;