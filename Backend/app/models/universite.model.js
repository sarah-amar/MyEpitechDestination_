module.exports = (sequelize, Sequelize) => {
    const Universite = sequelize.define("universites", {
        nom: {
        type: Sequelize.STRING
        },
    });
    return Universite;
};