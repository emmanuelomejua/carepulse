import React from 'react'
import Logo from '../components/Logo';
import AuthForm from '../sections/AuthForm';

// SVGs
import coverImg from '../assets/Illustration.png'

const Auth = () => {
  return (
    <main className='flex w-full h-full'>
        <div className="flex flex-col flex-1 py-6 bg-amber-200">
            <Logo/>

            <AuthForm/>

        </div>

        <div className="flex flex-1">
            <img src={coverImg} alt="" className="w-fit" />
        </div>
    </main>
  )
}

export default Auth;
