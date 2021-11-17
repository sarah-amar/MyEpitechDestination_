module.exports = (sequelize, Sequelize) => {
    const Ville = sequelize.define("villes", {
        nom: {
            type: Sequelize.STRING
        },
    });
    return Ville;
};