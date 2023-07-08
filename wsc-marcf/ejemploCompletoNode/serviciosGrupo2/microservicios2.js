
//REALIZAMOS LOS IMPORTS NECESARIOS (explicados todos en el microservicios1)
const express = require('express');
const router = express.Router();
const db = require('../conexionBD');


//EJEMPLO BASICO DE LLAMADA GET (el mismo que hay explicado en microservicios1)
router.get('/ruta3', (req, res) => {
  const query = 'SELECT * FROM user'; 
  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error al obtener datos' });
      return;
    }
    res.json(results);
  });
});


//EJEMPLO DE MICROSERVICIO PUT
router.put('/ruta4', (req, res) => { //ESPECIFICAMOS LA RUTA DE ACCESO AL SERVICIO EN ESTE CASO "/ruta4"

  const datos = req.body; //GUARDAMOS LOS DATOS QUE VIENEN EN EL BODY AL REALIZAR LA LLAMADA EN UNA CONST PARA PODER DARLES USO.

  const query = `UPDATE otra_tabla SET ? WHERE id = ${datos.id}` //EJEMPLO SENCILLO DE QUERY QUE USA LOS DATOS QUE VIENEN EN EL BODY

  db.query(query, [datos, req.params.id], (error, result) => {//REALIZAMOS LA LLAMADA A BD CON LA QUERY
    if (error) { //CONTROLAMOS POSIBLES ERRORES
      console.error('Error al realizar la actualización en la base de datos:', error);
      res.status(500).json({ error: 'Error al realizar la actualización' });
      return;
    }
    res.json({ mensaje: 'Actualización exitosa en la base de datos' });//ENVIAMOS LA RESPUESTA
  });
});


module.exports = router; //EXPORTAMOS LOS MICROSERVICIOS GENERADOS, SERIAN TODOS AQUELLOS QUE TIENEN reouter.algo EN ESTE CASO TENEMOS EN LA LINEA 9 y 22
