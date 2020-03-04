import Vuex from 'vuex';
import axios from 'axios';

const store = () => new Vuex.Store({

  state: {
      isAuthorized: false,
      isRegistered: false
  },
  mutations: {
    authed (state) {
        console.log("authed");
        axios.post('/api/AuthComplete');
        state.isAuthorized = true;
    },
    registered (state) {
      console.log("registered");
      axios.post('/api/register');
      state.isRegistered = true;
    }
  },
  actions: {
    nuxtServerInit ({ commit }, { req }) {
        // console.log(req.session.isAuthorized);
        console.log(req.session);
        if (req.session.isRegistered) {
            commit('authed', true)
            commit('registered', true)
        } else if (req.session.isAuthorized) {
            commit('authed', true) 
        }
    }
  }
})

export default store