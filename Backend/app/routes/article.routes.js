const controller = require("../controllers/article.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
    //"Access-Control-Allow-Headers",
    //"x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

// Créer un Article
app.post("/api/articles", controller.uploadImg, controller.createArticle);

//Récuperer tous les articles et leur commentaires
app.get("/api/articles", controller.findAllArticles);

// Récuperer un article par son id avec ses commentaires.
app.get("/api/articles/:id", controller.findOneArticle);

// Update a commentaire with id
app.put("/api/articles/:id", controller.updateArticle);

// Supprimer un article par son id avec ses commentaires associés
app.delete("/api/articles/:id", controller.deleteOneArticle);

// --------------------------------------------------------------------------------------
 
// Créer un nouveau commentaire
app.post("/api/commentaires", controller.createCommentaire);
 
// Update a commentaire with id
app.put("/api/commentaires/:id", controller.updateCommentaire);
 
// Supprimer un commentaire par son id
app.delete("/api/commentaires/:id", controller.deleteCommentaire);
}