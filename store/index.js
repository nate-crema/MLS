import Vuex from 'vuex';
import axios from 'axios';

const store = () => new Vuex.Store({

  state: {
    userInfo: {},
    login: {},
    songPlayer: {
      songId: "",
      status: false,
      isOpen: false,
      playlist: {}
    },
    alertCont: {},
    search: {
      melon: {}
    },
    isSearching: false
  },
  getters: {
    getAlertCont: state => () => state.alertCont
  },
  mutations: {
    playSong(state, { songId }) {
      state.songPlayer.songId = songId;
    },
    songStat(state, { stat }) {
      state.songPlayer.status = stat;
    },
    playlist(state, { cont, data }) {
      state.songPlayer.playlist[cont] = data;
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
    logout (state) {
      state.userInfo = {};
    },
    cPOpen(state) {
      state.songPlayer.isOpen = !state.songPlayer.isOpen;
    },
    alertCont(state, cont) {
      state.alertCont = cont;
    },
    search(state, data) {
      state.search = data;
    }
  },
  actions: {
    nuxtServerInit ({ commit, dispatch }, { req }) {
        // console.log(req.session.isAuthorized);
        console.log(req.session);
        if (req.session.userInfo) {
          commit('userInfo', req.session.userInfo)
        }
        if (req.session.search) {
          commit('search', req.session.search)
        }
    },
    authed (state, { pn }) {
      return new Promise((resolve, reject) => {
        console.log("authed");
        console.log(pn);
        axios.post('/api/user/authed', {pn})
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
        axios.post('/api/user/register', { passwd })
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
      // axios.post('/api/user/logined', state.userInfo);
    },
    userInfoAdd (state, dataO) {
      return new Promise((resolve, reject) => {
        console.log("store: userInfoAdd");
        // console.log(dataO);
        Object.keys(dataO).forEach((element, index) => {
          state[element] = Object.values(dataO)[index]
        })
        axios.post('/api/user/sess/userInfoAdd', {dataO})
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
    search(state, searchKey) {
      const this_out = this;
      return new Promise((resolve, reject) => {
        console.log(`this_out.state.isSearching: ${this_out.state.isSearching}`)
        if (!this_out.state.userInfo.cusId) resolve(false);
        // else if (this_out.state.isSearching) resolve("busy!");
        else if (searchKey && searchKey != "" && searchKey != "undefined") {
          this_out.state.isSearching = true;
          axios.post('/api/search/searchQuery', {
          searchOption: "*",
          searchQuery: searchKey,
          cusId: this_out.state.userInfo.cusId
        })
          .then(({ data }) => {
            this_out.state.search = data;
            this_out.state.isSearching = false;
            this_out.state.search.searchKey = searchKey;
            resolve(data);
          })
          .catch((e) => {
            reject(e);
          })
        }
        else resolve(false);
      })
    },

    // login
    login(state, { pn, SndBnyCode }) {
      return new Promise((resolve, reject) => {
        try { 
          axios.post("/api/user/login", {
            pn,
            SndBnyCode,
            allNeed: true
          })
            .then(({ data }) => {
              console.log(data);
            if (data) {
              let setter = data;
              setter.salt = "";
              setter.tokenG = "";
              setter.enccode = "";
              setter.date = "";
              setter.refTokenG = "";
              setter.isUpdateable = "";
              // state.userInfo = data;
              this.commit("userInfo", setter);
              resolve(true);
            } else {
              resolve(false);
            }
          })
        } catch (e) {
          console.error("ERR: Vuex Store");
          console.error(e);
          reject(e);
        }
      })
    },
    logout(state) {
      try { 
        axios.post("/api/user/login");
        state.commit("logout", {});
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
    },
    cPOpen(state) { 
      this.commit("cPOpen");
    },
    playlist(state, { fnc, cont }) {
      return new Promise((resolve, reject) => {
        console.log("playlist: store");
        switch (fnc) {
          case "delete":
            let array = state.songPlayer.playlist;
            delete array[cont];
            console.log(JSON.stringify(array));
            state.songPlayer.playlist = array;
            resolve(state.songPlayer.playlist);
            break;
          case "push":
          default:
            axios.post("/api/player/getSongInfo", {
              songId: cont,
              reqService: "BASE_WEB_ARCHITEC_PLY_MINI_STB"
            })
              .then(({ data }) => {
                state.commit("playlist", { cont, data })
                // console.log(state);
                // console.log(state.songPlayer);
                resolve();
            })
            .catch((e) => {
              console.error(e);
              reject(e);
            })
            break;
        }
      })
    }
  }
})

export default store