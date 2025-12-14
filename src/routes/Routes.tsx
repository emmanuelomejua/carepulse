import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Success from '../pages/Success';
import Auth from '../pages/Auth';
import ProtectedRoutes from './ProtectedRoutes';



function AppLayout (){
    return(
    <main className="w-full min-h-screen ">
      <div className="max-w-354 w-full mx-auto h-screen">
        <Outlet />
      </div>
    </main>
    )
}


const Routes = () => {

    const demoUser = localStorage.getItem('user');

    const user = demoUser ? JSON.parse(demoUser) : null

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <ProtectedRoutes user={user}>
                     <AppLayout/>
                </ProtectedRoutes>
            ),
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

    return(
        <RouterProvider router={router} />
    )
}

export default Routes;
