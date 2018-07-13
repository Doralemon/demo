import axios from 'axios';

let base = '';
let domain = document.domain;
if (domain.indexOf('web.kandaovr.com') > -1) {
    base = 'https://cms.kandaovr.com/cms/v1/';
} else if ((domain.indexOf('localhost') > -1 || domain.indexOf('192.168.0.21') > -1 || domain.indexOf('cms2.kandao.tech') > -1)) {
    base = 'http://cms-test.kandao.tech/cms/v1/';
} else {
    base = 'http://120.76.97.66:8900/cms/v1/';
}

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = (params, token) => {
    return axios.get(`${base}/user/list`, {
        headers: {
            'Authorization': token,
        }
    }, { params: params });
};

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };