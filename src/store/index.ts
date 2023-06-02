import { createStore } from "vuex"

import minicampModule from './modules/minicamp/index'
import vidioModul from './modules/vidio'
import auth from './modules/auth'

const store = createStore({
  modules: {
    vidio: vidioModul,
    minicamp : minicampModule,
    auth: auth
  }
})

export default store