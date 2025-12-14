import React from 'react';
import Typography from './ui/typography/Typography';


interface widgetProps {
  icon?: React.ReactNode;
  desc: string;
  tag: number;
  className: string;
}

const Widget: React.FC<widgetProps> = ({icon, desc, tag, className}) => {
  return (
    <div className={`w-100 h-38 rounded-2xl p-8 flex flex-col gap-2 justify-between border border-[#FFFFFF14] bg-[#FFFFFF14] ${className}`}>
        <div className="flex items-center gap-2">
            <span>{icon}</span>
            <Typography variant='h2' className='text-[#FFFFFF] text-[32px]'>{tag}</Typography>
        </div>

        <div className="">
          <Typography variant='span' className='text-[16px] font-semibold leading-6 text-[#FFFFFF]'>{desc}</Typography>
        </div>

    </div>
  )
}

export default Widget;

// bg-[#D7EDED]