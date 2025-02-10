import axios from "axios";
import SummaryApi from "../common/SummaryApi";

const Axios = axios.create({
    withCredentials: true
});

Axios.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

Axios.interceptors.response.use(
    (res) => {
        return res;
    },
    async (error) => {
        let originReq = error.config;
        if (error.response.status === 401 && !originReq._retry) {
            originReq._retry = true;
            const refreshToken = localStorage.getItem("refreshToken");
            if (refreshToken) {
                const newAccessToken = await refreshAccessToken(refreshToken);
                if (newAccessToken) {
                    originReq.headers.Authorization = `Bearer ${newAccessToken}`;
                    return Axios(originReq);
                }
            }
        }
        return Promise.reject(error);
    }
);

const refreshAccessToken = async (refreshToken) => {
    try {
        const res = await Axios({
            ...SummaryApi.refreshToken,
            headers: {
                Authorization: `Bearer ${refreshToken}`
            }
        });
        const accessToken = res.data.data.accessToken;
        localStorage.setItem("accessToken", accessToken); 
        return accessToken;
    } catch (error) {
        console.error("Failed to refresh access token:", error);
        
    }
};

export default Axios;