import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const login = query => {
    return request({
        url: 'http://127.0.0.1:8088/login',
        method: 'post',
        params: query
    });
};
