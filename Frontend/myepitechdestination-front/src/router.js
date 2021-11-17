import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Contact from "./components/Contact.vue";
import Destination from "./components/Destination.vue";
import NavTest from "./components/NavTest.vue";
import CrudUtilisateurs from "./components/Users/CrudUtilisateurs.vue";
import EditUtilisateurs from "./components/Users/EditUsers.vue";
import CreateUtilisateurs from "./components/Users/CreateUtilisateur.vue";
import ModifUser from './components/Users/ModifUser.vue';
import CrudArticles from './components/Articles/CrudArticles.vue';
import EditArticles from './components/Articles/EditArticles.vue';
import CreateArticle from './components/Articles/CreateArticle.vue';
import CrudCommentaires from './components/Commentaires/CrudCommentaires.vue';
import EditCommentaire from './components/Commentaires/EditCommentaire.vue'


const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  
  {
    path: "/home",
    component: Home,
  },
  
  {
    path: "/navtest",
    component: NavTest,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/destination",
    component: Destination,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    component: BoardAdmin,
  },
  {
    path: "/user",
    name: "user",
    component: BoardUser,
  },
  {
    path: "/crudUtilisateurs",
    name: "CrudUtilisateurs",
    component: CrudUtilisateurs,
  },
  {
    path: '/editUtilisateurs',
    name: 'EditUtilisateurs',
    component: EditUtilisateurs
  },
  {
    path: '/createUtilisateurs',
    name: 'CreateUtilisateurs',
    component: CreateUtilisateurs
  },
  {
    path:'/modifuser',
    name : 'ModifUser',
    component : ModifUser
  },
  {
    path: '/crudArticles',
    name: 'CrudArticles',
    component : CrudArticles
  },
  {
    path: '/editArticles',
    name: 'EditArticles',
    component: EditArticles
  },
  {
    path: '/createarticle',
    name: 'CreateArticle',
    component: CreateArticle  
  },
  {
    path: '/crudcommentaires',
    name: 'CrudCommentaires',
    component: CrudCommentaires
  },
  {
    path: '/editcommentaire',
    name: 'EditCommentaire',
    component: EditCommentaire
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });

export default router;