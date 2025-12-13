import BasicTable from "../components/ui/tables/BasicTable";
import Typography from "../components/ui/typography/Typography";
import { patientData } from "../data/data";


const columns = [
    {
        header: 'Patient',
        accessor: 'patient',
        render: (val: any) => (
            <div className="flex items-center">
                <div className="">
                    <img src="" alt="" className="" />
                </div>
                <Typography>Phoenix Baker</Typography>
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
        render: (val: any) => (
            <div className={`flex items-center gap-1`}>
                <img src="" alt="" className="" />
                <Typography>Pending</Typography>
            </div>
        )
    },
    {
        header: 'Doctor',
        accessor: 'doctor',
        render: (val: any) => (
            <div className="flex items-center">
                <div className="">
                    <img src="" alt="" className="" />
                </div>
                <Typography>Phoenix Baker</Typography>
            </div>
        )
    },
    {
        header: 'Action',
        accessor: 'action',
        render: (val: any) => (
            <div className="">
                <Typography variant="span" className="">Schedule</Typography>
                <Typography variant="span" className="">Cancel</Typography>
            </div>
        )
    },
]


const AppointmentTable = () => {
  return (
    <div className="h-119.5">
        <BasicTable columns={columns} data={patientData ?? []}/>
    </div>
  )
}

export default AppointmentTable;
