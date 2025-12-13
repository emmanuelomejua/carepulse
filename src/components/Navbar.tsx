import React from 'react'
import Logo from './Logo';
import Typography from './ui/typography/Typography';

//ICONS
import user from '../assets/user.png'

const Navbar = () => {
  return (
    <nav className='bg-[#0D0F10] rounded-[20px] w-full py-6 px-12'>
        <section className='max-w-7xl w-full flex items-center justify-between mx-auto'>
            <Logo/>

            <div className="flex items-center gap-2">
                <img src={user} alt="" className="rounded-full object-cover w-8 h-8" />
                <Typography variant='span' className='text-[#FFFFFF] text-[16px]'>Admin</Typography>
            </div>
        </section>
    </nav>
  )
}

export default Navbar;
