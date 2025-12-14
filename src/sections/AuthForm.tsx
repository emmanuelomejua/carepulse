import { useState, type FormEvent } from 'react'
import Typography from '../components/ui/typography/Typography';
import { TextField } from '../components/ui/inputs/TextField';
import Button from '../components/ui/buttons/Button';
import OtpModal from './OtpModal';

const AuthForm = () => {

  const [open, setOpen] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(true)
  }

  return (
    <>
    <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
     <Typography variant='h1' className='text-[#FFFFFF]'>Hi there, ....</Typography>

     <Typography variant='span' className='text-[#ABB8C4]'>Get Started with Appointments.</Typography>

     <TextField 
      icon={<img src='/icons/username.svg' alt='' className='w-4.5 h-4.5'/>}
      label='Full name' 
      placeholder='John Doe' 
      required
      className='border border-[#363A3D] text-[#FFFFFF] p-3 bg-[#1A1D21] focus-within:outline-2 focus-within:outline-[#84DCF53D]
      focus-within:text-[#B6F09C] placeholder:text-[#76828D] focus-within:border-2 focus-within:border-[#B6F09C]' />

     <TextField 
      icon={<img src='/icons/email.svg' alt='' className='w-4.5 h-4.5'/>}
      label='Email address' 
      placeholder='johndoe@gmail.com' 
      required
      className='border border-[#363A3D] text-[#FFFFFF] p-3 bg-[#1A1D21] focus-within:outline-2 focus-within:outline-[#84DCF53D]
      focus-within:text-[#B6F09C] placeholder:text-[#76828D] focus-within:border-2 focus-within:border-[#B6F09C]'/>

     <TextField 
      icon={<img src='/icons/phone.svg' alt='' className='w-4.5 h-4.5'/>}
      label='Phone number' 
      placeholder='+234 901 334 7728' type='number' 
      required
      className='border border-[#363A3D] text-[#FFFFFF] p-3 bg-[#1A1D21] focus-within:outline-2 focus-within:outline-[#84DCF53D]
      focus-within:text-[#B6F09C] placeholder:text-[#76828D] focus-within:border-2 focus-within:border-[#B6F09C]'/>

     <Button 
      type='submit'
      className='bg-[#24AE7C] text-[#FFFFFF] py-3 px-5'>Get Started</Button>
    </form>

    <OtpModal open={open} setOpen={setOpen} handleClose={() => setOpen(false)}/>

    </>
  )
}

export default AuthForm;
