<template>
    <div class="container-fluid">
      <div class="text-center">
        <router-link to="/createUtilisateurs">Créer un nouvel utilisateur</router-link> |
        <router-link to ="/admin">Retourner au panel admin</router-link>
      </div><br/>
        <h1>Liste des Utilisateurs</h1>
       <div v-if="users.length === 0">
            <h2> Pas d'utilisateur trouvé pour le moment </h2>
        </div>
      </div>
        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prénom</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Created at</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.nom }}</td>
                  <td>{{ user.prénom }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user["roles"][0]["nom"] }}</td>
                  <td>{{ user.createdAt }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group" style="margin-bottom: 20px;">
                        <router-link :to="{name: 'EditUtilisateurs', params: {id: user.id}}" class="btn btn-sm btn-outline-secondary">Editer l'utilisateur</router-link>
                        <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteuser(user.id)">Supprimer l'utilisateur</button>
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
    name : "CrudUtilisateurs",
  data() {
    return {
      users: {},
    };
  },
  created() {
    this.fetchusers();
  },
  methods: {
    fetchusers() {
      axios
        .get('http://localhost:8080/api/users')
        .then(data => (console.log(data),this.users = data.data));
        
    },
    deleteuser(id) {
      if(confirm("Etes-vous sûr de vouloir supprimer cet utilisateur ?")){
        axios.delete('http://localhost:8080/api/users/'+ id,)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
      }
    }
  }
};
</script>