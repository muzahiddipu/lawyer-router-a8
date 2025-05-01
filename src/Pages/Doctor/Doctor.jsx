import React from 'react';
import { Link } from 'react-router';


const Doctor = ({doctor}) => {

    const {image_url, name, education, speciality, experience, license_number, view_details, id}=doctor;

    return (
        
            <div className='p-8 h-auto bg-cyan-50 rounded-xl space-y-3 flex justify-around '>
                <div className='  pt-5 rounded-lg flex justify-center bg-cyan-100 border-1 border-gray-400'>
                    <img className='h-48 w-48' src={image_url} alt="" />
                </div>
                <div>
                    <div className='lg:flex lg:justify-between mb-5'>
                        <button className='lg:px-5 px-6 lg:py-0.5 py-0.4 text-[10px] lg:text-base rounded-2xl bg-gradiant-lr bg-green-100 text-green-400'>Available</button>
                        <button className='lg:px-5 px-7 lg:py-0.5 py-0.4 text-[10px] lg:text-base bg-gradiant-lr bg-cyan-100 text-cyan-500 font-semibold rounded-2xl'>{experience}</button>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>{name}</h3>
                        <p className='text-gray-400'><small>{speciality}</small></p>
                        <div className='border-t-2 border-dashed border-gray-200 mt-3'></div>
                    </div>
                        <p className='text-gray-400'><small>{license_number}</small></p>
                    
                    <div className='flex justify-center mt-5'>
                    <Link to={`/doctorDetails/${id}`}><button className='lg:px-30 px-10 lg:py-2 py-1 border-1 border-cyan-500 cursor-pointer text-cyan-700 rounded-4xl hover:text-white hover:bg-cyan-700'>View Details</button></Link>
                    </div>
                </div>
            </div>
        
    );
};

export default Doctor;