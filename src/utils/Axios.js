import axios from "axios";
<<<<<<< HEAD
import SummarryApi, { baseURL } from "../common/SummaryApi";

const Axios = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

// sending access token in the header
Axios.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem("accessToken");
=======
import SummaryApi from "../common/SummaryApi";

const Axios = axios.create({
    withCredentials: true
});

Axios.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
<<<<<<< HEAD
    }
)

// extend the life span of accessToken with the help refresh
Axios.interceptors.request.use(
=======
    },
);

Axios.interceptors.response.use(
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3
    (res) => {
        return res;
    },
    async (error) => {
<<<<<<< HEAD
        let originRequest = error.config;

        if (error.res.status === 401 && !originRequest.retry) {
            originRequest.retry = true;

            const refreshToken = localStorage.getItem("refreshToken");

            if (refreshToken) {
                const newAccessToken = await refreshAccessToken(refreshToken);

                if (newAccessToken) {
                    originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return Axios(originRequest);
                }
            }
        }

        return Promise.reject(error);
    }
)
=======
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
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3

const refreshAccessToken = async (refreshToken) => {
    try {
        const res = await Axios({
<<<<<<< HEAD
            ...SummarryApi.refreshToken,
            headers: {
                Authorization: `Bearer ${refreshToken}`
            }
        })
        const accessToken = res.data.data.accessToken;
        localStorage.setItem('accessToken', accessToken)
        return accessToken
    } catch (error) {
        console.log(error)
    }
}
=======
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
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3

export default Axios;