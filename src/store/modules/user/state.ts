import IStateUser from "./inteface"

const state = () : IStateUser => ({
  detail:{
    isLoading : false,
    data: null,
    isError: false,
    isMessage: ''
  }
})

export default state