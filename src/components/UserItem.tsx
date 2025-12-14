import Typography from './ui/typography/Typography';

// ICONS
import avater from '../assets/img/user.png'

const UserItem = () => {
  return (
    <div className='flex items-center gap-2 rounded-xl border border-[#FFFFFF14] py-2.5 px-3 bg-[#FFFFFF14]'>
        <img src={avater} alt="" className="w-6 h-6" />
        <Typography variant='span' className='text-[#FFFFFF] font-semibold text-[12px]'>Dr. Adam Smith</Typography>
    </div>
  )
}

export default UserItem;
