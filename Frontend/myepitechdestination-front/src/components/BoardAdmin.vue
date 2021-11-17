<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{ content }}</h3>
      <router-link to="/crudUtilisateurs">Liste des Utilisateurs</router-link><br/>
      <router-link to="/crudArticles">Liste des Articles</router-link><br/>
      <router-link to="/crudcommentaires">Liste des Commentaires</router-link>
    </header>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Admin",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getAdminBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>