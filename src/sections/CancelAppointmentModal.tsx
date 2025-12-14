import BasicModal from '../components/modals/BasicModal';
import Button from '../components/ui/buttons/Button';
import Typography from '../components/ui/typography/Typography';


interface CancelAppointmentModalProps {
    open: boolean;
    handleClose: () => void;
    setCancelModal: any
}
const CancelAppointmentModal = ({open, handleClose, setCancelModal}: CancelAppointmentModalProps) => {
  return (
    <BasicModal open={open} handleClose={handleClose}>
        <div className="bg-[#1A1D21F5] flex flex-col gap-8 px-8 py-8 w-160 rounded-2xl">
            <div className="flex items-center justify-between">
            <Typography variant="h1" className="text-[24px] font-semibold text-[#FFFFFF]">Cancel Appointment</Typography>
            <Typography variant="h1" className="cursor-pointer text-xl font-normal" onClick={() => setCancelModal(false)}>X</Typography>
            </div>
            <Typography>Are you sure you want to cancel your appointment</Typography>

            <Button className='text-[#FFFFFF] bg-[#F24E43] py-3 px-5'>Cancel  appointment</Button>

        </div>
    </BasicModal>
  )
}

export default CancelAppointmentModal;