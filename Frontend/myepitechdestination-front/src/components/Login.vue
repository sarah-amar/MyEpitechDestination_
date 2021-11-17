<template>
  <div class="container">
    <div class="row">
      <img
        id="profile-img"
        class="profile-img-card"
      />

      <div class="col-md d-none d-lg-block">
        <img src="../assets/image-register-write2.jpg" alt="register illustration" weight="auto">
      </div>

      <div class="col-md" id="container2"> 
        
        <p class="register">Vous n'êtes pas membre ?  <a href="/register"><button>S'inscrire</button></a></p>
        <div class="info">
          <h2>Connectez-vous</h2>
        
        <Form @submit="handleLogin" :validation-schema="schema">
          
          <div class="form-group">
            <Field name="email" type="text" placeholder="Email" class="form-control" />
            <ErrorMessage name="email" class="error-feedback" />
          </div>

          <div class="form-group">
            <Field name="mot_de_passe" type="password"  placeholder="Mot de passe" class="form-control" />
            <ErrorMessage name="mot_de_passe" class="error-feedback" />
          </div>

          <div class="button">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Login</span>
            </button>
          </div>

          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>

        </Form>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Un email est nécessaire!"),
      mot_de_passe: yup.string().required("Un mot de passe est nécessaire!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style scoped>
* {
    font-family: Lato;
     
} 

body{ background-color: red;}

.container{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 30px 10px;
  border-radius: 15px;
  box-shadow: 0 10px 50px -10px #d6d6d6;
}

img{
 width: 100%;
height: auto;
}

.register{
    display: block;
    float: right;
    padding-right: 10px;
}

.register button{
    width: 100px;
    height: 30px;
    border-radius: 8px;
    border: 2px solid #85c4af;
    background-color: transparent;
    color: #85c4af;
    outline: none;
}

.register a{
    text-decoration: none;
    font-family: 'Lato';
    font-size: 0.9em;
    color: #85c4af;
}

.register button:hover{
    width: 100px;
    height: 30px;
    border-radius: 8px;
    border: none 2px solid ;
    background-color: #85c4af;
    color: white;
    outline: none;
}

#container2{
  width: 450px;
  padding: 5px;
}

.info h2{
    font-family:'Bebas Neue', cursive;
    font-size: 2.2em;
    text-align: center;
    margin: 50px 0;
}

.info input{
    width: 87%;
    margin: 10px 0;
    padding: 10px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-bottom: 2px solid #e4e4ec;
    border-radius: 0;
    transition: 0.2s;
    margin-bottom: 60px;
}

.info input:hover{
    border-bottom: 2px solid #85c4af;
}

.button{
  text-align: center;
}

.info button {
    width: 190px;
    height: 50px;
    border-radius: 8px;
    border: none;
    background-color: #85c4af;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
    outline: none;
    margin: 0 auto;
}

.info button a{
    text-decoration: none;
    color: #ffffff;
    font-size: 19px;
}

.info button:hover{
  border: 2px solid #85c4af;
  background-color: transparent;
  color: #85c4af;
}

</style>