const express = require('express'); //IMPORTAMOS EXPRESS PARA PDOER USARLO

//MICRO SERVICIOS QUE IMPORTAMOS PARA PODER USAR SUS "RUTAS", GUARDAMOS LOS SERVICIOS EN UNA CONST
const microservicio1 = require('./serviciosGrupo1/microservicios1');
const aliasMicro2 = require('./serviciosGrupo2/microservicios2');
const funcionExterna = require('./ww_advanced/externalFunctions/basic/example2');


const app = express(); //METEMOS EXPRESS EN UNA CONST PARA PODER REALIZAR LAS LLAMADAS

// Configuración de CORS NOS PERMITE ACCEDER DESDE OTRO PUERTO.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//MONTAMOS SERVICIOS EN EL ENRUTADOR PRINCIPAL CON .use, ESTO NOS PERMITE HACER LA LLAMDA path/microservicio/rutaDelMicroservicio
app.use('/microservic1', microservicio1);
app.use('/rutaAcceso', aliasMicro2);
app.use('/datos',funcionExterna)

//ESPECIFICAMOS EL PUERTO EN EL QUE SE EJECUTA EL SERVICIO
const port = 3003;

//INICIAMOS EL SERVICIO EN EL PUERTO ESPECIFICADO
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});