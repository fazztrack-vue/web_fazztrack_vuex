import IDataMinicamp from "../../../interfaces/IMinicamp"

interface IStateMinicamp {
  list:{
    isLoading : boolean
    data: IDataMinicamp[]
    isError: boolean
    errMessage: string
  },
  detail:{
    isLoading : boolean
    data: IDataMinicamp | null
    isError: boolean
    errMessage: string
  }
}

export default IStateMinicamp