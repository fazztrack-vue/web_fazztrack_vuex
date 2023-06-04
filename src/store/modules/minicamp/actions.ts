import axios, { AxiosResponse } from "axios";
import IDataMinicamp from "../../../interfaces/IMinicamp";

const tempToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImNyZWF0ZWRfYXQiOiIyMDIzLTA1LTI2VDA1OjU4OjI0LjI0ODI1KzAwOjAwIiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGRaeXJuYUQyS0lrbm5zZ2p4RnRkb082a2p5SHYzSXo1ZmNFMjZKM3huNC9yOVJ5S1prTkRXIiwiaWF0IjoxNjg1MTA0MzY2fQ.s8cgoCIfngy75U-VzF-SIP52u04qZ33b7myhpcwyUHI'
const config = {
  headers: { Authorization:  tempToken }
};

export default {
  async getListMinicamp(context:any){
    context.commit("GET_MINICAMPS_PENDING");
    try {
      const response : AxiosResponse = await axios.get('https://fazz-track-sample-api.vercel.app/minicamp', config)    
      const payload = response.data.data
      context.commit("GET_MINICAMPS_FULLFILLED" , payload)
    } catch (error: any) {
      const payload = error.message
      context.commit("GET_MINICAMPS_REJECTED", payload)
    }
  },
  async getDetailMinicamp(context:any, id : number){
    context.commit("GET_DETAIL_MINICAMP_PENDING");
    try {
      const response : AxiosResponse = await axios.get(`https://fazz-track-sample-api.vercel.app/minicamp/${id}`, config)    
      const payload = response.data
      context.commit("GET_DETAIL_MINICAMP_FULLFILLED" , payload)
    } catch (error: any) {
      const payload = error.message
      context.commit("GET_DETAIL_MINICAMP_REJECTED", payload)
    }
  },
  async insertDataMinicamp(_context:any, data : IDataMinicamp){
    return new Promise((resolve, reject)=>{
       axios.post('https://fazz-track-sample-api.vercel.app/minicamp',data, config).
       then((res) => {
        resolve(res.data)
       })
       .catch((error)=>{
        reject(error.message)
       })
    })
  },
  async updateDataMinicamp(_context:any, data : IDataMinicamp){
    return new Promise((resolve, reject)=>{
       axios.put(`https://fazz-track-sample-api.vercel.app/minicamp/${data.id}`,data, config).
       then((res) => {
        resolve(res.data)
       })
       .catch((error)=>{
        reject(error.message)
       })
    })
  },
  async deleteDataMinicamp(_context:any, id : number){
    return new Promise((resolve, reject)=>{
      axios.delete(`https://fazz-track-sample-api.vercel.app/minicamp/${id}`, config).
      then((res) => {
       resolve(res.data)
      })
      .catch((error)=>{
       reject(error.message)
      })
   })
  },
}