module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    nom: {
      type: Sequelize.STRING
    },
    prénom: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    mot_de_passe: {
      type: Sequelize.STRING
    },
    favoris: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
  });
  return User;
};