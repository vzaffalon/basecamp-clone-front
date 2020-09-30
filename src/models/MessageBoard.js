import api from './ApiConsts.js';
import axios from 'axios';

const model_uri = "message_boards/"

const show = async (id) => {
    return new Promise(async (resolve, reject) => {
        resolve(axios.get(`${api.uri}${model_uri}${id}`));
    });
}

const list = async (params) => {
    return new Promise(async (resolve, reject) => {
        resolve(axios.get(`${api.uri}${model_uri}`,{params: params}));
    });
}

const create = async (payload) => {
    return new Promise(async (resolve, reject) => {
        resolve(axios.post(`${api.uri}${model_uri}`,payload));
    });
}

const update = async (id,payload) => {
    return new Promise(async (resolve, reject) => {
        resolve(axios.patch(`${api.uri}${model_uri}${id}`,payload));
    });
}

export default { 
    show,
    list,
    create,
    update,
}