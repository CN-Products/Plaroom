  
import Vue from 'vue'
import Vuex from 'vuex'

import menu from './modules/menu/_store'
// import name from '../modules/name/_store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // name
    menu
  }
})