//**************************************** */
//PUERTO
//*************************************** */

process.env.PORT = process.env.PORT || 3000 ;



//**************************************** */
//ENTORNO
//*************************************** */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//**************************************** */
//Base de Datos
//*************************************** */

let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else {
    urlDB = 'mongodb+srv://kratos:ogiB1c9NHna0TRUt@cluster0.e4tir.mongodb.net/cafe'
}

//urlDB = 'mongodb+srv://kratos:ogiB1c9NHna0TRUt@cluster0.e4tir.mongodb.net/cafe'

process.env.URLDB = urlDB;