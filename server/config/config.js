//**************************************** */
//PUERTO
//*************************************** */

process.env.PORT = process.env.PORT || 3000 ;



//**************************************** */
//ENTORNO
//*************************************** */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//**************************************** */
//Vencimiento Token
//*************************************** */
//60 segundos
//60 minutos
//24 horas
//30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30 ;
//**************************************** */
//SEED de Autenticacion
//*************************************** */

process.env.SEDD  = process.env.SEDD || 'este-es-el-desarrollo';

//**************************************** */
//Base de Datos
//*************************************** */

let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


//**************************************** */
//GOOGLE CLIENT ID
//*************************************** */

process.env.CLIENT_ID = process.env.CLIENT_ID || "593435950741-1u6t912kfesu1n65ghi73ilq26pmu94s.apps.googleusercontent.com";