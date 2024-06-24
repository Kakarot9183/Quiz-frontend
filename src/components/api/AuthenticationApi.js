import ApiClient from "./ApiClient"

export const loginApi = (token) => {
    return ApiClient.get('/user/login', {
        headers : {Authorization : `Basic  + ${token}`}
    });
}

export const signUpApi = (username, password) => {
    return ApiClient.post('/sign-up', {username, password})
}
