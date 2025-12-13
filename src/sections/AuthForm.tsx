import React from 'react'
import Typography from '../components/ui/typography/Typography';
import { TextField } from '../components/ui/inputs/TextField';
import Button from '../components/ui/buttons/Button';

const AuthForm = () => {

  return (
    <form className='flex flex-col gap-8'>
     <Typography variant='h1' className='text-[#FFFFFF]'>Hi there, ....</Typography>

     <Typography variant='span' className='text-[#ABB8C4]'>Get Started with Appointments.</Typography>

     <TextField 
      icon={<img src='/icons/username.svg' alt='' className='w-4.5 h-4.5'/>}
      label='Full name' 
      placeholder='John Doe' 
      className='border border-[#363A3D] text-[#FFFFFF] p-3 bg-[#1A1D21] focus-within:outline-1 focus-within:outline-[#84DCF53D]
      focus-within:text-[#B6F09C] placeholder:text-[#76828D]' />

     <TextField 
      icon={<img src='/icons/email.svg' alt='' className='w-4.5 h-4.5'/>}
      label='Email address' 
      placeholder='johndoe@gmail.com' 
      className='border text-[#FFFFFF] p-4 bg-[#1A1D21] border-[#363A3D]'/>

     <TextField 
      icon={<img src='/icons/phone.svg' alt='' className='w-4.5 h-4.5'/>}
      label='Phone number' 
      placeholder='+234 901 334 7728' type='number' 
      className='border text-[#FFFFFF] p-4 bg-[#1A1D21] border-[#363A3D]'/>

     <Button className='bg-[#24AE7C] text-[#FFFFFF] py-2 px-6'>Get Started</Button>
    </form>
  )
}

export default AuthForm;
