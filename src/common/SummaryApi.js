
const SummaryApi = {
    register: {
        url: '/api/user/register',
        method: 'post'
    },
    login: {
        url: '/api/user/login',
        method: 'post'
    },
    forgot_password: {
        url: '/api/user/forgot-password',
        method: 'put'
    },
    forgot_password_otp: {
        url: '/api/user/verify-forgot-password-otp',
        method: 'put'
    },
    update_password: {
        url: '/api/user/reset-password',
        method: 'put'
    },
    getMe: {
        url: '/api/user/getMe',
        method: 'get'
    }
}

export default SummaryApi;