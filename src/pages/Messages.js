import React from 'react';
import women from './women.jpg'
import { BsCameraVideoFill, BsThreeDots } from 'react-icons/bs';
import { MdCall } from 'react-icons/md';

const Messages = () => {
    return (
        <div>
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
              
<form className='border'>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="" required/>
            <button type="submit" class="absolute top-0 right-0 bottom-0 p-2.5 text-sm font-medium text-white bg-blue-700  border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Send
            </button>
        </div>
    </div>
</form>

      </div>
    );
};

export default Messages;