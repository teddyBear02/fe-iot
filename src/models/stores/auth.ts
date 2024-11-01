export type InitialAuthState = {
    loading : boolean,
    error: unknown | null | undefined
    user : any 
}

export type ResponseLogin = {
    accessToken : string,
    user : UserDataType
}

export type PayloadLogin = {
    email: string,
    password: string
}

export type PayloadSignUp = {

}

export type UserDataType = {
    name: string,
    email: string,
    phoneNumber: number | string | null
}