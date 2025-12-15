import React, { type FormEvent } from 'react';
import BasicModal from '../components/modals/BasicModal';
import Typography from '../components/ui/typography/Typography';
import Button from '../components/ui/buttons/Button';
import { TextArea } from '../components/ui/inputs/TextArea';
import CustomSelect from '../components/ui/inputs/CustomSelect';

// ICONS
import avatar from '../assets/img/user.png'
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomDatePicker from '../components/ui/inputs/DatePicker';


interface ScheduleModalProps {
    open: boolean;
    handleClose: () => void;
    setOpenScheduleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const doctors = [
  { value: "1", label: "Dr. Adam Smith", avatar },
  { value: "2", label: "Dr. Jane Doe", avatar },
];


const ScheduleModal = ({open, handleClose, setOpenScheduleModal}: ScheduleModalProps) => {

    const navigate = useNavigate();

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      navigate('success')
    }

  return (
    <BasicModal open={open} handleClose={handleClose}>
        <form onSubmit={handleSubmit} className="bg-[#1A1D21F5] flex flex-col gap-8 px-8 py-8 w-160 rounded-2xl">
            <div className="flex items-center justify-between">
                <Typography variant="h1" className="text-[24px] font-semibold text-[#FFFFFF]">Schedule Appointment </Typography>

                <X style={{ height: '20px', width: '20px', color: '#FFFFFF', cursor: 'pointer' }} onClick={() => setOpenScheduleModal(false)}/>
            </div>

            <Typography>Please fill in the following details to schedule</Typography>

            <CustomDatePicker label='Expected appointment date'/>

            <CustomSelect label='Doctor' options={doctors}/>

            <TextArea
                label='Reason for appointment '
                placeholder='ex: Annual montly check-up'
                className='border-[#363A3D] p-4 h-24'
                required
            />

            <Button type='submit' className='green-btn'>Schedule appointment</Button>
        </form>

    </BasicModal>
  )
}

export default ScheduleModal;
