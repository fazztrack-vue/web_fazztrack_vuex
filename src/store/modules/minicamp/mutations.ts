import IDataMinicamp from "../../../interfaces/IMinicamp"
import IStateMinicamp from "./inteface"

export default {
  GET_MINICAMPS_PENDING(state: IStateMinicamp){
    state.list.isLoading = true
  },
  GET_MINICAMPS_FULLFILLED(state: IStateMinicamp, payload : IDataMinicamp[]){
    state.list.isLoading = false
    state.list.data = payload
  },
  GET_MINICAMPS_REJECTED(state: IStateMinicamp, payload : string){
    state.list.isLoading = false
    state.list.isError = true
    state.list.isMessage = payload
  },
  GET_DETAIL_MINICAMP_PENDING(state: IStateMinicamp){
    state.detail.isLoading = true
  },
  GET_DETAIL_MINICAMP_FULLFILLED(state: IStateMinicamp, payload : IDataMinicamp){
    state.detail.isLoading = false
    state.detail.data = payload
  },
  GET_DETAIL_MINICAMP_REJECTED(state: IStateMinicamp, payload : string){
    state.detail.isLoading = false
    state.detail.isError = true
    state.detail.isMessage = payload
  },
}