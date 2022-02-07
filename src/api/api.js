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
    getGitToken(code) {
        return instance.get(`auth/oauth/github/token?code=${code}`).catch(e => {
            debugger;
            const error = e.response.data.cause1.split(': ')[1];
            alert(error);
        });
    },
    getReg(inputDto) {
        return instance.post('users', inputDto).catch(e => {
            const error = e.response.data.cause1.split(': ')[1];
            alert(error);
        });
    },
    getCurrentUser(token) {
        return axios.get('http://46.101.162.26:8000/api/core/users/current', token)
            .catch(error => {
                console.log(error);
                debugger;
            })
    }
}