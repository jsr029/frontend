import axios from 'axios'

const API_URL = 'http://localhost:27017/api/v1/user'

//Login User
const login = async (userData) => {
    const response = await axios.post(API_URL + '/login', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//Register User
const register = async (userData) => {
    const response = await axios.post(API_URL + '/signup', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService