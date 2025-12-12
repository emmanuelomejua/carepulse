import React from 'react'
import Typography from './ui/typography/Typography';

const Logo = () => {
  return (
    <div className='flex items-center gap-1.5'>
        <img src="/logo.svg" alt="" className="" />
        <Typography>CarePulse</Typography>
    </div>
  )
}

export default Logo;
