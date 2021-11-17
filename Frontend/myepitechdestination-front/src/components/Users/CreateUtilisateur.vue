<template>
   <div>
        <div class="col-md-12 form-wrapper">
            <h2> Créez un utilisateur </h2>
            <form id="create-post-form" @submit.prevent="createCustomer()">
                <div class="form-group col-md-12">
                    <label for="title"> Nom </label>
                    <input type="text" id="nom" v-model="nom" name="title" class="form-control" placeholder="Entrez un nom">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Prénom </label>
                    <input type="text" id="prénom" v-model="prénom" name="title" class="form-control" placeholder="Entrez un prénom">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Email </label>
                    <input type="text" id="email" v-model="email" name="title" class="form-control" placeholder="Entrez un email">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Mot de passe </label>
                    <input type="password" id="mot_de_passe" v-model="mot_de_passe" name="title" class="form-control" placeholder="Entrez un mot de passe">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Confirmez le mot de passe </label>
                    <input type="password" id="confirm_mot_de_passe" v-model="confirm_mot_de_passe" name="title" class="form-control" placeholder="Confirmez votre mot de passe">
                </div>
                
                <div class="form-group col-md-4 pull-right">
                    <button class="btn btn-success" type="submit"> Créez un utilisateur </button>
                </div>           
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
export default {
    name:"CreateUtilisateur",
  data() {
    return {
      nom: "",
      prénom:"",
      email: "",
      mot_de_passe: ""
    };
  },
  methods: {
    createCustomer() {
      let customerData = {
        nom: this.nom,
        prénom: this.prénom,
        email: this.email,
        mot_de_passe: this.mot_de_passe
      };
      this.__submitToServer(customerData);
    },
    
    __submitToServer(data) {
      axios.post('http://localhost:8080/api/auth/signup', data).then(data => {
        router.push({ name: "CrudUtilisateurs" });
        return data
      });
    }
  }
};
</script>