import IDataUser from "../../../interfaces/IUser"

interface IStateUser {
  detail:{
    isLoading : boolean
    data: IDataUser | null
    isError: boolean
    isMessage: string
  }
}

export default IStateUser