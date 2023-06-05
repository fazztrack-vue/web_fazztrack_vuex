import { IAuthState } from './interface';


const state = (): IAuthState => ({
    detail: {
        isLoading: false,
        data: null,
        isError: false,
        errMessage: ""
    }
})

export default state