import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Success from '../pages/Success';
import Auth from '../pages/Auth';


function AppLayout (){
    return(
    <main className="w-full min-h-screen ">
      <div className="max-w-354 w-full mx-auto h-screen">
        <Outlet />
      </div>
    </main>
    )
}


const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/success',
            element: <Success/>
        }
    ]
    },
    {
        path: '/auth',
        element: <Auth/>
    },
])


const Routes = () => {
    return(
        <RouterProvider router={router} />
    )
}

export default Routes;
