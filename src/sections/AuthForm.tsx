import { useState, type ChangeEvent, type FormEvent } from 'react'
import Typography from '../components/ui/typography/Typography';
import { TextField } from '../components/ui/inputs/TextField';
import Button from '../components/ui/buttons/Button';
import OtpModal from './OtpModal';

const initialState = {
  email: '',
  fullName: '',
  phoneNumber: ''
}

const AuthForm = () => {

  const [open, setOpen] = useState(false);

  const [user, setUser] = useState(initialState);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const currentTarget = e.target
    setUser((user) => ({...user, [currentTarget.name]: currentTarget.value}));
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user))
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
      name='fullName'
      value={user.fullName}
      placeholder='John Doe' 
      required
      className='textfield-dark'
      onChange={handleChange}
      />

     <TextField 
      icon={<img src='/icons/email.svg' alt='' className='w-4.5 h-4.5'/>}
      label='Email address' 
      name='email'
      value={user.email}
      placeholder='johndoe@gmail.com' 
      required
      className='textfield-dark'
      onChange={handleChange}
      />

     <TextField 
      icon={<img src='/icons/phone.svg' alt='' className='w-4.5 h-4.5'/>}
      label='Phone number' 
      name='phoneNumber'
      value={user.phoneNumber}
      placeholder='+234 901 334 7728' type='number' 
      required
      className='textfield-dark'
      onChange={handleChange}
      />

     <Button 
      type='submit'
      className='green-btn'>Get Started</Button>
    </form>

    <OtpModal open={open} setOpen={setOpen} handleClose={() => setOpen(false)}/>

    </>
  )
}

export default AuthForm;
