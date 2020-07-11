import Vuex from 'vuex';
import axios from 'axios';

const store = () => new Vuex.Store({

  state: {
    userInfo: {},
    login: {},
    songPlayer: {
      songId: "",
      status: false
    }
  },
  mutations: {
    playSong(state, { songId }) {
      state.songPlayer.songId = songId;
    },
    songStat(state, { stat }) {
      state.songPlayer.status = stat;
    },
    authed (state, { pn }) {
      console.log("commitx");
      state.userInfo.pn = pn;
    },
    registered (state, { pn, id }) {
      state.userInfo = {
        pn,
        id
      }
    },
    userInfo (state, userinfo) {
      console.log("userinfo set");
      state.userInfo = userinfo;
    },
    userInfoAdd (state, data) {
      console.log(data);
      Object.keys(data).forEach((element, index) => {
        state.userInfo[element] = Object.values(data)[index]
      })
    },
  },
  actions: {
    nuxtServerInit ({ commit, dispatch }, { req }) {
        // console.log(req.session.isAuthorized);
        console.log(req.session);
        if (req.session.userInfo) {
          commit('userInfo', req.session.userInfo)
        }
    },
    authed (state, { pn }) {
      return new Promise((resolve, reject) => {
        console.log("authed");
        console.log(pn);
        axios.post('/api/authed', {pn})
        .then((resAuth) => {
          console.log(resAuth);
          this.commit("authed", {pn});
          resolve();
        })
        .catch((e) => {
          console.error(e);
          reject(e);
        });
      })
    },
    registered (state, { passwd }) {
      return new Promise((resolve, reject) => {
        console.log("registered");
        axios.post('/api/register', { passwd })
        .then((response) => {
          this.commit("registered", {
            pn: response.data.pn,
            id: response.data.id
          })
          console.log(state);
          resolve();
        })
        .catch((e) => {
          console.log("ERROR!");
          console.error(e);
          reject(e);
        });
      })
    },
    userInfo (state, userinfo) {
      console.log("userinfo set");
      // const pn = state.userInfo.pn;
      state.userInfo = userinfo;
      // state.userInfo.pn = pn;
      // axios.post('/api/logined', state.userInfo);
    },
    userInfoAdd (state, dataO) {
      return new Promise((resolve, reject) => {
        console.log("store: userInfoAdd");
        // console.log(dataO);
        Object.keys(dataO).forEach((element, index) => {
          state[element] = Object.values(dataO)[index]
        })
        axios.post('/api/sess/userInfoAdd', {dataO})
        .then(({data}) => {
          console.log(data);
          this.commit("userInfoAdd", dataO)
          resolve();
        })
        .catch(function(reason) {
          console.error(reason);
          reject(reason);
        })
      })
    },

    // login
    async login(state, { userInfo }) {
      try { 
        const { pn, SndBnyCode } = userInfo;
        const result = await axios.post("/api/login", {
          pn,
          SndBnyCode,
        });
        if (result.data) {
          
        }
      } catch (e) {
        console.error("ERR: Vuex Store");
        console.error(e);
      }
    },
    // playSong - use when songPlayer play song
    playSong(state, { songId }) {
      return new Promise((resolve, reject) => {
        this.commit("playSong", { songId });
        resolve(true);
      })
    },
    songStat(state, { stat }) {
      return new Promise((resolve, reject) => {
        this.commit("songStat", { stat });
        resolve(true);
      })
    }
  }
})

export default store