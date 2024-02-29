import { AxiosRequestConfig } from 'axios';
import AxiosClient from './axios';

export default {
    doGet (endPoint: string, config?: AxiosRequestConfig){
        return AxiosClient.get(endPoint, config);
    },
    doPost (endPoint: string, object: object, config?: AxiosRequestConfig){
        return AxiosClient.post(endPoint, object, config);
    },
    doPut (endPoint: string, object: object, config?: AxiosRequestConfig){
        return AxiosClient.put(endPoint, object, config);
    },
    doDelete (endPoint: string, config: AxiosRequestConfig){
        return AxiosClient.delete(endPoint, config);
    }
    
}