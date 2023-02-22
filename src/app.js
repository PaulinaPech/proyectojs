/*
Stephanie Paulina Pech Cervera
*/
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var mysql = require('mysql');
var myConnection = require('express-myconnection');


var app = express();
//importando rutas
const ArticuloRoutes = require('./routes/Articulo');

const { urlencoded } = require('body-parser');

//settings
app.set('port', process.env.PORT ||  3000 );
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewars
app.use(morgan('dev'));
//Mi conexión mysql
app.use(myConnection(mysql, {
    host: 'buqkqo0e9qrpyzlwkslu-mysql.services.clever-cloud.com',
    database: 'buqkqo0e9qrpyzlwkslu',
    user: 'ufsz5t5lonzj4mwk',
    password: 'yI4ipYvSt007vsWHe4hO',
    port: 3306
}));

app.use(express.urlencoded({extended: false}));

//routes
app.use('/', ArticuloRoutes);

//Archivos estáticos 
app.use(express.static(path.join(__dirname, 'public')));
//empezando el servidor
app.listen(app.get('port'), () =>{
  console.log('Servidor en el puerto 3000');
});