import api from './ApiConsts.js';
import axios from 'axios';

const model_uri = "users/"



const sign_in = async (payload) => {
    return new Promise(async (resolve, reject) => {
        resolve(axios.post(`${api.uri}/login_sessions`,payload));
    });
}

const sign_up = async (payload) => {
    return new Promise(async (resolve, reject) => {
        resolve(axios.post(`${api.uri}${model_uri}`,payload));
    });
}


export default { 
    sign_in,
    sign_up,
}