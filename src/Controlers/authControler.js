
const Users = require('../Models/authModel.js');
const jwt = require('jsonwebtoken');
const authControler = {
    post: (req, res) => {
        const { name, password } = req.body
        const valid = Users.some((user) => user.name === name && user.password === password)
        const token = jwt.sign({name}, privateKey, {algorithm:'RS256'})
        if (valid) {
            res.send(valid)
        }
        else {
            res.status(404).send("pas trouver")
        }

    }


}
module.exports = authControler;
