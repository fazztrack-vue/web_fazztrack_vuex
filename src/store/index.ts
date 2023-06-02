import { createStore } from 'vuex'
import vidioModul from './modules/vidio'
import auth from './modules/auth'


const store = createStore({
  modules: {
    vidio: vidioModul,
    auth: auth
  }
})

export default store