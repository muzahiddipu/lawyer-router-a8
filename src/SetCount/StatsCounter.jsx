import React, { useEffect, useState } from 'react';

const StatCard = ({ icon, end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const totalSteps = end;
    const stepTime = Math.max(duration / totalSteps, 1); 

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="bg-cyan-50 rounded-xl p-5 text-center shadow">
      <div className="text-3xl mb-2">{icon}</div>
      <h2 className="text-2xl font-bold">{count}+</h2>
      <p className="text-gray-500">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <div className="mt-10">
      <div className='text-center mb-5'>
        <h1 className='text-4xl font-bold'>We Provide Best Law Services</h1>
        <p className='text-gray-400'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 w-10/12 mx-auto  p-7'>
      <StatCard icon="📋" end={199} label="Total Lawyer" duration={1500} />
      <StatCard icon="⭐️⭐️⭐️" end={467} label="Total Reviews" duration={1800} />
      <StatCard icon="🧑‍⚕️👩‍⚕️" end={1900} label="Cases Initiated" duration={2000} />
      <StatCard icon="👥" end={300} label="Total Staffs" duration={1600} />
      </div>
    </div>
  );
};

export default StatsCounter;
