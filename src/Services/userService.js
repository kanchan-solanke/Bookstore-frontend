import axios from 'axios'

export const signUp = (obj) => {
    let response = axios.post("http://localhost:5000/api/v1/user", obj)
    console.log(response)
    return response
}

export const signIn = (obj) => {
    let response = axios.post("http://localhost:5000/api/v1/user/login", obj)
    console.log(response)
    return response
}