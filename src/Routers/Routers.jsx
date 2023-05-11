import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Cheekout from "../pages/Cheekout/Cheekout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'singup',
        element: <SingUp></SingUp>
      },
      {
        path: 'cheekout/:id',
        element: <Cheekout></Cheekout>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      }
    ]
  }
])

export default router;