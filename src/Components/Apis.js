import axios from 'axios'
const url = 'http://localhost:4001/joehub'

const User_url = {
    Signup: `${url}/user/signup`,
    login: `${url}/user/login`
}

export const Apis  = {
    user: User_url,
}

export const Posturl = async (endpoint, data) => {
    const res = await axios.post(endpoint, data)
    return res.data
}
export const Geturl = async (endpoint) => {
    const res = await axios.post(endpoint)
    return res.data
}