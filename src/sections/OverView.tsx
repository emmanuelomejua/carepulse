
import Typography from '../components/ui/typography/Typography';
import Widget from '../components/Widget';

// ICONS
import { CalendarCheck2, Hourglass, TriangleAlert } from 'lucide-react';

const OverView = () => {
  
  return (
    <div className='w-full flex flex-col gap-10'>
        <div className="flex flex-col gap-2.5">
          <Typography variant='h1' className='text-[#FFFFFF] text-[36px] leading-11 tracking-[0px]'>Welcome, Admin</Typography>

          <Typography variant='span' className='text-[#ABB8C4]'>Start day with managing new appointments</Typography>
        </div>

        <div className="flex flex-wrap gap-1.5 justify-between">
          <Widget 
            className='' 
            icon={<CalendarCheck2 style={{ height: '26.67px', width: '24px', color: '#FFD147' }}/>} 
            tag={94} 
            desc='Total number of  scheduled appointments'/>

          <Widget 
            className='' 
            icon={<Hourglass style={{ height: '26.67px', width: '21.33px', color: '#79B5EC' }} />}
            tag={32} 
            desc='Total number of pending appointments'/>

          <Widget 
            className='' 
            icon={<TriangleAlert style={{ height: '24.5px', width: '27.5px', color: '#FF4F4E', fontWeight: 'bold' }}/>}
            tag={56} 
            desc='Total number of cancelled  appointments'/>
        </div>
    </div>
  )
}

export default OverView;
