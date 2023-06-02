import IStateUser from "./inteface"

export default {
  getDetail(state: IStateUser){
    // console.log(state.detail, 'detail user')
    return state.detail
  },
}