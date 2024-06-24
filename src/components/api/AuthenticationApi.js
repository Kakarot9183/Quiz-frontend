import ApiClient from "./ApiClient"

export const loginApi = (token) => {
    return ApiClient.get('/test', {
        headers : {Authorization : token}
    });
}

export const signUpApi = (username, password) => {
    return ApiClient.post('/sign-up', {username, password})
}