
const jwt = require('jsonwebtoken');
const authModel = require('../Models/authModel.js');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


const JWT_SECRET = 'votre_secret_jwt';

async function signUp(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  try {
    const user = await authModel.findUserByEmail(email);
    if (user) {
      return res.status(400).json({ message: 'Cet utilisateur existe déjà' });
    }

    await authModel.createUser(name, email, password);
    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
  }
}

async function signIn(req, res) {
  const { email, password } = req.body;
  try {
    const user = await authModel.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    const accessToken = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);
    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la connexion de l\'utilisateur' });
  }
}

module.exports = {
  signUp,
  signIn,
};


