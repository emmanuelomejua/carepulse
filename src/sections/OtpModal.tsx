import BasicModal from "../components/modals/BasicModal";
import Button from "../components/ui/buttons/Button";
import Typography from "../components/ui/typography/Typography";
import OtpInput from '../components/OtpInput'


interface OtpModalProps {
  open: boolean;
  handleClose: () => void;
  setOpen: any;
}


const OtpModal = ({open, setOpen, handleClose}: OtpModalProps) => {
  return (
    <BasicModal open={open} handleClose={handleClose}>
      <form className='bg-[#1A1D21F5] rounded-2xl flex flex-col gap-6 p-8'>
        <div className="flex items-center justify-between">
          <Typography variant="h1" className="text-[24px] font-semibold text-[#FFFFFF]">Verify OTP</Typography>
          <Typography variant="h1" className="cursor-pointer text-xl font-normal" onClick={() => setOpen(false)}>X</Typography>
        </div>

        <Typography>Please enter the OTP sent to your registered mobile number.</Typography>

        <OtpInput className="bg-[#131619] border border-[#363A3D] text-[48px] leading-15 text-[#FFFFFF]" onChange={() => {}} />

        <Button className="bg-[#24AE7C] text-[#FFFFFF] py-3 px-5">Verify</Button>
      </form>
    </BasicModal>
  )
}

export default OtpModal;
