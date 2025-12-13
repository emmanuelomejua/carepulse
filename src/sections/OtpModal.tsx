import BasicModal from "../components/modals/BasicModal";
import Button from "../components/ui/buttons/Button";
import Typography from "../components/ui/typography/Typography";


interface OtpModalProps {
  open: boolean;
  handleClose: () => void;
}


const OtpInput = ({open, handleClose}: OtpModalProps) => {
  return (
    <BasicModal open={open} handleClose={handleClose}>
      <form className='bg-[#1A1D21F5] rounded-2xl flex flex-col gap-6 p-8'>
        <div className="flex items-center justify-between">
          <Typography>Verify OTP</Typography>
          <Typography>X</Typography>
        </div>

        <Typography>Please enter the OTP sent to your registered mobile number.</Typography>


        <Button className="bg-[#24AE7C] text-[#FFFFFF] py-3 px-5">Verify</Button>
      </form>
    </BasicModal>
  )
}

export default OtpInput;
