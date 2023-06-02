import state from "./state"
import actions from './actions'
import mutations from "./mutataions"
import getters from './getters'

const vidio = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

export default vidio