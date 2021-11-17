<template>
   <div>
        <h4 class="text-center mt-20">
            <small>
            <button class="btn btn-success" v-on:click="navigate()"> AdminBoard </button>
            </small>
        </h4>
        <div class="col-md-12 form-wrapper">
            <h2> Editer un commentaire </h2>
            <form id="create-post-form" @submit.prevent="editcommentaire(id)">
                <div class="form-group col-md-12">
                    <label for="title"> Nom </label>
                    <input type="text" id="nom" v-model="commentaire.nom" name="nom" class="form-control" placeholder="Un nom différent ?">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Commentaire </label>
                    <input type="text" id="commentaire" v-model="commentaire.commentaire" name="commentaire" class="form-control" placeholder="Un commentaire ?">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> ArticleId </label>
                    <input type="text" id="articleId" v-model="commentaire.articleId" name="articleId" class="form-control" placeholder="Changer l'articleId ">
                </div>             
                <div class="form-group col-md-4 pull-right">
                    <button class="btn btn-success" type="submit"> Editer un utilisateur </button>
                </div>           
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
export default {
    name: "EditCommentaire",
  data() {
    return {
      id: 0,
      commentaire: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getcommentaire(this.id);
  },
  methods: {
    editcommentaire(id) {
      let commentaireData = {
        id: this.commentaire.id,
        nom: this.commentaire.nom,
        commentaire: this.commentaire.commentaire,
        articleId: this.commentaire.articleId,
      };
      axios
        .put(
          'http://localhost:8080/api'+'/commentaires/'+ id, commentaireData
        )
        .then(data => {
          router.push({ name: "CrudCommentaires"}),
          console.log(data)
        });
    },
    getcommentaire(id) {
      axios
        .get('http://localhost:8080/api'+'/commentaires/'+ id)
        .then(data => (this.commentaire = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>