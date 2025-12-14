import { useState } from "react";
import BasicTable from "../components/ui/tables/BasicTable";
import Typography from "../components/ui/typography/Typography";
import { patientData } from "../data/data";
import ScheduleModal from "./ScheduleModal";
import CancelAppointmentModal from "./CancelAppointmentModal";


//ICONS
import user from '../assets/user.png'




const AppointmentTable = () => {

    const [openScheduleModal, setOpenScheduleModal] = useState<boolean>(false);
    const [openCancelModal, setOpenCancelModal] = useState<boolean>(false);

    const handleSchedule = (row: any) => {
        setOpenScheduleModal(true);
        console.log(row);
    };

    const handleCancel = (row: any) => {
        setOpenCancelModal(true);
        console.log(row);
    };

    const columns = [
        {
            header: 'Patient',
            accessor: 'patient',
            renderRow: (val: any) => (
                <div className="flex items-center gap-2">
                    <div className="">
                         <div className="w-8 h-8 rounded-full bg-[#24AE7C] flex items-center justify-center text-white text-sm font-medium">
                            {val.patient
                            .split(' ')
                            .map((patient: any) => patient[0])
                            .join('')
                            .slice(0, 2)
                            .toUpperCase()}
                        </div>
                    </div>
                    <Typography>{val.patient}</Typography>
                </div>
            )
        },
        {
            header: 'Date',
            accessor: 'date'
        },
        {
            header: 'Status',
            accessor: 'status',
            renderRow: (val: any) => (
                <div className={`flex items-center gap-1 rounded-2xl py-0.5 pl-1.5 pr-2 ${val.status === 'scheduled' ? 'text-[#24AE7C] bg-[#0D2A1F]': val.status === 'pending' ? 'text-[#79B5EC] bg-[#152432]': 'text-[#F37877] bg-[#3E1716]'}`}>
                    <img src="" alt="" className="" />
                    <Typography className="capitalize text-[12px] leading-4.5 tracking-[0%] font-semibold" variant="span">{val.status}</Typography>
                </div>
            )
        },
        {
            header: 'Doctor',
            accessor: 'doctor',
            renderRow: (val: any) => (
                <div className="flex items-center gap-2">
                    <img src={user} alt="Doctor" className="rounded-full object-cover w-8 h-8" />
                    <Typography>{val.doctor}</Typography>
                </div>
            )
        },
        {
            header: 'Action',
            accessor: 'action',
            renderRow: (val: any) => (
                <div className="flex items-center gap-2">
                    <Typography 
                        onClick={() => handleSchedule(val)}
                        variant="span" 
                        className="text-[#24AE7C] text-[14px] font-semibold cursor-pointer">Schedule</Typography>
                    <Typography 
                        onClick={() => handleCancel(val)}
                        variant="span" 
                        className="text-[#FBECEC] text-[14px] font-semibold cursor-pointer">Cancel</Typography>
                </div>
            )
        },
    ]

  return (
    <>
        <div className="h-119.5 mb-7.5">
            <BasicTable columns={columns} data={patientData ?? []}/>
        </div>

        <ScheduleModal 
            open={openScheduleModal} 
            setOpenScheduleModal={setOpenScheduleModal} 
            handleClose={() => setOpenScheduleModal(false)}/>


        <CancelAppointmentModal 
            open={openCancelModal} 
            handleClose={() => setOpenCancelModal(false)} 
            setCancelModal={setOpenCancelModal}/>
    </>
  )
}

export default AppointmentTable;
