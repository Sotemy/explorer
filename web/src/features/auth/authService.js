import axios from "axios"

const API_URL = '/api/auth/'

// register user
const register = async (userData) => {
    const response = await axios.post(API_URL+'register', userData)


    if(!response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response
}

// register user
const login = async (userData) => {
    const response = await axios.post(API_URL+'login', userData)


    if(!response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response
}

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService;