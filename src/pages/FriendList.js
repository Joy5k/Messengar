import React from 'react';
import { BsCameraVideoFill } from 'react-icons/bs';
import { BiEdit, BiLogOut } from 'react-icons/bi';
import boys from './boys.jpg'
import women from './women.jpg'
import { MdVideoCall } from 'react-icons/md';

const FriendList = () => {
    return (
        <div className='relative'>
            <div className='grid grid-cols-3 my-3 mb-6'>
                <h2 className='text-4xl font-bold text-left ml-8 inline col-span-2'>Chats</h2>
                <div className='grid grid-cols-2 float-right'>
                <button className=' text-center text-4xl relative mb-8'>
                    <MdVideoCall className='absolute text-center bg-gray-200 text-4xl rounded-full w-10 h-10 p-2'></MdVideoCall>
                </button>
                <button className=' text-center relative mb-8'>
                <BiEdit className='absolute text-center bg-gray-200 text-2xl rounded-full w-10 h-10 p-2'></BiEdit>
                </button>
              </div>
          </div>
           
<form class="flex items-center mx-8 m-2">   
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Messenger" required/>
        <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
    {/* <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
    </button> */}
</form>
            <div className='flex mx-4 my-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer'>
                <img className='w-16 h-16 rounded-full' src={boys} alt="" />  
                <p className='my-auto mx-4 text-xl font-semibold'>Md.Mehedi Hasan Joy</p>
</div>
            <div className='flex mx-4 my-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer'>
                <img className='w-16 h-16 rounded-full' src={women} alt="" />  
                <p className='my-auto mx-4 text-xl font-semibold'>Caroline</p>
            </div>
            <div className='fixed bottom-0 w-3/12 h-16  mb-10 bg-gray-100'>
                <button className='flex justify-center align-middle hover:bg-gray-300'>
                    <BiLogOut className='text-5xl'></BiLogOut>
                    <span className='w-fit mt-2 mx-2 text-lg font-semibold'>Log out</span>
                </button>
            </div>
        </div>
    );
};

export default FriendList;