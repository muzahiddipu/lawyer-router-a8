import React from 'react';
import { MdDateRange } from "react-icons/md";
const Blog = ({blog}) => {
    return (
        <div className='bg-white rounded-xl p-7 shadow-md space-y-5 border-1 border-gray-500'>
            <h1 className='text-base font-bold'>{blog.title}</h1>
            <div className='border-t-2 border-dashed border-gray-200 mt-3'></div>
            <div>
                <p className='text-blue-700'>Answer:</p>
                <p><small>{blog.ans}</small></p>
            </div>
            <div className='border-t-2 border-dashed border-gray-200 mt-3'></div>
            <div className='flex items-center gap-3'>
                <span className='text-gray-600'><MdDateRange /></span>
                <p className='text-gray-400'><small>{blog.add}</small></p>
            </div>
        </div>
    );
};

export default Blog;