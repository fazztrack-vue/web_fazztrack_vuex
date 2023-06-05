import axios from 'axios'
import { IVidioState } from './interface';
import { Context } from "../../../interfaces/IContext"


const token = localStorage.getItem('token')

const actions = {
    async getListVidios(contex: Context) {
        contex.commit('GET_LIST_VIDIOS_PENDING')
        return new Promise((resolve, reject) => {
            axios.get(`https://fazz-track-sample-api.vercel.app/video`, {
                headers: {
                    Authorization: token
                }
            }).then((res) => {
                resolve(res)
                const payload = {
                    data: res.data
                }
                contex.commit('GET_LIST_VIDIOS_FULFILLED', payload)
            }).catch((err: unknown) => {
                if (err instanceof Error) {
                    reject(err)
                    const payload = {
                        message: err.message
                    }
                    contex.commit('GET_LIST_VIDIOS_REJECTED', payload)
                }
            })
        })
    },
    async getVidioDetail(contex: Context, id: number) {
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
                .catch((err: unknown) => {
                    if (err instanceof Error) {
                        reject(err.message)
                        const payload = {
                            message: err.message
                        }
                        contex.commit('GET_DETAIL_VIDIO_REJECTED', payload)
                    }
                })
        })
    },
    async editVidio(_contex: Context, data: { id: number, body: IVidioState }) {
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
    async postVidio(_contex: Context, body: IVidioState) {
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
    async deleteVidio(_contex: Context, id: number) {

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