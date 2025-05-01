import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ lawersData }) => {
    const [showAll, setShowAll] = useState(false);

    const visibleDoctors = showAll ? lawersData : lawersData.slice(0, 6);

    return (
        <div className='w-10/12 mx-auto mt-10'>
            <div className='space-y-3 text-center'>
                <h1 className='text-4xl font-bold'>Our Best Lawyers</h1>
                <p className='text-gray-600'>
                Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>

            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-5 grid-cols-1 p-10 rounded-xl'>
                    {
                        visibleDoctors.map((doctor) => (
                            <Doctor key={doctor.id} doctor={doctor} />
                        ))
                    }
                </div>
            </Suspense>

           
            {
                lawersData.length > 6 && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-6 py-2 bg-green-700 hover:bg-white hover:text-black text-white font-semibold rounded-full transition-all duration-300 cursor-pointer"
                        >
                            {showAll ? 'Show Less' : 'Show All Lawers'}
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default Doctors;











