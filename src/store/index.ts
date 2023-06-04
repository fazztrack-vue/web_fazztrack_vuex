import { createStore } from "vuex"

import minicampModule from './modules/minicamp'
import userModule from "./modules/user"
import vidioModul from './modules/vidio'
import auth from './modules/auth'

const store = createStore({
  modules: {
    vidio: vidioModul,
    minicamp : minicampModule,
    auth: auth,
    user: userModule
  }
})

export default store