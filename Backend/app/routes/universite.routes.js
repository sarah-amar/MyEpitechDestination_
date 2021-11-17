const controller = require("../controllers/universite.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

//Récuperer tous les articles et leur commentaires
app.get("/api/universite", controller.findAllUniversite);

}