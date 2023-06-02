import state from "./state"
import actions from './actions'
// import mutations from "./mutataions"

const auth = {
    namespaced: true,
    state,
    actions,
    mutations: {}
}

export default auth