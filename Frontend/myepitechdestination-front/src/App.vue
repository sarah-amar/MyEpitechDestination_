<template>
  <div id="app">

    <div class="container">
    <!-- Nav Bar appliqué sur toutes les pages - NAVBAR DE BASE -->
      <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand">My Epitech Destination Test </a>
      <a href="/contact" class="navbar-brand">Contact </a>
      <a href="/test" class="navbar-brand">Test </a>
      <a href="/navtest" class="navbar-brand">Nav </a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" /> Accueil 
            </router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">Utilisateur</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> S'enregistrer
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Se connecter
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> Se déconnecter
          </a>
        </li>
      </div>
      </nav>  -->
<!-- ----------------------NAVBAR--------------------------------- -->
  <Header />
      <!-- <div class="navbar">
        <h1>MY EPITECH DESTINATION</h1>
        <img src="../assets/contact2.jpg" alt="" width="60" height="60" /> !
      </div>

      <ul class="nav justify-content-center">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">ACCUEIL</a>
        </li>

        <li class="nav-item">
        <a class="nav-link" href="#">DESTINATION</a>
        </li>
        
        <li class="nav-item">
        <a class="nav-link" href="#">CONTACT</a>
        </li>
      </ul> -->
<!-- ----------------------------COMPONENTS-------------------------------------- -->
  <router-view />
<!-- ----------------------------FOOTER-------------------------------------- -->
<Footer />
      <!-- <footer class="page-footer font-small indigo">

        <div class="container">

          <div class="row text-center d-flex justify-content-center pt-5 mb-3">

            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase font-weight-bold">
                <a href="#!">Contact</a>
              </h6>
          </div>

          <div class="col-md-2 mb-3">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!">Mentions Legales</a>
            </h6>
          </div>

          <div class="col-md-2 mb-3">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!">Cookies</a>
            </h6>
          </div>

          <div class="col-md-2 mb-3">
            <a href="#!">Politique de Confidentialité</a>
          </div>

          <div class="col-md-2 mb-3">
            <a href="#!">Contact</a>
          </div>

        </div>

        <hr class="rgba-white-light" style="margin: 0 15%" />

        <div class="row d-flex text-center justify-content-center mb-md-0 mb-4"></div>

<hr class="clearfix d-md-none rgba-white-light" style="margin: 10% 15% 5%"
/>

<div class="row pb-3">

<div class="col-md-12">
<div class="mb-5 flex-center"></div>
</div>
</div>

</div>



<div class="footer-copyright text-center py-3">
Copyright © 2021 by My destination Epitech
</div>

</footer> -->
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style>
body{
  font-family: 'Lato';
  
}

/* .container{
  background-color: red;;
} */
</style>