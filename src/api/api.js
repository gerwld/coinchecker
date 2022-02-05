import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
       
    },
    baseURL: ""
});

export const dashboardAPI = {
    getUser(id) {
        if(id !== undefined){
            return instance.get(`profile/${id}`).then(r => r.data);
        } else {
            return undefined;
        }
    },
    getData(id) {
        if(id !== undefined){
            return instance.get(`profile/${id}`).then(r => r.data);
        } else {
            return undefined;
        }
    }
}
