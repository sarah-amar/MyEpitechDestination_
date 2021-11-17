const controller = require("../controllers/search.controller");

module.exports =function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Content-Type, Accept"
    );
    next();
  });
 
  app.get("/api/search/", (req, res) => {
    const word = req.query.recherche;
    const words = word.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    controller.search(words, res);
  });
};
