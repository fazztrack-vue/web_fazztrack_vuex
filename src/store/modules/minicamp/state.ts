import IDataMinicamp from "../../../interfaces/IMinicamp"
import IStateMinicamp from "./inteface"

const state = () : IStateMinicamp => ({
  list:{
    isLoading : false,
    data: [] as IDataMinicamp[],
    isError: false,
    errMessage: ''
  },
  detail:{
    isLoading : false,
    data: null,
    isError: false,
    errMessage: ''
  }
})

export default state