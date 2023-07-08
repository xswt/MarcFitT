//FICHERO QUE SE ENCARGA DE REALIZAR LA CONEXION A BD

const mysql = require('mysql'); //IMPORTAMOS mysql

const connection = mysql.createConnection({ //DEFINIMOS LOS PARAMETROS DE CONEXION CON NUESTRA BD DE MYSQL
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'marcfit' 
});

connection.connect((error) => { //CON EL .connect INICIAMOS LA CONEXION A BD
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos!');
});

module.exports = connection; //EXPORTAMOS LA CONEXION