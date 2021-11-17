const db = require("../models");
const Continent = db.continent;
const Etat = db.etat;
const continent_etats = db.continent_etats
const Op = db.Sequelize.Op;
const Ville = db.ville;
const Universite = db.universite;
const Article = db.article;


exports.findAll = (req, res) => {
  
    Continent.findAll({attributes: ["continent"]  })
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message :   
              err.message || "Some error occurred while retrieving the continent."
          });
      });
  };

exports.filterContinent = (continent, res) =>
{
    Continent.findAll({
        where: { continent : continent},
        include: [{
            model: Etat,
            as: 'etats',
            attributes :['id','pays'],
            through: {
                model: continent_etats,
                as: 'continent_etats',
                attributes: ['continentId', 'etatId']}
                }
        ]})
        .then(function(continent){
            return res.jsonp(continent);
        })
        .catch(err => {
            res.status(500).send({
                message :
                err.message || "filtre non trouvé"
            });
        });
}

exports.filterEtat = (pays, res) =>
{
    Ville.findAll({
        include: [{
            model: Etat,
            as: 'etat',
            attributes :['id','pays'],
            where: { pays : pays},
                }
        ]})
        .then(function(ville){
            return res.jsonp(ville);
        })
        .catch(err => {
            res.status(500).send({
                message :
                err.message || "filtre non trouvé"
            });
        });
}

exports.filterVille = (ville, res) =>
{
    Universite.findAll({
        include: [{
            model: Ville,
            as: 'ville',
            attributes :['id','nom'],
            where: { nom : ville},
                }
        ]})
        .then(function(universite){
            return res.jsonp(universite);
        })
        .catch(err => {
            res.status(500).send({
                message :
                err.message || "filtre non trouvé"
            });
        });
}

exports.filterUniversite = (univeriste, res) =>
{
    Article.findAll({
        include: [{
            model: Universite,
            as: 'universite',
            attributes :['id','nom'],
            where: { nom : univeriste},
                }
        ]})
        .then(function(article){
            return res.jsonp(article);
        })
        .catch(err => {
            res.status(500).send({
                message :
                err.message || "filtre non trouvé"
            });
        });
}