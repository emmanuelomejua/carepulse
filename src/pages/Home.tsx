import React from 'react'
import Navbar from '../components/Navbar';
import AppointmentTable from '../sections/AppointmentTable';
import OverView from '../sections/OverView';

const Home = () => {
  return (
    <main className='py-3'>
      <Navbar/>

      <section className='flex flex-col gap-10 mt-8 max-w-7xl w-full mx-auto'>

        <OverView/>

        <AppointmentTable/>

      </section>

    </main>
  )
}

export default Home;
