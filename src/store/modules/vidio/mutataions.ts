import { IVidio } from "../../../interfaces/IVidio"
import { IPayload } from "./interface"
import { IVidioState } from "./interface"

const mutations = {

    GET_LIST_VIDIOS_PENDING(state: IVidioState) {
        state.list.isLoading = true
    },
    GET_LIST_VIDIOS_FULFILLED(state: IVidioState, payload: IPayload) {
        state.list.isLoading = false
        state.list.data = payload.data
    },
    GET_LIST_VIDIOS_REJECTED(state: IVidioState, payload: IPayload) {
        state.list.isLoading = false
        state.list.isError = true
        state.list.errMessage = payload.message
    },
    GET_DETAIL_VIDIO_PENDING(state: IVidioState) {
        state.detail.isLoading = true
    },
    GET_DETAIL_VIDIO_FULFILLED(state: IVidioState, payload: IVidio) {
        state.detail.isLoading = false
        state.detail.data = payload

    },
    GET_DETAIL_VIDIO_REJECTED(state: IVidioState, payload: IPayload) {
        state.detail.isLoading = false
        state.detail.isError = true
        state.detail.errMessage = payload.message
        console.log("errr", payload.message);

    }
}

export default mutations