import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
<<<<<<< HEAD
import productsReducer from './productsSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
=======

export default configureStore({
    reducer: {
        user: userReducer
    }
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3
})