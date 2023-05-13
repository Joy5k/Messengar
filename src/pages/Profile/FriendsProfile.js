import React from 'react';
import women from '../women.jpg'
import { HiUserCircle } from 'react-icons/hi';
import { MdNotifications, MdOutlinePermMedia, MdOutlineReportProblem } from 'react-icons/md';
import { AiFillEdit, AiFillFileText, AiFillStop, AiOutlineSearch, AiTwotoneLike } from 'react-icons/ai';
import { TbPinnedFilled } from 'react-icons/tb';
import { BsFillStopCircleFill, BsLink45Deg } from 'react-icons/bs';

const FriendsProfile = () => {
    return (
        <div>
   
<div className="w-full h-full pt-10 bg-white  ">
   
    <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={women } alt=""/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
             {/* check friend status        */}
        <span className="text-sm  text-md font-medium">Online</span>
                    <span className="text-sm  text-md font-medium">Active 1hr ago</span>
                    
                {/* friend details     */}
        <div className="flex mt-4 space-x-8 md:mt-6">
                        <button className=' text-center '>
                            <HiUserCircle className='text-4xl mx-auto bg-gray-200 p-1 rounded-full'></HiUserCircle>
                            <p>Profile</p>
           </button>
                        <button className='text-center'>
                            <MdNotifications className='text-4xl mx-auto bg-gray-200 p-1 rounded-full'></MdNotifications>
                        <p>Mute</p>
           </button>
                        <button className='text-center'>
                            <AiOutlineSearch className='text-4xl mx-auto bg-gray-200 p-1 rounded-full'></AiOutlineSearch>
                            <p>Search</p>
           </button>
        </div>
    </div>
</div>
<section className="bg-white">
        <div className="container flex flex-col justify-center  mx-auto ">
         
            <div className="space-y-4 text-left ">
                <details className="w-full border rounded-lg border-none cursor-pointer ">
                            <summary className="px-4 focus-visible:ring-violet-400 font-semibold  text-xl">Chat info</summary>
                            <div className='flex justify-start align-middle ml-4'>
                            <span className='text-2xl mx-1 bg-gray-200 p-1 rounded-full'>
                                <TbPinnedFilled></TbPinnedFilled>
                            </span>
                    <p className=" border-none font-semibold  text-xl ">View pinned Message.</p>
                         </div>
                </details>
                <details className="cursor-pointer w-full border rounded-lg border-none ">
                    <summary className="px-4 focus:outline-none focus-visible:ring-violet-400 font-semibold  text-xl">Customize chat</summary>
                    <div className='flex justify-start align-middle ml-4 mb-2'>
                            <span className='text-2xl mx-1 bg-gray-200 p-1 rounded-full'>
                                <BsFillStopCircleFill className='text-blue-500'></BsFillStopCircleFill>
                            </span>
                    <p className=" border-none font-semibold  text-xl">Change theme.</p>
                         </div>
                         <div className='flex justify-start align-middle ml-4'>
                            <span className='text-2xl mx-1 bg-gray-200 p-1 rounded-full'>
                                <AiTwotoneLike className='text-blue-500 '></AiTwotoneLike>
                            </span>
                    <p className=" border-none font-semibold  text-xl">Change emoji.</p>
                         </div>
                         <div className='flex justify-start align-middle ml-4'>
                            <span className='text-2xl mx-1 bg-gray-200 p-1 rounded-full'>
                                <AiFillEdit className='text-gray-500 '></AiFillEdit>
                            </span>
                    <p className=" border-none font-semibold text-xl">Change nickname.</p>
                         </div>
                </details>
                <details className="cursor-pointer w-full border rounded-lg border-none ">
                    <summary className="px-4 focus:outline-none focus-visible:ring-violet-400 font-semibold  text-xl">Media,files and links</summary>
                    <div className='flex justify-start align-middle ml-4 my-4'>
                            <span className='text-2xl mx-1  bg-gray-200 p-1 rounded-full'>
                                <MdOutlinePermMedia className='text-gray-500'></MdOutlinePermMedia>
                            </span>
                    <p className=" border-none font-semibold  text-xl">Media.</p>
                         </div>
                         <div className='flex justify-start align-middle ml-4 my-4'>
                            <span className='text-2xl mx-1  bg-gray-200 p-1 rounded-full'>
                                <AiFillFileText className='text-gray-500 '></AiFillFileText>
                            </span>
                    <p className=" border-none font-semibold  text-xl">Files.</p>
                         </div>
                         <div className='flex justify-start align-middle ml-4 my-4'>
                            <span className='text-2xl mx-2 bg-gray-200 p-1 rounded-full'>
                                <BsLink45Deg className='text-gray-500 '></BsLink45Deg>
                            </span>
                    <p className=" border-none font-semibold text-xl ">Links</p>
                         </div>
                </details>
                <details className="cursor-pointer w-full border rounded-lg border-none ">
                    <summary className="px-4 focus:outline-none focus-visible:ring-violet-400 font-semibold  text-xl">Privacy and support</summary>
                    <div className='flex justify-start align-middle ml-4 my-4'>
                            <span className='text-2xl mx-1  bg-gray-200 p-1 rounded-full'>
                            <MdNotifications className=' text-gray-600 '></MdNotifications>
                            </span>
                    <p className=" border-none font-semibold  text-xl">Mute notifications.</p>
                         </div>
                         <div className='flex justify-start align-middle ml-4 my-4'>
                            <span className='text-2xl mx-1  bg-gray-200 p-1 rounded-full'>
                                <AiFillStop className='text-gray-600 '></AiFillStop>
                            </span>
                    <p className=" border-none font-semibold  text-xl">Block.</p>
                         </div>
                         <div className='flex justify-start align-middle ml-4 my-4'>
                            <span className='text-2xl mx-2  p-1 rounded-full'>
                                <MdOutlineReportProblem className='text-gray-700 '></MdOutlineReportProblem>
                            </span>
                                <div className='flex flex-col'>
                                <p className=" border-none font-semibold text-xl ">Report</p>
                                <span className='text-gray-500'>Give feedback and report the <br /> conversation</span>
                                </div>
                         </div>
                </details>
            </div>
        </div>
    </section>

</div>
    );
};

export default FriendsProfile;