import axios from 'axios'
import { IAuth } from '../../../interfaces/IAuth'


const actions = {
    async register(_contex: any, body: IAuth) {
        return new Promise(async (resolve, reject) => {
            axios.post(`https://fazz-track-sample-api.vercel.app/register`, body)
                .then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
        })
    },
    async login(_contex: any, body: IAuth) {
        return new Promise(async (resolve, reject) => {
            axios.post(`https://fazz-track-sample-api.vercel.app/login`, body)
                .then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
        })
    }
}


export default actions