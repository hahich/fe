<<<<<<< HEAD
export const baseURL = "http://localhost:8080"

const SummarryApi = {
    register: {
        url: "/api/user/register",
        method: "post"
    },
    login: {
        url: "/api/user/login",
        method: "post"
    },
    forgot_password: {
        url: "/api/user/forgot-password",
        method: "put"
    },
    forgot_password_otp_verification: {
        url: "/api/user/verify-forgot-password-otp",
        method: "put"
    },
    reset_password: {
        url: "/api/user/reset-password",
        method: "put"
    },
    refreshToken: {
        url: "/api/user/refresh-token",
        method: "post"
    },
    user_details: {
        url: "/api/user/user-details",
        method: "get"
    },
    logout: {
        url: "/api/user/logout",
        method: "get"
    },
    uploadAvatar: {
        url: "/api/user/upload-avatar",
        method: "put"
    },
    updateUserDetails: {
        url: "/api/user/update-user",
        method: "put"
    },
    addCategory: {
        url: "/api/category/add-category",
        method: "post"
    },
    uploadImg: {
        url: "/api/file/upload",
        method: "post"
    },
    getCategory: {
        url: "/api/category/get",
        method: "get"
    },
    updateCategory: {
        url: "/api/category/update-category",
        method: "put"
    },
    deleteCategory: {
        url: "/api/category/delete",
        method: "delete"
    },
    createSubCategory: {
        url: "/api/subcategory/create",
        method: "post"
    },
    getSubCategory: {
        url: "api/subcategory/get",
        method: "post"
    },
    updateSubCategory: {
        url: "api/subcategory/update",
        method: "put"
    },
    deleteSubCategory: {
        url: "api/subcategory/delete",
        method: "delete"
    },
    createProduct: {
        url: "api/products/create",
        method: "post"
    },
    getProduct: {
        url: "api/products/get",
        method: "post"
    },
    getProductsByCategory: {
        url: "api/products/getProductsByCategory",
        method: "post"
    },
    getProductsByCategoryAndSubCategory: {
        url: "api/products/getProductsByCategoryAndSubCategory",
        method: "post"
    },
    getProductsDetails: {
        url: "api/products/getProductsDetails",
        method: "post"
    }
}

export default SummarryApi;
=======

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
    refreshToken: {
        url: "/api/refresh-token",
        method: 'post'
    },
    logout: {
        url: "/api/user/logout",
        method: 'get'
    },
    getMe: {
        url: '/api/user/getMe',
        method: 'get'
    }
}

export default SummaryApi;
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3
