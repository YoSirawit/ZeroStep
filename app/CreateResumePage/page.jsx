"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const CreateResume = () => {
    const [userData, setUserData] = useState(null);
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData){
            setUserData(JSON.parse(storedData));
        }
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Render nothing on the server
    }

    return (
        <div>
            <Navbar/>
            <div className="flex h-[1150px] mx-auto bg-gray-100">
                {/* {Template side} */}
                <div className="p-6 w-1/4 bg-gray-800 text-white flex h-[1150px] flex flex-col">
                    <h2 className="pt-5 text-4xl font-bold pb-5 place-self-center">Template</h2>
                    <div className="p-4 space-y-4 bg-gray-800 overflow-y-auto flow justify-items-center flex h-[900px] flex flex-col">
                        <Image src='/picture/resumeT1.png' alt="ResumeTemplate1" width={250} height={250} className='pb-10'/>
                        <Image src='/picture/resumeT2.png' alt="ResumeTemplate2" width={250} height={250} className='pb-10'/>
                        <Image src='/picture/resumeT3.png' alt="ResumeTemplate3" width={250} height={250} className='pb-10'/>
                        <Image src='/picture/resumeT4.png' alt="ResumeTemplate4" width={250} height={250} className='pb-10'/>
                    </div>
                </div>

                {/* {show example resume file side} */}
                <div className="flex-1 p-12 flex-col">
                    <h2 className="text-4xl font-bold pb-5 place-self-center">Your Resume</h2>
                    {/* example page */}
                    <div className='bg-white p-16 round-lg shadow-lg '>
                        <h2 className='text-xl font-bold'>ข้อมูลส่วนตัว</h2>
                        <div style={{ padding: '5px'}}>
                            <hr style={{ background: 'black', height: '2px', border: 'none', margin:'10px 0' }}/>
                        </div>
                        {/* first row */}
                        <div className='grid grid-cols-2 gap4 pt-50'>
                            <p>
                                <span className="font-semibold">ชื่อ-นามสกุล : </span>
                                <span>{userData.firstName} {userData.lastName}</span>
                            </p>
                            <div className='space-x-4 flex items-start'>
                                <label className="font-semibold whitespace-nowrap">เบอร์โทรศัพท์ : </label>
                                <input type='text' className='w-full p-0 border rounded-md' style = {{width:150}}/>
                            </div>
                        </div>

                        {/* second row */}
                        <div className='grid grid-cols-2 gap4 pt-5'>
                            <span>
                                <label className="font-semibold whitespace-nowrap">วัน-เดือน-ปีเกิด : </label>
                                <span>{userData.dateOfBirth}</span>
                            </span>
                            <span>
                                <label className="font-semibold whitespace-nowrap">E-mail : </label>
                                <input type='text' className='w-full p-0 border rounded-md' style = {{width: 250}}/>
                            </span>
                        </div>

                        {/* third row */}
                        <div className="flex items-center space-x-2 pt-5">
                            <label className="font-semibold whitespace-nowrap">ที่อยู่ปัจจุบัน : </label>
                            <span>{userData.location}</span>
                        </div>
                        <div className='flex items-center space-x-2 pt-5 pb-5'>
                            <label className="font-semibold whitespace-nowrap">สายงานที่สนใจ : </label>
                            <span>{userData.interestedField}</span>
                        </div>

                        <h2 className='text-xl font-bold'>การศึกษา</h2>
                        <div style={{ padding: '5px'}}>
                            <hr style={{ background: 'black', height: '2px', border: 'none', margin:'10px 0' }}/>
                        </div>
                        {/* forth row */}
                        <div className='grid grid-cols-2 gap4'>
                            <p>
                                <span className="font-semibold">มหาวิทยาลัย : </span>
                                <span>{userData.education}</span>
                            </p>
                            <p>
                                <span className="font-semibold"> ระดับการศึกษา/ชั้นปีที่ : </span>
                                <span>{userData.studyYear}</span>
                            </p>
                        </div>

                        {/* fivth row */}
                        <div className='grid grid-cols-2 gap4 pt-5 pb-5'>
                            <span>
                                <label className="font-semibold whitespace-nowrap">คณะ : </label>
                                <span>{userData.faculty}</span>
                            </span>
                            <span>
                                <label className="font-semibold whitespace-nowrap">สาขา/แขนง : </label>
                                <input type='text' className='w-full p-0 border rounded-md' style = {{width: 250}}/>
                            </span>
                        </div>

                        <h2 className='text-xl font-bold'>ทักษะ</h2>
                        <div style={{ padding: '5px'}}>
                            <hr style={{ background: 'black', height: '2px', border: 'none', margin:'10px 0'}}/>
                        </div>
                        {/* sixth-seventh row */}
                        <div className='pb-5'>
                            <label className="font-semibold mb-2">ทักษะด้านอารมณ์ (Soft Skill)</label>
                            <p className='pb-4'>{userData.softSkill}</p>
                            <label className="font-semibold mb-2">ทักษะด้านเชิงเทคนิค (Hard Skill)</label>
                            <p>{userData.hardSkill}</p>
                        </div>

                        <h2 className='text-xl font-bold'>ประสบการณ์การทำงานและผลงาน</h2>
                        <div style={{ padding: '5px'}}>
                            <hr style={{ background: 'black', height: '2px', border: 'none', margin:'10px 0' }}/>
                        </div>
                        {/* eighth row */}
                        <div>
                            <div className='pb-5'>
                                <label className="font-semibold mb-2">ประสบการณ์การทำงาน</label>
                                <p className='pb-4'>{userData.workExperience}</p>
                                <label className="font-semibold mb-2">ผลงาน</label>
                                <p>{userData.contribution}</p>
                            </div>
                        </div>
                    </div> 
                    {/* end example page */}
                    <div className='mt-10 flex space-x-4 flex justify-center'>
                        <Link href='/profile' legacyBehavior>
                            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-zinc-600 transition"> BACK </button>
                        </Link>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"> DOWNLOAD </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateResume;
