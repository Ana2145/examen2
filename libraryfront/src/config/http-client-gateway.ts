import AxiosClient from './axios';

export default class HttpClientGateway {
    constructor() {
        this.axios = AxiosClient;
    }
    
    async get(url, params = {}) {
        return this.axios.get(url, { params });
    }
    
    async post(url, data) {
        return this.axios.post(url, data);
    }
    
    async put(url, data) {
        return this.axios.put(url, data);
    }
    
    async delete(url) {
        return this.axios.delete(url);
    }
}
