import axios from "axios"

import { _storeData } from "./store"

const API_URL="http://192.168.178.27:5000/api/auth"

const login = async (userData) => {
    const response = await axios.post(API_URL+'/login', userData)
    // console.log(response.data)


    if(response.data){
        _storeData('user', JSON.stringify(response.data))
        return response
    }

    console.log('Wrong creaditals')
    throw new Error('Wrong creaditals')
}

export default login;