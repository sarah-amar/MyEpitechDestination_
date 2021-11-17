//constants
const db = require("../models");
const Op = db.Sequelize.Op;
const Universite = db.universite;

exports.findAllUniversite = (req, res) => {
  
    Universite.findAll({attributes: ["id", "nom"]  })
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message :   
              err.message || "Une erreur s'est produite lors de la récupération de toutes les universités."
          });
      });
  };
