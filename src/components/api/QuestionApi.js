import ApiClient from "./ApiClient"

export const createQuestion = (uuid, question) => {
    ApiClient.post(`/question/${uuid}`, question);
}