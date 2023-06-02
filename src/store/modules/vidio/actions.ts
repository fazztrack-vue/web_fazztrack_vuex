import axios from 'axios'
import { IVidioState } from './interface';


const token = localStorage.getItem('token')
const tempToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImNyZWF0ZWRfYXQiOiIyMD" +
    "IzLTA1LTI2VDA1OjU4OjI0LjI0ODI1KzAwOjAwIiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInBh" +
    "c3N3b3JkIjoiJDJiJDEwJGRaeXJuYUQyS0lrbm5zZ2p4RnRkb082a2p5SHYzSXo1ZmNFMjZKM3huNC" +
    "9yOVJ5S1prTkRXIiwiaWF0IjoxNjg1NDI2Mzc5fQ.sETJEdNnlF7RuucM3aszO7VE_SsSBkOuY8wfU" +
    "VLp3qU";

const actions = {
    async getListVidios(contex: any) {
        contex.commit('GET_LIST_VIDIOS_PENDING')
        try {
            const response = await axios.get(`https://fazz-track-sample-api.vercel.app/video`, {
                headers: {
                    Authorization: token ? token : tempToken
                }
            })
            const payload = {
                data: response.data
            }
            contex.commit('GET_LIST_VIDIOS_FULFILLED', payload)
        } catch (error: any) {
            const payload = {
                message: error.message
            }
            contex.commit('GET_LIST_VIDIOS_REJECTED', payload)
        }
    },
    async getVidioDetail(contex: any, id: number) {
        contex.commit('GET_DETAIL_VIDIO_PENDING')
        return new Promise(async (resolve, reject) => {
            axios
                .get(`https://fazz-track-sample-api.vercel.app/video/${id}`, {
                    headers: {
                        Authorization: token
                    }
                })
                .then((res) => {
                    resolve(res.data)
                    const payload = {
                        data: res.data
                    }
                    contex.commit('GET_DETAIL_VIDIO_FULFILLED', payload)

                })
                .catch((err) => {
                    reject(err.message)
                    const payload = {
                        message: err.message
                    }
                    contex.commit('GET_DETAIL_VIDIO_REJECTED', payload)
                })
        })
    },
    async editVidio(_contex: any, data: { id: number, body: IVidioState }) {
        console.log("data", data.id);
        return new Promise(async (resolve, reject) => {
            axios
                .put(`https://fazz-track-sample-api.vercel.app/video/${data.id}`, data.body, {
                    headers: {
                        Authorization: token
                    }
                })
                .then((res) => {
                    resolve(res.data)

                })
                .catch((err: unknown) => {
                    if (err instanceof Error) {
                        reject(err)
                    }
                })
        })
    },
    async postVidio(_contex: any, body: IVidioState) {
        return new Promise(async (resolve, reject) => {
            axios
                .post(`https://fazz-track-sample-api.vercel.app/video`, body, {
                    headers: {
                        Authorization: token
                    }
                })
                .then((res) => {
                    resolve(res.data)

                })
                .catch((err: unknown) => {
                    if (err instanceof Error) {
                        reject(err)
                    }
                })
        })
    },
    async deleteVidio(_contex: any, id: number) {

        return new Promise(async (resolve, reject) => {
            axios
                .delete(`https://fazz-track-sample-api.vercel.app/video/${id}`, {
                    headers: {
                        Authorization: token
                    }
                })
                .then((res) => {
                    resolve(res.data)

                })
                .catch((err: unknown) => {
                    if (err instanceof Error) {
                        reject(err)
                    }
                })
        })
    }
}


export default actions