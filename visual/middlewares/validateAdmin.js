const data = require('../dataBase/users.json');

const validateAdmin = ( req, res, next ) =>{
    
    const user = req.query.user;
    const searchAdmin = data.find( admin => admin.username === user)


    if(searchAdmin){
        next()
    }else{
        res.send('No puede ingresar');
    }
    
}

module.exports = validateAdmin;