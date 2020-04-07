import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/modules/user";
import home from "@/store/modules/home";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    home
  }
})
