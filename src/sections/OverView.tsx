
import Typography from '../components/ui/typography/Typography';
import Widget from '../components/Widget';

const OverView = () => {
  return (
    <div className='w-full flex flex-col gap-10'>
        <div className="flex flex-col gap-2.5">
          <Typography variant='h1' className='text-[#FFFFFF] text-[36px] leading-11 tracking-[0px]'>Welcome, Admin</Typography>

          <Typography variant='span' className='text-[#ABB8C4]'>Start day with managing new appointments</Typography>
        </div>

        <div className="flex flex-wrap gap-1.5 justify-between">
          <Widget className='' icon='/icons/calendar-check.svg' tag={94} desc='Total number of  scheduled appointments'/>
          <Widget className='' icon='/icons/hourglass.svg' tag={32} desc='Total number of pending appointments'/>
          <Widget className='' icon='/icons/alert-triangle.svg' tag={56} desc='Total number of cancelled  appointments'/>
        </div>
    </div>
  )
}

export default OverView;
