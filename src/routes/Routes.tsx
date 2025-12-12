import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Success from '../pages/Success';
import Auth from '../pages/Auth';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/auth',
        element: <Auth/>
    },
    {
        path: '/success',
        element: <Success/>
    }
])


const Routes = () => {
    return(
        <RouterProvider router={router} />
    )
}

export default Routes;
