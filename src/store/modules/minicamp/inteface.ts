import IDataMinicamp from "../../../interfaces/IMinicamp"

interface IStateMinicamp {
  list:{
    isLoading : boolean
    data: IDataMinicamp[]
    isError: boolean
    isMessage: string
  },
  detail:{
    isLoading : boolean
    data: IDataMinicamp | null
    isError: boolean
    isMessage: string
  }
}

export default IStateMinicamp