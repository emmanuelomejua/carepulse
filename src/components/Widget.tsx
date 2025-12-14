
import Typography from './ui/typography/Typography';


interface widgetProps {
  icon?: string;
  desc: string;
  tag: number;
  className: string;
}

const Widget: React.FC<widgetProps> = ({icon, desc, tag, className}) => {
  return (
    <div className={`w-100 h-38 rounded-2xl p-8 flex flex-col gap-2 justify-between border border-[#FFFFFF14] bg-[#FFFFFF14] ${className}`}>
        <div className="flex items-center">
            <img src={icon} alt="" className="h-12 w-12 mt-5 ml-0" />
            <Typography variant='h2' className='text-[#FFFFFF] text-[32px]'>{tag}</Typography>
        </div>

        <Typography variant='span' className='text-[16px] font-bold leading-6 text-[#FFFFFF]'>{desc}</Typography>
    </div>
  )
}

export default Widget;

// bg-[#D7EDED]