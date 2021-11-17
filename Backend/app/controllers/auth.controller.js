// Imports
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// Constants
const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

//Create and Save a new users
exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    nom: req.body.nom,
    prénom: req.body.prénom,
    email: req.body.email,
    mot_de_passe: bcrypt.hashSync(req.body.mot_de_passe, 8)
  })
  .then(user => {
    if (req.body.roles) {
      Role.findAll({
        where: {
          nom: {
            [Op.or]: req.body.roles
          }
        }
      })
      .then(roles => {
        user.setRoles(roles)
        .then(() => {
          res.send({ message: "Enregistrement réussi avec succès :)!" });
        });
      });
    } else {
      // user role = 1
      user.setRoles([1])
      .then(() => {
        res.send({ message: "Utilisateur enregistré avec succès !" });
      });
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

//Find a user
exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Utilisateur non trouvé." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.mot_de_passe,
        user.mot_de_passe
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Mot de passe incorrect !"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].nom.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          nom: user.nom,
          prénom: user.prénom,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};