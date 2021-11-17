const controller = require("../controllers/filtre.controller");

module.exports =function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Content-Type, Accept"
    );
    next();
  });

app.get("/api/filter/continent", controller.findAll)  

app.get("/api/filtercontinent/", (req,res) => {
    const continent = req.query.continent;
    controller.filterContinent(continent , res);
    });

app.get("/api/filterpays/", (req,res) => {
    const pays = req.query.pays;
    controller.filterEtat(pays , res);
  });

app.get("/api/filterville/", (req,res) => {
    const ville = req.query.ville;
    controller.filterVille(ville , res);
    });

app.get("/api/filteruniversite/", (req,res) => {
    const universite = req.query.universite;
    controller.filterUniversite(universite , res);
    });
};