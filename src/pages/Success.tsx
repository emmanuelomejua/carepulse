import Logo from "../components/Logo";
import Typography from "../components/ui/typography/Typography";
import UserItem from "../components/UserItem";

// ICONS
import done from '../assets/img/check-circle.svg'
import { CalendarCheck2 } from "lucide-react";


const Success = () => {
  return (
    <main className="flex flex-col items-center h-screen">
      <Logo className="mt-4"/>
      
      <section className="flex flex-col gap-4 my-auto">
        <img src={done} alt="" className="h-25 w-25 flex mx-auto" />

        <Typography variant="h1" className="font-bold text-[36px] text-center leading-11 w-153 text-[#FFFFFF]">Your <span className="text-[#4AC97E]">appointment request</span> has been successfully submitted!</Typography>

        <Typography variant="span" className="font-medium leading-7 text-[18px] text-center">We'll be in touch shortly to confirm.</Typography>

        <div className="flex items-center gap-1.5 justify-between py-4 px-6 border-y border-y-[#363A3D99] ">
          <Typography variant="h4">Requested appointment details:</Typography>

          <UserItem/>

          <CalendarCheck2 style={{ height: '16px', width: '16px', color: '#CDE9DF' }}/>

          <Typography variant="span">23 June 2024 - 5:00 PM</Typography>
        </div>
      </section>
    </main>
  )
}

export default Success;
