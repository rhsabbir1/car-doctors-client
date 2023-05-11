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
        loader: () => fetch(`http://localhost:5000/services/645bbff85f4c925db2beb8be`)
      }
    ]
  }
])

export default router;