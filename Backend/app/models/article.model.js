module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("articles", {
    auteur: {
      type: Sequelize.STRING
    },
    titre: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    image: {
      type: Sequelize.STRING
    },
  });
  return Article;
};