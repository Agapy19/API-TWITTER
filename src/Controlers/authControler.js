
const Users = require('../Models/authModel.js');
const authControler = {
 post:(req, res) => {
    const{username, email, password} = req.body

    const user = {
        username:username,
       email: email,
        password: password
       
    };

    Users.push(user);
        res.status(201).json(Users);
 }

 
}
module.exports = authControler;
