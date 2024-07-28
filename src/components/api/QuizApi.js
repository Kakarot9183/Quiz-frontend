import ApiClient from "./ApiClient"

export const createQuizApi = (name, description) => {
    return ApiClient.post('/quiz', {name, description}); 
}

export const getQuizByID = (id) => {
    return ApiClient.get(`/quiz/${id}`)
}

export const getQuizzes = () => {
    return ApiClient.get('/quiz');
}