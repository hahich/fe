<<<<<<< HEAD
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/index.jsx'
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/index.jsx'
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
<<<<<<< HEAD
  </Provider>,
=======
  </Provider>
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3
  // </StrictMode>,
)
