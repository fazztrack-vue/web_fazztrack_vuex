import { createStore } from "vuex"

import minicampModule from './modules/minicamp/index'

const store = createStore({
  modules: {
    minicamp : minicampModule
  }
})

export default store