import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider ,createBrowserRouter} from "react-router-dom";
import appStore from "./utils/appStore"
import { Provider } from "react-redux"
import Login from "./components/Login"
import Brouse from "./components/Brouse"
import MoviePage from './components/MoviePage';
import SearchPage from './components/SearchPage';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/brouse",
    element: <Brouse />,
  },
  {
    path: "/movie/:movieid",
    element:<MoviePage/>
  },
  {
    path:"/search",
    element:<SearchPage/>
  }
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={appStore} >
   <RouterProvider router={appRouter} />
   </Provider>
  </React.StrictMode>,
)


