"use client"
import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar";
import Select from "react-select";
import Link from 'next/link';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import hardskill from "./components/hardskill"
import HardSkill from './components/hardskill';

async function getPets(){
  try{
    const pets = await fetch('https://zero-step-wheat.vercel.app/api/get-pet-info', {cache: 'no-store'});
    const pets_data = await pets.json();
    // console.log(data.pets);
    return pets_data.pets;
  } catch (error){
      console.error(error);
  }

}

// async function getAnnouncement(){
//   try{
//     const announcement = await fetch('https://localhost:3000/api/get-announcement');
//     const ann_data = await announcement.json();
//     // console.log(ann_data.announcement);
//     return ann_data.announcement;
//   } catch (error){
//       console.error(error);
//   }
// }

async function matchAnnouncement(){
  try{
    const announcement = await fetch('http://localhost:3000/api/get-match-announcement', {cache: 'no-store'});
    const data = await announcement.json();
    // const ann_data = await announcement.json();
    // // console.log(ann_data.announcement);
    return data;
  } catch (error){
      console.error(error);
  }
}

// async function getAnnouncement(){
//   try{
//     const announcement = await fetch('http://localhost:3000/api/get-announcement', {cache: 'no-store'});
//     const data = await announcement.json();
//     return data;
//   }catch(error){
//     console.log(error);
//   }
// }

let job_list;
let data = [];
let announcementTest = [];

// Data for filter
// for database link
//-------------------------------------------------------
const positionOptions = [
  { value: 'FullStack Developer', label: 'FullStack Developer' },
  { value: 'Database Designer', label: 'Database Designer' },
  { value: 'AI Developer', label: 'AI Developer' },
];

const fieldOptions = [
  { value: 'IT', label: 'IT' },
  { value: 'DSBA', label: 'DSBA' },
  { value: 'AI', label: 'AI' },
];

const companyNameOptions = [
  { value: 'ITforgerenger', label: 'ITforgerenger' },
  { value: 'AItakeover', label: 'AItakeover' },
  { value: 'DataMaster', label: 'DataMaster' },
];

const workTypeOptions = [
  { value: 'Work From Home', label: 'Work From Home' },
  { value: 'In-office', label: 'In-office' },
  { value: 'Hybrid', label: 'Hybrid' },
];

const locationOptions = [
  { value: 'Bangkok', label: 'Bangkok' },
  { value: 'Roi-et', label: 'Roi-et' },
  { value: 'Chiang Mai', label: 'Chiang Mai' },
  { value: 'Nonthaburi', label: 'Nonthaburi' },
];

// Main component
export default function Home() {

  const [jobTest, setJobTest] = useState([]);
  async function getAnnouncement(){
    try{
      const announcement = await fetch('http://localhost:3000/api/get-announcement');
      const ann_data = await announcement.json();
      console.log('from direct database', ann_data.ann);
      setJobTest(ann_data.ann);
      // return ann_data.announcement;
    } catch (error){
        console.error(error);
    }
  }

  useEffect(() => {

    getAnnouncement();

  }, [])

  jobs = jobTest;
  console.log('current',jobs);



  return (
    <div>
      <Navbar />
      <JobSearch />
    </div>
  );
}

// Data for announcement jobs
// for database link
//-------------------------------------
let jobs = [
  { field: 'IT', position: 'FullStack Developer', compensation: 'Not specified', location: 'Not specified', worktype: 'In-office', companyname: 'ITforgerenger' },
  { field: 'DSBA', position: 'Database Designer', compensation: 'Not specified', location: 'Not specified', worktype: 'In-office', companyname: 'AItakeover' },
  { field: 'AIT', position: 'AI Developer', compensation: 'Not specified', location: 'Not specified', worktype: 'In-office', companyname: 'AItakeover' },
  { field: 'DSBA', position: 'Data Analyst', compensation: 'Not specified', location: 'Not specified', worktype: 'In-office', companyname: 'DataMaster' },
  { field: 'IT', position: 'Front-end Developer', compensation: 'Not specified', location: 'Not specified', worktype: 'In-office', companyname: 'ITforgerenger' },
  { field: 'IT', position: 'System Designer', compensation: 'Not specified', location: 'Not specified', worktype: 'In-office', companyname: 'ITforgerenger' },
  
  // Add more jobs if needed
];

