import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    headers: {

    },
    baseURL: "http://46.101.162.26:8000/api/core/"
});

export const dashboardAPI = {
    getData() {
        return instance.get('coins').then(r => {
            if (r.status === 200) {
                return r.data
            } else {
                console.log('Responce status: ' + r.status);
            }
        }).catch(error => { alert('Error ' + error.response.data.error); });
    }
}
