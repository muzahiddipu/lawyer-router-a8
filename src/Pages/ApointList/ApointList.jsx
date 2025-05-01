import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getStoreDoctor } from '../../Test/Test';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { toast } from 'react-toastify';


const removeFromStoreDB = (id) => {
  const storedDoctorData = getStoreDoctor();
  const updatedDoctorData = storedDoctorData.filter(docId => docId !== id);
  localStorage.setItem("doctorList", JSON.stringify(updatedDoctorData));
};

const AppointmentList = () => {
  const [doctorList, setDoctorList] = useState([]);
  const [chartData, setChartData] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedDoctorData = getStoreDoctor().map(id => parseInt(id));
    const listOfDoctor = data.filter(doctor => storedDoctorData.includes(doctor.id));
    setDoctorList(listOfDoctor);

    const chartReadyData = listOfDoctor.map(doc => ({
      id: doc.id,
      name: doc.name,
      value: Math.floor(Math.random() * 1800) + 400,
    }));
    setChartData(chartReadyData);
  }, [data]);

  const TriangleBar = (props) => {
    const { x, y, width, height, fill } = props;
    return (
      <path
        d={`M${x},${y + height}
            Q${x + width / 2},${y - height}
            ${x + width},${y + height}
            Z`}
        stroke="none"
        fill={fill}
      />
    );
  };

  
  const handleCancel = (id) => {
    removeFromStoreDB(id);
    setDoctorList(prev => prev.filter(doc => doc.id !== id));
    setChartData(prev => prev.filter(item => item.id !== id));
    setTimeout(() => {
      toast.warn(`Caution: Appointment has been removed!`, {
        style: {color:'red'}
      })
    }, 100);
  };
  

  return (
    <div className="mx-auto mt-10 px-5 min-h-screen py-10">

      {chartData.length > 0 && (
        <div className="bg-white p-5 rounded-xl shadow mb-10 w-10/12 mx-auto">
          <h2 className="text-center text-xl font-semibold mb-5">Doctor Popularity Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: 'top' }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      
      {
        doctorList.length === 0 ? (
         <div className='w-10/12 mx-auto h-auto bg-cyan-50 p-7 rounded-2xl border-2 border-white text-center space-y-7'>
            <h1 className='text-5xl font-bold'>You Have Not any Appointment Yet</h1>
            <p>Our platform connects you with verified, experienced Doctors across various specialities — all at your convenience.</p>
            <Link to='/'><button className='bg-blue-500 rounded-xl px-7 py-2 cursor-pointer text-white'>Book an Appointment</button></Link>
         </div>
        ) : (
          <div>
            <div className='text-center space-y-3 mb-10'>
              <h1 className='text-3xl font-bold'>My Today Appointments</h1>
              <p className='text-gray-500'>Here's a more detailed look at how to find or book doctor appointments</p>
            </div>

            {doctorList.map(doctor => (
              <div key={doctor.id} className='bg-white w-10/12 mx-auto rounded-2xl space-y-3 p-7 mt-8 shadow'>
                <h3 className='font-bold text-xl'>{doctor.name}</h3>
                <div className='flex justify-between text-gray-500 text-sm'>
                  <p>{doctor.education}</p>
                  <p>Appointment Fee: 1200 Taka + VAT</p>
                </div>
                <hr className='border-dashed border-gray-300 mt-3' />
                <button
                  onClick={() => handleCancel(doctor.id)}
                  className='mt-5 w-full border border-red-700 text-red-700 py-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300'>
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default AppointmentList;






