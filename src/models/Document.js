import api from './ApiConsts.js';
import axios from 'axios';

const model_uri = "documents/"

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

const create = async (media, params, callback, onError) => {
    const body = new FormData();
    body.append("file", media);
    body.append("name", params.name);
    body.append("notes", params.notes);
    body.append("project_id", params.project_id);
    return await axios
      .post(api.uri + "documents/", body, {
        onUploadProgress: (progressEvent) => callback(progressEvent, media),
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return onError(error);
      });
  };

const create_list = async (payload) => {
    return new Promise(async (resolve, reject) => {
        resolve(axios.post(`${api.uri}${model_uri}`,payload));
    });
}

const update = async (id, payload) => {
    return new Promise(async (resolve, reject) => {
        resolve(axios.patch(`${api.uri}${model_uri}${id}`,payload));
    });
}


const destroy = async (id) => {
    return new Promise(async (resolve, reject) => {
        resolve(axios.delete(`${api.uri}${model_uri}${id}`));
    });
}

export default { 
    show,
    list,
    create,
    update,
    destroy,
}