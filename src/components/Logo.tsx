
import Typography from './ui/typography/Typography';

const Logo = ({className}: {className?: string}) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
        <img src="/logo.svg" alt="" className="w-[32px] h-[32px] rounded-[8px]" />
        <Typography variant='h1' className='text-[#FFFFFF] text-[24px] font-bold leading-6 tracking-[0%] '>CarePulse</Typography>
    </div>
  )
}

export default Logo;
