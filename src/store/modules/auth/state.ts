import { IVidioState } from "./interface"
import { IVidio } from "../../../interfaces/IVidio"


const state = (): IVidioState => ({
    list: {
        isLoading: false,
        data: [] as IVidio[],
        isError: false,
        errMessage: ""
    },
    detail: {
        isLoading: false,
        data: null,
        isError: false,
        errMessage: ""
    }
})

export default state