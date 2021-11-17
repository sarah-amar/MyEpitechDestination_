<template>
  <div class="container">
    <header>
      <h3>
       Bonjour  <strong>{{currentUser.prénom}}</strong> !
      </h3>
    </header>
    <!-- <p>
    </header><br/>
    <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p> -->
    <p>
      <strong>Vous êtes connecté en tant que :</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul>

    
    <div class="logout">
      <a class="nav-link" @click.prevent="logOut">
      <button><font-awesome-icon icon="sign-out-alt" /> Se déconnecter</button>
    </a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    } 
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>

.container{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 30px 10px;
  border-radius: 15px;
  box-shadow: 0 10px 50px -10px #d6d6d6;
}

h3{
  font-family: 'Lato';
  font-size: 2.3em;
  text-align: center;
}

.logout{
  text-align: center;
}

.logout button{
    width: 190px;
    height: 50px;
    border-radius: 8px;
    border: none;
    background-color: #85c4af;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
    outline: none;
}

.logout button a{
    text-decoration: none;
    color: #ffffff;
    font-size: 19px;
}

.logout button:hover{
  border: 2px solid #85c4af;
  background-color: transparent;
  color: #85c4af;
}

</style>