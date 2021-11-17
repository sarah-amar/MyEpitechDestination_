module.exports = (sequelize, Sequelize) => {
    const Continent = sequelize.define("continents", {
      Continent: {
        type: Sequelize.STRING
      },
    });
    return Continent;
  };