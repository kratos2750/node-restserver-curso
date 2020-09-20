require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Configuracion global de rutas
app.use(require('./routes/index'));

//Habilitar el Public para acceder desde cualquier lugar
app.use(express.static(path.resolve(__dirname,'../public')));



//Conexion a la base de datos MONGODB
mongoose.connect(process.env.URLDB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }, (err, res)=>{
    if(err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, ()=>{
    console.log("Escuchando en el puerto", process.env.PORT);
});


/*Datos conexión 
mongoDB : kratos
password : ogiB1c9NHna0TRUt     

cadena de conexión 
mongodb+srv://kratos:ogiB1c9NHna0TRUt@cluster0.e4tir.mongodb.net/cafe
*/
