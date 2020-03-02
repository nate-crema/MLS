import Vuex from 'vuex';
import axios from 'axios';

const store = () => new Vuex.Store({

  state: {
      isAuthorized: false
  },
  mutations: {
    authed (state) {
        console.log("authed");
        axios.post('/api/AuthComplete');
        state.isAuthorized = true;
    }
  },
  actions: {
    nuxtServerInit ({ commit }, { req }) {
        console.log(req.session.isAuthorized);
        if (req.session.isAuthorized) {
            commit('authed', true)
        }
    }
  }
})

export default store