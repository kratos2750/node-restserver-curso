const jwt = require('jsonwebtoken');

//===============================
// Verificar token
//==============================

let verificaToken = (req, res, next) =>{
    
    let token = req.get('token'); //

    jwt.verify(token, process.env.SEDD, (err, decoded)=>{
        
        if(err){
            return res.status(401).json({
                ok: false,
                err : {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

};

//===============================
// Verifica ADMIN ROLE
//==============================

let verificaAdmin_Role = (req, res, next) => {

        let usuario = req.usuario;

        /*if(usuario.role === 'ADMIN_ROLE'){
            next();
        } else {
            return res.json({
                ok: false,
                err: 'El ususario no es administrador'
            });
        }*/
        next();
};




module.exports = {
    verificaToken,
    verificaAdmin_Role
}