import React from 'react'
import { Navigate } from 'react-router-dom';

interface ProtectedRoutesProps {
    user: string;
    children: React.ReactNode
}

const ProtectedRoutes = ({user, children}: ProtectedRoutesProps) => {

    if(!user){
       return <Navigate to='/auth' />
    }
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoutes;
