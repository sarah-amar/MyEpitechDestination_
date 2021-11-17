<template>
    <div>
        <div class="navbar">
            <img src="../assets/logo-mydestinationepitech.png" class="logo" alt="">
            <nav>
                <ul>
                    <li v-if="showAdminBoard" class="nav-item">
                        <router-link to="/admin" class="nav-link"><img src="../assets/dashboard.png" alt="" width="30" height="30" /></router-link>
                    </li>

                    <li><a href="/login"><img src="../assets/user.svg" alt="" width="30" height="30" /> </a></li>

                </ul>
            </nav>
      </div>
    
        <div class="title">
            <h1>MY EPITECH DESTINATION</h1>
        </div>

      <ul class="nav justify-content-center">

          <li class="nav-item">
        <a class="nav-link" href="/">Accueil</a>
        </li>
        
        <li class="nav-item" v-for="(item, index) in navigation" :key="'item'+index">
        <a class="nav-link destination" href="/destination" @click="item.open = !item.open">{{item.title}}</a>
        <Dropdown v-if="item.subnav" :list="item"/>
        </li>
        
        <li class="nav-item">
        <a class="nav-link" href="/contact">CONTACT</a>
        </li>

        
      </ul>
      
    </div>
</template>


<script>
import Dropdown from './Dropdown'

export default {
    name: 'Header',
    computed: {
        navigation() {
            return this.$store.getters.navigation;
        },
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
    components: {
        Dropdown
    }
}
</script>

<style scoped>
*{
    font-family:'Bebas Neue', cursive;
}

.navbar {
    height: 12%;
    display: flex;
    align-items: center;
}

.logo{
    width: 50px;
    cursor: pointer;

}

nav{
    flex: 1;
    text-align: right;
}

nav ul li{
    list-style: none;
    display: inline-block;
    margin-left: 40px;
}


.title h1{
    display: block;
    text-align: center;
    font-size: 4.2em;

}

a{
    text-decoration: none;
    color: black;
    font-size: 2.6em;
}

a:hover{
    color: #85C4AF;
}

</style>