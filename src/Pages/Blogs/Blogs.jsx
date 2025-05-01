import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const data = useLoaderData();
    console.log(data);
    

    return (
        <div className='min-h-screen my-10'>
            <div className='text-center mt-5'>
            <h1 className='text-2xl font-bold'>Blogs</h1>
            <p>Let's explore some basic concept that will make you a good developer</p>
            </div>
            <Suspense fallback={<span className="loading loading-bars loading-xl "></span>}>
                    <div className='w-10/12 mx-auto grid grid-cols-1 gap-7 mt-10 p-7'>
                        {
                            data.map((blog)=><Blog key={blog.id} blog={blog}></Blog>)
                        }
                    </div>
            </Suspense>
        </div>
    );
};

export default Blogs;