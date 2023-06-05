import { IAuth } from "../../../interfaces/IAuth"
export interface IAuthState {
    detail: {
        isLoading: boolean,
        data: IAuth | null,
        isError: boolean,
        errMessage: string
    }
}
