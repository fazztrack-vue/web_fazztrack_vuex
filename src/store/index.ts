import { createStore } from "vuex"

import minicampModule from './modules/minicamp/index'
import userModule from "./modules/user"

const store = createStore({
  modules: {
    minicamp : minicampModule,
    user: userModule
  }
})

export default store