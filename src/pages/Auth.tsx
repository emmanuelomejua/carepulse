import React from 'react'
import Logo from '../components/Logo';
import AuthForm from '../sections/AuthForm';

// SVGs
import coverImg from '../assets/Illustration.png'
import Typography from '../components/ui/typography/Typography';

const Auth = () => {
  return (
    <main className='flex w-full h-screen'>
        <div className="flex flex-col justify-between flex-1 p-12.5">
            <Logo/> 

            <AuthForm/>

            <Typography>@carepulse copyright</Typography>

        </div>

        <div className="flex flex-1 relative">
            <img src={coverImg} alt="" className="w-full" />
        </div>
    </main>
  )
}

export default Auth;
