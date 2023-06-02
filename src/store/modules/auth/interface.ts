import { IVidio } from "../../../interfaces/IVidio";
export interface IVidioState {
    list: {
        isLoading: boolean,
        data: IVidio[],
        isError: boolean,
        errMessage: string
    },
    detail: {
        isLoading: boolean,
        data: IVidio | null,
        isError: boolean,
        errMessage: string
    }
}
