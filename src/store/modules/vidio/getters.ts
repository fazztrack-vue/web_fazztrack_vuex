import IVidioState from "./interface"

const getters = {
    getList(state: IVidioState) {
        return state.list
    },
    getDetail(state: IVidioState) {
        return state.detail
    }
}

export default getters