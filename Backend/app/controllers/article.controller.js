//Imports
//var jwt = require("jsonwebtoken");
//var bcrypt = require("bcryptjs");

//constants
const db = require("../models");
const Article = db.article;
const Commentaire = db.commentaire;
const Op = db.Sequelize.Op;
const Categorie = db.categorie;
const categorie_articles = db.categorie_articles;
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

//Upload image
exports.uploadImg = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 //limite la taille de l'image à 5 megabytes.
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Types de fichiers autorisés .jpeg, .jpg and .png!'));
        }
    }
}).single('image');

//Create article
exports.createArticle = (req, res) => {
    const article = {
        auteur: req.body.auteur,
        titre: req.body.titre,
        description: req.body.description,
        image: req.file.path,
        universiteId: req.body.universiteId,
    };
    Article.create(article)
    .then((data) => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Une erreur s'est produite lors de la création de l'article."
        })
    })
},

// Retrieve article by id with his comments.
exports.findOneArticle = (req, res) => 
{
    const id = req.params.id;
    Article.findByPk(id, {
        include: [{
        model: Categorie,
        as: 'categories',
        attributes :["id","nom"],
        through: {
            model: categorie_articles,
            as: 'categorie_articles',
            attributes: ['articleId', 'categorieId']
        }
        }]
    })
    .then(article => 
    {
        var condition = {articleId: id};
        Commentaire.findAll({ where: condition })
        .then(commentaires => 
        {
            article.dataValues["commentaires"] = commentaires;
            res.send(article);
        })
        .catch(err => {
            res.status(500).send({
                message : 
                err.message || "Une erreur s'est produite lors de la récupération du commentaire"
            });
        });
    })
};

exports.findAllArticles = (req, res) => {
    Article.findAll({
        include: [{
            model: Categorie,
            as: 'categories',
            attributes :["id","nom"],
            through: {
                model: categorie_articles,
                as: 'categorie_articles',
                attributes: ['articleId', 'categorieId']
            }
        }]
    })
    .then(function(article){
        return res.jsonp(article);
    })
    .catch(err => {
        res.status(500).send({
            message :
            err.message || "Une erreur s'est produite lors de la récupération des articles."
        });
    });
}

// Update Article
exports.updateArticle = (req, res) => {
    const id = req.params.id;
    Article.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if(num == 1) {
            res.send({
                message: "Article modifié avec succès."
            });
        } else {
            res.send({
                message: `Impossible de modifié l'article avec l'identifiant: ${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message : 
            err.message || "Une erreur s'est produite lors de la modification de l'article avec l'identifiant:" +id+ " Vérifiez que tous les champs soient remplis."
        });
    }); 
};

// Delete article with his comments
exports.deleteOneArticle = (req, res) => 
{
    const id = req.params.id;
    Article.findOne({ where: { id: id } })
    var condition = {articleId: id};
    Commentaire.destroy({ where: condition })
    Article.destroy({where: {id : id}})
    .then(num => {
        if(num==1){
            res.send({message : 'Articles et commentaires supprimées avec succès'});
        } else {
            res.send({
                message: `Impossible de supprimer l'article et ses commentaire avec l'identifiant: ${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message : 
            err.message || "Une erreur s'est produite lors de la suppression de l'article et de ses commentaires."
        });
    });
};

// Create and save comment
exports.createCommentaire = (req, res) => {
    const commentaire = {
        nom: req.body.nom,
        commentaire: req.body.commentaire,
        articleId: req.body.articleId 
    };

    Commentaire.create(commentaire)
    .then( data => {
        var condition = {userId: id};
        User.findAll({ where: condition })
        .then(commentaire =>
            {
                commentaire.dataValues["utilisateur"] = commentaire
                res.send(data);
            }) 
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Une erreur s'est produite lors de la création du commentaire."
        })
    })
},

// Delete comment by id
exports.deleteCommentaire = (req, res) => {
    const id = req.params.id;
  
    Commentaire.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Le commentaire a été supprimé!"
            });
        } else {
            res.send({
                message: `Impossible de supprimer le commentaire avec l'identifiant: ${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message : 
            err.message || "Impossible de supprimer le commentaire avec l'identifiant:" +id 
        });
    });
};

// Update comment
exports.updateCommentaire = (req, res) => {
    const id = req.params.id;
    Commentaire.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if(num == 1) {
            res.send({
                message: "Commentaire modifié avec succès."
            });
        } else {
            res.send({
                message: `Impossible de modifié le commentaire avec l'identifiant: ${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message : 
            err.message || "Une erreur s'est produite lors de la modification du commentaire avec l'identifiant: " +id
        });
    }); 
};