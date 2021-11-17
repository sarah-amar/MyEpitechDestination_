<template>
    <div class="container-fluid">
      <div class="text-center">
        <router-link to="/createarticle">Créer un nouvel article</router-link> |
        <router-link to ="/admin">Retourner au panel admin</router-link>
      </div><br/>
        <h1>Liste des articles</h1>
       <div v-if="articles.length === 0">
            <h2> Pas d'article trouvé pour le moment </h2>
        </div>
      </div>
        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Titre</th>
                  <th scope="col">Description</th>
                  <th scope="col">Image</th>
                  <th scope="col">Username</th>
                  <th scope="col">Created at</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="article in articles" :key="article.id">
                  <td>{{ article.id }}</td>
                  <td>{{ article.titre }}</td>
                  <td>{{ article.description }}</td>
                  <td><img :src="'http://localhost:8080/'+ article.image" width="250" ></td>
                  <td></td>
                  <td>{{ article.createdAt }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group" style="margin-bottom: 20px;">
                        <router-link :to="{name: 'EditArticles', params: {id: article.id}}" class="btn btn-sm btn-outline-secondary">Editer l'article</router-link>
                        <button class="btn btn-sm btn-outline-secondary" v-on:click="deletearticle(article.id)">Supprimer l'article</button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
</template>

<script>
import axios from "axios";
export default {
    name : "CrudArticles",
  data() {
    return {
      articles: {},
    };
  },
  
  created() {
    this.fetcharticles();
  },
  methods: {
    fetcharticles() {
      axios
        .get('http://localhost:8080/api/articles')
        .then(data => (this.articles = data.data));
        
    },
    deletearticle(id) {
      if(confirm("Etes-vous sûr de vouloir supprimer cet article ?")){
        axios.delete('http://localhost:8080/api/articles/'+ id,)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
      }
    }
  }
};
</script>