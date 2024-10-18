"use client";
import React, { useState } from 'react';
import NavbarCom from "../components/NavbarCom";
import Link from 'next/link';

// ไปโหลดfont awesomeตามโค้ดบรรทัด 4
// npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faEye, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function CompanyPage() {
    const [isJobContent1Visible, setJobContent1Visible] = useState(true);
    const [isJobContent2Visible, setJobContent2Visible] = useState(true);
    const [jobs, setJobs] = useState([
        { title: 'Job Name 1', candidates: 3, isOpen: true },
        { title: 'Job Name 2', candidates: 3, isOpen: false },
        { title: 'Job Name 3', candidates: 3, isOpen: true }
    ]);

    const toggleJobContent1 = () => {
        setJobContent1Visible(!isJobContent1Visible);
    };

    const toggleJobContent2 = () => {
        setJobContent2Visible(!isJobContent2Visible);
    };

    const toggleJobStatus1 = () => {
        setJobs(prevJobs => 
            prevJobs.map((job, index) => 
                index === 0 ? { ...job, isOpen: !job.isOpen } : job
            )
        );
    };

    const toggleJobStatus2 = () => {
        setJobs(prevJobs => 
            prevJobs.map((job, index) => 
                index === 1 ? { ...job, isOpen: !job.isOpen } : job
            )
        );
    };

    return (
        <div>
            <NavbarCom />
            <div className='container mx-auto py-5 px-10'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-bold'>Jobs board</h1>
                    <Link href="/createPost" legacyBehavior>
                        <button className="createBtn">
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Post a job
                        </button>
                    </Link>
                </div>
                <hr className='my-3' />
            </div>

            {/* job Content1 */}
            <div className='container mx-auto py-5 px-10'>
                <div className="bg-gray-100 p-5 rounded-lg shadow">
                    <header className="flex justify-between items-center py-3 mb-4">
                        <div className="flex items-center">
                            <h2 className="text-xl font-bold">Job Name 1</h2>
                            {jobs[0].isOpen ? (
                                <div className="ml-4 w-3 h-3 bg-green-500 rounded-full"></div>
                            ) : (
                                <div className="ml-4 w-3 h-3 bg-red-500 rounded-full"></div>
                            )}
                            <span className="text-sm ml-2 text-gray-500">{jobs[0].isOpen ? 'สถานะ: เปิดรับสมัคร' : 'สถานะ: ปิดรับสมัคร'}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500 mr-2">{jobs[0].candidates} Candidates</span>
                            <button className="p-2 text-gray-500 hover:text-gray-800" onClick={toggleJobContent1}>
                                <FontAwesomeIcon icon={isJobContent1Visible ? faMinus : faPlus} />
                            </button>
                        </div>
                    </header>

                    {isJobContent1Visible && (
                        <div className="grid grid-cols-4 gap-5">
                            {/* Candidate 1 */}
                            <div className="bg-white p-5 rounded shadow">
                                <h3 className="text-xl font-bold">John Doe</h3>
                                <p>21 Years</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                <p className="font-bold text-red-500">98%</p>
                            </div>
                            {/* Candidate 2 */}
                            <div className="bg-white p-5 rounded shadow">
                                <h3 className="text-xl font-bold">Mary Jane</h3>
                                <p>23 Years</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                <p className="font-bold text-red-500">92%</p>
                            </div>
                            {/* Candidate 3 */}
                            <div className="bg-white p-5 rounded shadow">
                                <h3 className="text-xl font-bold">Jade Wilson</h3>
                                <p>28 Years</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                <p className="font-bold text-red-500">92%</p>
                            </div>
                        </div>
                    )}

                    {/* Button to toggle job status */}
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={toggleJobStatus1}
                            className="p-2 rounded-md bg-black text-white">
                            {jobs[0].isOpen ? 'ปิดรับสมัคร' : 'เปิดรับสมัคร'}
                        </button>
                    </div>
                </div>
            </div>

            {/* job Content2 */}
            <div className='container mx-auto py-5 px-10'>
                <div className="bg-gray-100 p-5 rounded-lg shadow">
                    <header className="flex justify-between items-center py-3 mb-4">
                        <div className="flex items-center">
                            <h2 className="text-xl font-bold">Job Name 2</h2>
                            {jobs[1].isOpen ? (
                                <div className="ml-4 w-3 h-3 bg-green-500 rounded-full"></div>
                            ) : (
                                <div className="ml-4 w-3 h-3 bg-red-500 rounded-full"></div>
                            )}
                            <span className="text-sm ml-2 text-gray-500">{jobs[1].isOpen ? 'สถานะ: เปิดรับสมัคร' : 'สถานะ: ปิดรับสมัคร'}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500 mr-2">{jobs[1].candidates} Candidates</span>
                            <button className="p-2 text-gray-500 hover:text-gray-800" onClick={toggleJobContent2}>
                                <FontAwesomeIcon icon={isJobContent2Visible ? faMinus : faPlus} />
                            </button>
                        </div>
                    </header>

                    {isJobContent2Visible && (
                        <div className="grid grid-cols-4 gap-5">
                            {/* Candidate 1 */}
                            <div className="bg-white p-5 rounded shadow">
                                <h3 className="text-xl font-bold">Alice Smith</h3>
                                <p>26 Years</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                <p className="font-bold text-red-500">89%</p>
                            </div>
                            {/* Candidate 2 */}
                            <div className="bg-white p-5 rounded shadow">
                                <h3 className="text-xl font-bold">Bob Johnson</h3>
                                <p>30 Years</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                <p className="font-bold text-red-500">85%</p>
                            </div>
                            {/* Candidate 3 */}
                            <div className="bg-white p-5 rounded shadow">
                                <h3 className="text-xl font-bold">Charlie Brown</h3>
                                <p>29 Years</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                <p className="font-bold text-red-500">92%</p>
                            </div>
                        </div>
                    )}

                    {/* Button to toggle job status */}
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={toggleJobStatus2}
                            className="p-2 rounded-md bg-black text-white">
                            {jobs[1].isOpen ? 'ปิดรับสมัคร' : 'เปิดรับสมัคร'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyPage;