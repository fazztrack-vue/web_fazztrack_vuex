import IDataMinicamp from "../../../interfaces/IMinicamp"
import IStateMinicamp from "./inteface"

const state = () : IStateMinicamp => ({
  list:{
    isLoading : false,
    data: [] as IDataMinicamp[],
    isError: false,
    isMessage: ''
  },
  detail:{
    isLoading : false,
    data: null,
    isError: false,
    isMessage: ''
  }
})

export default state