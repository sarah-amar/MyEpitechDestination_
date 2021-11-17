import { createStore } from "vuex";
import { auth } from "./auth.module";

const store = createStore({
  state: {
    navigation: [
      {
        title: "Destinations",
        open: true,
        subnav: [
          {
            title: "Continent",
            open: false,
            subnav: [
              { title: "Asie de l'est"},
              { title: "Océanie"},
              { title: "Europe"},
              { title: "Afrique"},
              { title: "Amérique du Nord"},
              { title: "Amérique du Sud"},
            ]
          },
        ]
      },
    
    ]
  },
  getters: {
    navigation: state => {
      return state.navigation;
    }
  },
  modules: {
    auth,
  },
});

export default store;

