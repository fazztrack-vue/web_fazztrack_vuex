const mutations = {

    GET_LIST_VIDIOS_PENDING(state: any) {
        state.list.isLoading = true
    },
    GET_LIST_VIDIOS_FULFILLED(state: any, payload: any) {
        state.list.isLoading = false,
            state.list.data = payload.data
    },
    GET_LIST_VIDIOS_REJECTED(state: any, payload: any) {
        state.list.isLoading = false,
            state.list.isError = true,
            state.list.errMessage = payload.message
    },
    GET_DETAIL_VIDIO_PENDING(state: any) {
        state.detail.isLoading = true
    },
    GET_DETAIL_VIDIO_FULFILLED(state: any, payload: any) {
        state.detail.isLoading = false,
            state.detail.data = payload.data
    },
    GET_DETAIL_VIDIO_REJECTED(state: any, payload: any) {
        state.detail.isLoading = false,
            state.detail.isError = true,
            state.detail.errMessage = payload.message
    }
}

export default mutations