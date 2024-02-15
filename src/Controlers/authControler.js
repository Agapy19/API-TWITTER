
const jwt = require('jsonwebtoken');
const authModel = require('../Models/authModel.js');

const secretKey = '12345';

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await userModel.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    res.status(500).json({ message: 'Erreur lors de la connexion' });
  }
}

module.exports = {
    login,
  };
