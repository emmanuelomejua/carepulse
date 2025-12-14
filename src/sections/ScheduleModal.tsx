import BasicModal from '../components/modals/BasicModal';
import Typography from '../components/ui/typography/Typography';
import Button from '../components/ui/buttons/Button';


interface ScheduleModalProps {
    open: boolean;
    handleClose: () => void;
    setOpenScheduleModal: any
}

const ScheduleModal = ({open, handleClose, setOpenScheduleModal}: ScheduleModalProps) => {
  return (
    <BasicModal open={open} handleClose={handleClose}>
        <div className="bg-[#1A1D21F5] flex flex-col gap-8 px-8 py-8 w-160 rounded-2xl">
            <div className="flex items-center justify-between">
                <Typography variant="h1" className="text-[24px] font-semibold text-[#FFFFFF]">Schedule Appointment </Typography>
                <Typography variant="h1" className="cursor-pointer text-xl font-normal" onClick={() => setOpenScheduleModal(false)}>X</Typography>
            </div>

            <Typography>Please fill in the following details to schedule</Typography>

            <Button className='green-btn'>Schedule appointment</Button>
        </div>

    </BasicModal>
  )
}

export default ScheduleModal;
