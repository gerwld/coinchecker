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

export const authAPI = {
    getAuth(authObject) {
        return instance.post('auth/basic/token', authObject).catch(e => {
            const error = e.response.data.cause1.split(': ')[1];
            alert(error);
        });
    },
    authGithub(link) {
        return instance.get(`auth/oauth/github/oauth-url?feBaseUri=${link}`).catch(e => {
            const error = e.response.data.cause1.split(': ')[1];
            alert(error);
        });
    }
}