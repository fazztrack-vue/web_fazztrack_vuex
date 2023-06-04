import IStateMinicamp from "./inteface"

export default {
  getList(state: IStateMinicamp){
    console.log(state.list, 'state')
    return state.list
  },
  getDetail(state: IStateMinicamp){
    console.log(state.detail, 'detail')
    return state.detail
  },
  getListDisalurkan(state : IStateMinicamp){
    const dataMinicamps = state.list.data
    const dataFilter = dataMinicamps.filter(val => val.isWork === true)
    console.log(dataFilter)
    return dataFilter
  },
  getListTidakDisalurkan(state : IStateMinicamp){
    const dataMinicamps = state.list.data
    const dataFilter = dataMinicamps.filter(val => val.isWork === false)
    console.log(dataFilter)
    return dataFilter
  }
}