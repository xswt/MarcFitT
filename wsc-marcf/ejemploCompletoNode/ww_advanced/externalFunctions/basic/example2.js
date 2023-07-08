
const express = require('express');
const router = express.Router();
const db = require('../../../conexionBD');


const obtenerDatosDeLaBD = (callback) => {
    const query = 'SELECT * FROM user'; 
  
    db.query(query, (error, results) => {

      if (error) {callback(error, null);return;}

      // Filtrar los resultados según algún criterio
      const filteredResults = results[0]
      console.log("EJEMPLO",filteredResults)//se puede mostrar por consola results
      callback(null, filteredResults);
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