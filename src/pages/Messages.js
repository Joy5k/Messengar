import React from 'react';
import women from './women.jpg'
import { BsCameraVideoFill, BsThreeDots } from 'react-icons/bs';
import { MdCall } from 'react-icons/md';

const Messages = () => {
    return (
        <div className='border-r-2 h-screen'>
            {/* message header */}
           <div className='flex  px-3 py-1 bg-gray-100 parent-container '>
                <img className='w-16 h-16 rounded-full ' src={women} alt="" />  
                <div className='w-full'>
                    <p className='my-auto mx-4 text-xl font-semibold block'>Caroline</p>
                    <p className='my-auto mx-4'>Online</p>
                </div>

                <div className='  flex justify-evenly  w-6/12'>
               
                <button className='text-center relative mb-8'>
                    <MdCall className='absolute text-center  text-4xl w-10 h-10 p-2 text-blue-600 font-bold hover:bg-gray-200 rounded-full'></MdCall>
                    </button>
                    <button className=' text-center relative mb-8'>
                    <BsCameraVideoFill className='absolute text-center text-blue-600 text-2xl w-10 h-10 p-2 hover:bg-gray-200 rounded-full'></BsCameraVideoFill>
                    </button>
                    <button className=' text-center relative mb-8'>
                        <BsThreeDots className='absolute text-center text-blue-600 rounded-full w-10 h-10 p-2 bg-gray-200'></BsThreeDots>
                    </button>
                </div>
            </div>

            <div >
                {/* friend chating site      */}
            <div className='flex px-2 py-1 sm:w-full md:w-11/12 lg:w-10/12'>
                <img className='w-9 h-9 rounded-full bottom-6' src={women} alt="" />  
                <div className='w-full'>
                    <span className='my-auto mx-2  block bg-gray-200  w-fit  p-4 rounded-lg text-xl text-justify'>Md.Mehedi Hasan Joy Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, reprehenderit omnis eius
                        esse provident repellendus, corporis expedita perferendis ratione id fugiat eum, debitis commodi excepturi obcaecati voluptatem
                        
                    </span>
                    
                    {/* <span className='my-auto mx-4  block'>Md.Mehedi Hasan Joy</span> */}
                </div>
                </div>

                {/* my chating site */}
                <div className='sm:w-full md:w-10/12 lg:8/12 float-right my-4'>
                    <span className='my-auto mx-2  block bg-blue-500 text-white w-fit  p-4 rounded-lg text-xl text-justify'>Md.Mehedi Hasan Joy Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, reprehenderit omnis eius
                        esse provident repellendus, corporis expedita perferendis ratione id fugiat eum, debitis commodi excepturi obcaecati voluptatem
                        
                    </span>
                    <span className=' mx-2 my-2 float-right block bg-blue-500 text-white w-fit  p-4 rounded-lg text-xl text-justify'>Md.Mehedi Hasan Joy 
                        
                    </span>
                    
                </div>
       </div>
        </div>
    );
};

export default Messages;