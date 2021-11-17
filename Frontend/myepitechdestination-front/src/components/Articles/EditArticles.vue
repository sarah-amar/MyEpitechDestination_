<template>
   <div>
        <h4 class="text-center mt-20">
            <small>
            <button class="btn btn-success" v-on:click="navigate()"> Profil </button>
            </small>
        </h4>
        <div class="col-md-12 form-wrapper">
            <h2> Editer un article </h2>
            <form id="create-post-form" @submit.prevent="editarticle(id)">
                <div class="form-group col-md-12">
                    <label for="title"> Titre </label>
                    <input type="text" id="titre" v-model="article.titre" name="title" class="form-control" placeholder="Un titre ...">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Description </label>
                    <input type="text" id="description" v-model="article.description" name="title" class="form-control" placeholder="Un description ....">
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
    name: "EditArticles",
  data() {
    return {
      id: 0,
      article: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getarticle(this.id);
  },
  methods: {
    editarticle(id) {
      let articleData = {
        id: this.article.id,
        titre: this.article.titre,
        description: this.article.description,
      };
      axios
        .put(
          'http://localhost:8080/api'+'/articles/'+ id, articleData
        )
        .then(data => {
          router.push({ name: "CrudArticles"}),
          console.log(data)
        });
    },
    getarticle(id) {
      axios
        .get('http://localhost:8080/api'+'/articles/'+ id)
        .then(data => (this.article = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>