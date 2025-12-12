import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Success from '../pages/Success';
import Auth from '../pages/Auth';


function AppLayout (){
    return(
    <main className="w-full min-h-screen ">
      <div className="max-w-7xl w-full mx-auto h-screen">
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
            path: '/auth',
            element: <Auth/>
        },
        {
            path: '/success',
            element: <Success/>
        }
        ]
    },
])


const Routes = () => {
    return(
        <RouterProvider router={router} />
    )
}

export default Routes;
