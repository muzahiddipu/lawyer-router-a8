import React from 'react';


import bannerBg from '../../assets/bannerimg.png';


const Banner = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto p-10 text-center space-y-4 
            rounded-4xl mt-10 border-white border-3 bg-cover bg-center h-[70vh]"
            style={{ backgroundImage: `url(${bannerBg})` }}
            >
                <div className='text-center flex flex-col justify-center items-center pt-30 space-y-7 text-white'>
                    <div>
                    <h1 className='font-semibold lg:text-5xl text-4xl px-20'>It avoids subjective claims or
                            exaggeration that might raise red
                        flags legally.</h1>
                    </div>
                    <div>
                    <p className='text-lg px-20'>Our platform connects you with verified, experienced lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                    
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Banner;