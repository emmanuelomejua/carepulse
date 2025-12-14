
import Logo from '../components/Logo';
import AuthForm from '../sections/AuthForm';
import Typography from '../components/ui/typography/Typography';

// ICONS
import coverImg from '../assets/img/Illustration.png'

const Auth = () => {
  return (
    <main className='flex w-full h-screen'>
        <div className="flex flex-col justify-between flex-1 p-12.5">
            <Logo/> 

            <AuthForm/>

            <Typography>@carepulse copyright</Typography>

        </div>

        <div className="flex flex-1 relative">
            <img src={coverImg} alt="" className="w-full" />
        </div>
    </main>
  )
}

export default Auth;
