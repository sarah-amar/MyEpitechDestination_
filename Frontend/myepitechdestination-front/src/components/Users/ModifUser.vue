<template>
   <div>
        <h4 class="text-center mt-20">
            <small>
            <button class="btn btn-success" v-on:click="navigate()"> Retourner au profil </button>
            </small>
        </h4>
        <div class="col-md-12 form-wrapper">
            <h2> Editer le profil </h2>
            <form id="create-post-form" @submit.prevent="edituser(id)">
                <div class="form-group col-md-12">
                    <label for="title"> Nom </label>
                    <input type="text" id="nom" v-model="user.nom" name="title" class="form-control" placeholder="Entrer un nom">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Prénom </label>
                    <input type="text" id="prénom" v-model="user.prénom" name="title" class="form-control" placeholder="Entrer un prénom">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Email </label>
                    <input type="text" id="email" v-model="user.email" name="title" class="form-control" placeholder="Entrer un email">
                </div>           
                <div class="form-group col-md-4 pull-right">
                    <button class="btn btn-success" type="submit"> Editez votre profil </button>
                </div>           
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
export default {
    
  name: 'ModifUser',
  data() {
    return {
      id: 0,
      user: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getuser(this.id);
  },
  methods: {
    edituser(id) {
      let userData = {
        nom: this.user.nom,
        prénom: this.user.prénom,
        email: this.user.email,
      };
      axios
        .put(
          'http://localhost:8080/api'+'/users/'+ id, userData
        )
        .then(data => {
          router.push({ name: "home"}),
          console.log(data)
        });
    },
    getuser(id) {
      axios
        .get('http://localhost:8080/api'+'/users/'+ id)
        .then(data => (this.user = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>