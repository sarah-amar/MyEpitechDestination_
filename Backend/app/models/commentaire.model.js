const db = require("../models/index.js", "../models");
const User = db.user;
module.exports = (sequelize, Sequelize) => {
  const Commentaire = sequelize.define("commentaires", {
    nom:{
      type: Sequelize.STRING
    },
    commentaire: {
      type: Sequelize.TEXT
    },
  });
  return Commentaire;
};