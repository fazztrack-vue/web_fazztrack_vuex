import axios, { AxiosResponse } from "axios";

export default {
  async getDetailUser(context:any, token : string){
    context.commit("GET_DETAIL_USER_PENDING");
    try {
      const response : AxiosResponse = await axios.get(`https://fazz-track-sample-api.vercel.app/profile`, {
        headers: { Authorization:  token }
      })    
      const payload = response.data.data
      context.commit("GET_DETAIL_USER_FULLFILLED" , payload)
    } catch (error: any) {
      const payload = error.message
      context.commit("GET_DETAIL_USER_REJECTED", payload)
    }
  },
}