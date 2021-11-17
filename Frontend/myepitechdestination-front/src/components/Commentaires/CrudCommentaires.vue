<template>
    <div class="container-fluid">
      <div class="text-center">|
        <router-link to ="/admin">Retourner au panel admin</router-link>
      </div><br/>
        <h1>Liste des articles</h1>
       <div v-if="commentaires.length === 0">
            <h2> Pas de commentaire trouvé pour le moment </h2>
        </div>
      </div>
        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Nom Prénom</th>
                  <th scope="col">Commentaire</th>
                  <th scope="col">ArticleId attaché</th>
                  <th scope="col">Date de création</th>
                  <th scope="col">Date de modification</th>                  
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="commentaire in commentaires" :key="commentaire.id">
                  <td>{{ commentaire.id }}</td>
                  <td>{{ commentaire.nom }}</td>
                  <td>{{ commentaire.commentaire }}</td>
                  <td>{{ commentaire.articleId }}</td>
                  <td>{{ commentaire.createdAt }}</td>
                  <td>{{ commentaire.updatedAt }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group" style="margin-bottom: 20px;">
                        <router-link :to="{name: 'EditCommentaire', params: {id: commentaire.id}}" class="btn btn-sm btn-outline-secondary">Editer le commentaire</router-link>
                        <button class="btn btn-sm btn-outline-secondary" v-on:click="deletecommentaire(commentaire.id)">Supprimer le commentaire</button>
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
    name : "CrudCommentaires",
  data() {
    return {
      commentaires: {},
    };
  },
  
  created() {
    this.fetchcommentaires();
  },
  methods: {
    fetchcommentaires() {
      axios
        .get('http://localhost:8080/api/commentaires')
        .then(data => (this.commentaires = data.data));
        
    },
    deletecommentaire(id) {
      if(confirm("Etes-vous sûr de vouloir supprimer ce commentaire ?")){
        axios.delete('http://localhost:8080/api/commentaires/'+ id,)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
      }
    }
  }
};
</script>