// Job Search component
function JobSearch() {
  // State for filters and search text
  const [filters, setFilters] = useState({
    position: [],
    companyName: [],
    field: [],
    workType: [],
    location: [],
  });
  const [searchText, setSearchText] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState([]); // New state to store filtered jobs
  const [isSearchClicked, setIsSearchClicked] = useState(false); // Track if search button is clicked
  const [isMatchClicked, setIsMatchClicked] = useState(false);
  const [matchedJobs, setMatchJobs] = useState([]);

  // Handle input changes for Select components
  const handleInputChange = (selectedOptions, actionMeta) => {
    const { name } = actionMeta;
    setFilters({
      ...filters,
      [name]: selectedOptions || [],
    });
  };

  // Filter jobs based on the selected filters
  const handleFindJob = () => {
    const result = jobs.filter(job => {
      const matchPosition = filters.position.length === 0 || filters.position.some(p => p.value === job.position);
      const matchCompany = filters.companyName.length === 0 || filters.companyName.some(c => c.value === job.companyname);
      const matchField = filters.field.length === 0 || filters.field.some(f => f.value === job.field);
      const matchWorkType = filters.workType.length === 0 || filters.workType.some(w => w.value === job.worktype);
      const matchLocation = filters.location.length === 0 || filters.location.some(l => l.value === job.location);

      return matchPosition && matchCompany && matchField && matchWorkType && matchLocation;
    });

    setIsMatchClicked(false);
    setFilteredJobs(result); // Store filtered jobs in state
    setIsSearchClicked(true); // Indicate that search has been performed
  };

  const handleMatchJob = async () => {
    console.log('จับคู่งานด้วยฟิลเตอร์:', filters);
    try{
      const response = await matchAnnouncement();
      console.log(response.announcement);
      data = response.announcement;
      console.log(data);

      setIsSearchClicked(false);
      setMatchJobs(data);
      setIsMatchClicked(true);
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-5 px-10">
      <div className="top-row flex flex-col">
        <div className="filters bg-gray-100 p-5 rounded-lg shadow mb-5">
          <h1 className="text-xl font-bold mb-2 flex justify-between items-center">
            Find your job❤️
            <button 
              onClick={handleMatchJob} 
              className="text-base bg-red-500 text-white py-2 px-4 rounded w-32"
            >
              จับคู่งาน! ✨
            </button>
          </h1>
          <div className="action-buttons flex gap-3 mb-3 justify-between items-center">
            <input
              type="text"
              className="border border-gray-300 rounded py-2 px-4 flex-grow"
              placeholder="Search for jobs..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button 
              onClick={handleFindJob} 
              className="text-base font-bold bg-orange-500 text-white py-2 px-4 rounded w-32"
            >
              ค้นหางาน!
            </button>
          </div>
          {/* Job filter */}
          <div className="filter-options my-4 flex flex-wrap gap-4">
            <div className="flex-grow md:w-1/3">
              <Select
                name="position"
                isMulti
                options={positionOptions}
                value={filters.position}
                onChange={handleInputChange}
                placeholder="position"
                className="w-full"
              />
            </div>
            <div className="flex-grow md:w-1/3">
              <Select
                name="field"
                isMulti
                options={fieldOptions}
                value={filters.field}
                onChange={handleInputChange}
                placeholder="field"
                className="w-full"
              />
            </div>
            <div className="flex-grow md:w-1/3">
              <Select
                name="companyName"
                isMulti
                options={companyNameOptions}
                value={filters.companyName}
                onChange={handleInputChange}
                placeholder="companyName"
                className="w-full"
              />
            </div>
            <div className="flex-grow md:w-1/3">
              <Select
                name="workType"
                isMulti
                options={workTypeOptions}
                value={filters.workType}
                onChange={handleInputChange}
                placeholder="workType"
                className="w-full"
              />
            </div>
            <div className="flex-grow md:w-1/3">
              <Select
                name="location"
                isMulti
                options={locationOptions}
                value={filters.location}
                onChange={handleInputChange}
                placeholder="location"
                className="w-full"
              />
            </div>
          </div>
          {/* Job filter end */}
        </div>


        {isMatchClicked && data.length > 0 ? (
          <div className="flex gap-5">
            {/* Job results ย่อฝั่งซ้าย */}
            <div className="w-1/3 border-r pr-5">
              {data.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`p-5 mb-4 border rounded-lg cursor-pointer ${selectedJob?.id === job.id ? 'border-blue-500' : 'border-gray-300'}`}
                >
                  <h3 className="text-lg font-semibold">{job.companyname}</h3>
                  <p className="text-gray-500">{job.position}</p>
                  <p className="text-gray-500">{job.location}</p>
                  <p className="text-black-500">ค่าจ้างรายวัน : {job.compensation} บาท</p>
                  <p className="text-red-500">Compatibility : {job.score} %</p>
                </div>
              ))}
            </div>

            {/* Job results เต็มฝั่งขวา */}
            <div className="w-2/3">
              {selectedJob ? (
                <div className="border p-5">
                  <h2 className="text-2xl font-bold">{selectedJob.companyname}</h2>
                  <p className="text-gray-600">{selectedJob.position}</p>
                  <p>{selectedJob.worktype}</p>
                  <p className="text-black-500">ค่าจ้างรายวัน : {selectedJob.compensation} บาท</p>
                  <p>{selectedJob.location}</p>
                  <p className="text-red-500">Compatibility : {selectedJob.score} %</p>

                  {/* hard skill reqตรงนี้ <p>{selectedJob.ใส่เพิ่ม}</p> */}
                  <p className="text-black-500 text-bold">Hard skill requirement :</p>
                  {selectedJob && 
                    selectedJob.hardSkillReq.map((ann) =>{
                      return(
                      <HardSkill key={ann} hardSkillReq={ann}/>
                    )})
                  }
                  {/* <p className="text-gray-500">• HTML</p>
                  <p className="text-gray-500">• Javascript</p> */}
                  <p className="text-black-500 text-bold">Responsibilities :</p>
                  <p className="text-gray-500 ">{selectedJob.responsibility}</p>

                  <div className="mt-5">
                    <Link href="/homeSendResume">
                      <button className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-3">Send Resume</button>
                    </Link>
                  </div>
                </div>
              ) : (
                <p className="text-black-600">Please select a job to see details.</p>
              )}
            </div>
          </div>
        ) : isMatchClicked && data.length === 0 ? (
          <p className="text-gray-600">ไม่พบงานที่ตรงกับเงื่อนไขที่เลือก</p>
        ) : null}

        {/* Job results - Show only when the button is clicked */}
        {isSearchClicked && filteredJobs.length === 0 ? (
          <p className="text-gray-600">ไม่พบงานที่ตรงกับเงื่อนไขที่เลือก</p>
        ) : (
          isSearchClicked && filteredJobs.length > 0 && (
          <div className="flex gap-5">
            {/* Job results ย่อฝั่งซ้าย */}
            <div className="w-1/3 border-r pr-5">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`p-5 mb-4 border rounded-lg cursor-pointer ${selectedJob?.id === job.id ? 'border-blue-500' : 'border-gray-300'}`}
                >
                  <h3 className="text-lg font-semibold">{job.companyname}</h3>
                  <p className="text-gray-500">{job.position}</p>
                  <p className="text-gray-500">{job.location}</p>
                  <p className="text-gray-500">ค่าจ้างรายวัน : {job.compensation} บาท</p>
                </div>
              ))}
            </div>

            {/* Job results เต็มฝั่งขวา */}
            <div className="w-2/3">
              {selectedJob ? (
                <div className="border p-5">
                  <h2 className="text-2xl font-bold">{selectedJob.companyname}</h2>
                  <p className="text-gray-600">{selectedJob.position}</p>
                  <p>{selectedJob.location}</p>
                  <p>{selectedJob.worktype}</p>
                  <p className="text-black-500">ค่าจ้างรายวัน : {selectedJob.compensation} บาท</p>

                  {/* hard skill reqตรงนี้ <p>{selectedJob.ใส่เพิ่ม}</p> */}
                  {/* -------------------------------------------------------------------------------------------------------------------------------*/}
                  <p className="text-black-500 text-bold">Hard skill requirement :</p>
                  {selectedJob && 
                    selectedJob.hardSkillReq.map((ann) =>{
                      return(
                      <HardSkill key={ann} hardSkillReq={ann}/>
                    )})
                  }
                  {/* <p className="text-gray-500">• HTML</p>
                  <p className="text-gray-500">• JavaScript</p> */}
                  <p className="text-black-500 text-bold">Responsibilities :</p>
                  <p className="text-gray-500 ">{selectedJob.responsibility}</p>
                  <p className="text-black-500 text-bold ">Location :</p>
                  <p className="text-gray-500 ">{selectedJob.location_}</p>

                    <div className="mt-5">
                    <Link href="/homeSendResume">
                      <button className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-3">Send Resume</button>
                    </Link>
                  </div>
                </div>
              ) : (
                <p className="text-black-600">Please select a job to see details.</p>
              )}
            </div>
          </div>
        ) 
        )}
        {/* {isMatchClicked = true? (
              <div className='flex gap-5'>
                {data.map((job) => (
                  <div
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className={`p-5 mb-4 border rounded-lg cursor-pointer ${selectedJob?.position === job.position ? 'border-blue-500' : 'border-gray-300'}`}
                  >
                    <h3 className="text-lg font-semibold">{job.companyname}</h3>
                    <p className="text-gray-500">{job.position}</p>
                    <p className="text-gray-500">{job.location}</p>
                    <p className="text-gray-500">{job.compensation}</p>
                  </div>
                ))}
              </div>
            )} */}


      </div>
    </div>
  );
}
