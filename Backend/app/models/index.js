const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB, 
  dbConfig.USER, 
  dbConfig.PASSWORD, 
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.article = require("./article.model")(sequelize, Sequelize)
db.categorie = require("./categorie.model")(sequelize, Sequelize);
db.ville = require("./ville.model")(sequelize, Sequelize);
db.commentaire = require("./commentaire.model")(sequelize, Sequelize);
db.continent = require("./continent.model")(sequelize, Sequelize);
db.etat = require("./etat.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.universite = require("./universite.model")(sequelize, Sequelize);
db.user = require("./user.model")(sequelize, Sequelize);


// relation table role utilisateurs
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin"];

//relation entre article et categorie
db.article.belongsToMany(db.categorie, {
  through: "categorie_articles",
  foreignKey: "articleId",
  otherKey: "categorieId"
});

db.categorie.belongsToMany(db.article, {
  through: "categorie_articles",
  foreignKey: "categorieId",
  otherKey: "articleId"
});

db.CATEGORIE = ["restauration","lieu", "activité", "hébergement"];

//relation entre continent et pays
db.continent.belongsToMany(db.etat, {
  through: "continent_etats",
  foreignKey: "continentId",
  otherKey: "etatId"
});

db.etat.belongsToMany(db.continent, {
  through: "continent_etats",
  foreignKey: "etatId",
  otherKey: "continentId"
});

db.ETAT = [ "Afrique du Sud",
            "Allemagne",
            "Angleterre",
            "Argentine",
            "Australie",
            "Bahreïn",
            "Belgique",
            "Brésil",
            "Canada",
            "Chili",
            "Chine",
            "Colombie",
            "Corée du Sud",
            "Croatie",
            "Danemark",
            "Espagne",
            "Finlande",
            "Hongrie",
            "Inde",
            "Indonésie",
            "Irlande",
            "Japon",
            "Lettonie",
            "Lituanie",
            "Malaisie",
            "Mexique",
            "Pays Bas",
            "Pologne",
            "République Tchèque",
            "Roumanie",
            "Russie",
            "Singapour",
            "Suède",
            "Taïwan",
            "Thaïlande",
            "Turquie",
            "USA",
          ];


// hasMany() pour que l'article est plusieurs commentaires. belongTo pour indiquer qu'un commentaire n'appartient qu'à un seul article.
// relation table pays et ville
db.etat.hasMany(db.ville, { as: "ville"});
db.ville.belongsTo(db.etat, {
  foreignKey: "etatId",
  as: "etat",
});

// relation table ville avec université
db.ville.hasMany(db.universite, { as: "universite"});
db.universite.belongsTo(db.ville, {
  foreignKey: "villeId",
  as: "ville",
});

// relation table pays et article
db.universite.hasMany(db.article, { as: "article"});
db.article.belongsTo(db.universite, {
  foreignKey: "universiteId",
  as: "universite",
});

// relation table article et commentaire
db.article.hasMany(db.commentaire, { as: "commentaire"});
db.commentaire.belongsTo(db.article, {
  foreignKey: "articleId",
  as: "article",
});

module.exports = db;