<template>
   <div>
      <h4 class="text-center mt-20">
            <small>
            <button class="btn btn-success" v-on:click="navigate()"> Profil </button>
            </small>
      </h4>
        <div class="col-md-12 form-wrapper">
            <h2> Créez un article </h2>
            <form id="create-post-form" @submit.prevent="createArticle">
               <div class="form-group col-md-12">
                    <label for="title"> Auteur </label>
                    <input type="text" id="auteur" v-model="auteur" name="title" class="form-control" placeholder="email">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Titre </label>
                    <input type="text" id="titre" v-model="titre" name="title" class="form-control" placeholder="Un titre">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Description </label>
                    <input type="text" id="description" v-model="description" name="title" class="form-control" placeholder="Une description">
                </div>
                <div class="form-group col-md-12">
                  <select v-model="universite">
                    <option v-for="universite in universites.data" :key="universite.id" :value="{id: universite.id, text: universite.nom}">
                      {{ universite.nom }}
                      {{ universite.id }}
                    </option>
                  </select><br />
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Upload une image </label><br/>
                    <input type="file" name="image" class="form-control-file" id="image" @change="uploadImage">
                 </div>              
                <div class="form-group col-md-4 pull-right">
                    <button class="btn btn-success" type="submit"> Créez un article </button>
                </div>           
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
export default {
    name:"CreateArticle",
  data() {
    return {
      auteur: "",
      titre: "",
      description:"",
      image: "",
      universites: []
    };
  },
  created() {
    this. getAllUniversite();
  },
  methods: {
    uploadImage(event){
      this.image = event.target.files[0]
    },
    createArticle(){
      let formData = new FormData();

    formData.append("image", this.image);
    formData.append("auteur", this.auteur);
    formData.append("titre", this.titre);
    formData.append("description", this.description);
    formData.append("universiteId", this.universite.id);
    console.log(this.universite.id);
    axios.post('http://localhost:8080/api/articles', formData)
      .then((res) => {
        router.push({ name: "CrudArticles" });
          console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    getAllUniversite() {
      axios.get("http://localhost:8080/api/universite").then((resp) => {
        this.universites = resp;
        console.log(this.universites);
      });
    },
    navigate() {
      router.go(-1);
    }
  }
}
</script>