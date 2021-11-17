module.exports = (sequelize, Sequelize) => {
    const Etat = sequelize.define("etats", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      Pays: {
        type: Sequelize.STRING
      },
    });
    return Etat;
  };