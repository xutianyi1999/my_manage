import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: 'http://127.0.0.1:8888/api/user/list',
        method: 'get',
        params: query
    });
};

export const login = query => {
    return request({
        url: 'http://127.0.0.1:8888/login',
        method: 'post',
        params: query
    });
};
