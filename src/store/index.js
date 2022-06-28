import { createStore } from "vuex";
import data from "../indexDB";

const loadData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 400);
  });
};

const store = createStore({
  actions: {
    async loadData() {
      try {
        const data = await loadData();
        console.log(data);
        this.commit("SET_DATA", data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.postDiscusData = data.postDiscusData;
      state.reactions = data.reactions;
      state.postData = data.postData;
      state.navbarData = data.navbarData;
    },
    ADD_REACTION(state, payload) {
      state.postData[payload.index - 1].reactionPost.id = payload.id;
      state.postData[payload.index - 1].reactionPost.isActive = true;
      console.log(state.postData[payload.index - 1].reactionPost);
      console.log(payload);
    },
  },
  state() {
    return {
      postDiscusData: [],
      reactions: [],
      postData: [],
      navbarData: [],
    };
  },
  getters: {
    postDiscusData(state) {
      return state.postDiscusData;
    },
    reactions(state) {
      return state.reactions;
    },
    postData(state) {
      return state.postData;
    },
    navbarData(state) {
      return state.navbarData;
    },
  },
});

export default store;
