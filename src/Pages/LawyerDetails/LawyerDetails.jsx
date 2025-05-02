import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { LiaRegisteredSolid } from "react-icons/lia";
import { CiCircleAlert } from "react-icons/ci";
import { addToStoreDB } from '../../Test/Test';
import { toast } from 'react-toastify';


const LawyerDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const docId = parseInt(id);
    const data = useLoaderData();
    const singleLawyer = data.find(doc => doc.id === docId);

    const handleAppointmentBook = id => {
        addToStoreDB(id);
        setTimeout(() => {
            toast.success(`Appointment booked ${name} successfully!`);
            navigate('/apoint-list');
        }, 100); 
    };

    if (!singleLawyer) {
        return <div>Lawyer not found.</div>;
    }

    const { image_url, name, education, speciality, experience, license_number, } = singleLawyer;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().getDay();

    return (
        <div>
            <div className='w-10/12 mx-auto bg-gray-100 px-8 py-10 rounded-xl text-center space-y-2 mt-10'>
                <h1 className='font-bold text-4xl'>Lawyer’s Profile Details</h1>
                <p className='text-gray-500'>Legal services encompass a wide range of professional assistance provided by lawyers, including consultation, representation in court, document drafting, and dispute resolution. Lawyers help individuals and businesses navigate legal matters by offering expert advice, handling legal paperwork, and ensuring their rights are protected.</p>
            </div>

            <div className='w-10/12 mx-auto bg-gray-100 rounded-xl mt-7 grid grid-cols-1 lg:grid-cols-3 gap-6 p-10'>
                <div className='p-10 bg-gray-300 flex justify-center items-center rounded-xl'>
                    <img className='w-full rounded-2xl' src={image_url} alt="" />
                </div>
                <div className='w-8/12 col-span-2 flex flex-col justify-center space-y-2'>
                    <button className='text-start px-3 py-0.5 bg-blue-50 text-[#176AE5] w-1/4 shadow-sm rounded-2xl'>Experience: {experience}</button>
                    <p className='text-2xl font-bold '>{name}</p>
                    <p><small>{education} <br /></small></p>
                    <p><small>Working at <br /><span className='text-xl font-bold'>Bangladesh Supreme Court, Dhaka</span></small></p>
                    <div className='border-t-2 border-dashed border-gray-200'></div>
                    <div className='flex gap-5 items-center'>
                        <p>{speciality}</p>
                        <div className='flex gap-2 items-center'>
                        <span className='text-xl'><LiaRegisteredSolid /></span>
                        <p><small>Licence No: {license_number}</small></p>
                        </div>
                    </div>
                    
                    <div className='border-t-2 border-dashed border-gray-200 '></div>
                    <div className='flex items-center mt-5 gap-3'>
                        <p>Availability </p>
                        
                        <div className="flex gap-2">
      
                                {days.map((day, index) => (<div
                                    key={day}
                                    className={`px-4 py-1 rounded-full text-sm font-medium 
                                        ${index === currentDay 
                                        ? 'text-orange-500 bg-orange-100' 
                                        : 'text-gray-400 bg-cyan-50'    
                                        }`}
                                    >
                                    {day}
                                    </div>
                                ))}
                        </div>
                    </div>

                    <p className='font-bold text-xl '>Consultation Fee: <span className='text-green-500 font-bold'>Taka: 1000(incl.Vat)</span></p>
                </div>
            </div>

            <div className='w-10/12 mx-auto bg-gray-100 rounded-xl mt-7 p-5 space-y-2'>
            <h3 className='text-center text-2xl font-bold'>Book an Appointment</h3>
                <div className='border-t-2 border-dashed border-gray-200 mt-3'></div>
                <div className='flex justify-between mt-5'>
                    <p className='font-bold'>Availability</p>
                    <button className='px-5 py-0.5 rounded-2xl bg-gradiant-lr bg-green-100 text-green-400'>Lawyer Available Today</button>
                </div>
                <div className='border-t-2 border-dashed border-gray-200 mt-3 flex items-center justify-center'></div>
               
               <div className='flex items-center bg-orange-100 rounded-4xl px-10 py-2 text-black gap-4 w-9/12 mt-5'>
               <span><CiCircleAlert /></span>
                <p className=''>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                </div>

                <button
                    onClick={() => handleAppointmentBook(docId)}
                    className='mt-10 w-full bg-green-700 text-white py-3 rounded-4xl cursor-pointer hover:text-white hover:bg-cyan-700'>
                    Book Appointment Now
                </button>
            </div>
        </div>
    );
};

export default LawyerDetails;




