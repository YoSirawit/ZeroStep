"use client"
import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Select from "react-select";
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

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

async function getAnnouncement(){
  try{
    const announcement = await fetch('https://zero-step-wheat.vercel.app/api/get-announcement');
    // const ann_data = await announcement.json();
    // // console.log(ann_data.announcement);
    // return ann_data.announcement;
  } catch (error){
      console.error(error);
  }
}

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

// Main component
export default function Home() {
  return (
    <div>
      <Navbar />
      <JobSearch />
    </div>
  );
}

// Data for jobs
const jobs = [
  { field: 'FullStack Developer', position: 'IT', compensation: 'THB 300/day', location: 'Bangkok', worktype: 'Full-time', companyname: 'ITforgerenger' },
  { field: 'Database Designer', position: 'DSBA', compensation: 'Not specified', location: 'Bangkok', worktype: 'Full-time', companyname: 'AItakeover' },
];

// Options for the Select components
const positionOptions = [
  { value: "FullStack Developer", label: "FullStack Developer" },
  { value: "Database Designer", label: "Database Designer" },
  { value: "AI Developer", label: "AI Developer" },
];

const fieldOptions = [
  { value: "IT", label: "IT" },
  { value: "DSBA", label: "DSBA" },
  { value: "AIT", label: "AIT" },
];

const workTypeOptions = [
  { value: "Work From Home", label: "Work From Home" },
  { value: "In-office", label: "In-office" },
  { value: "Hybrid", label: "Hybrid" },
];

const locationOptions = [
  { value: "Bangkok", label: "Bangkok" },
  { value: "Roi-et", label: "Roi-et" },
  { value: "Chiang-Mai", label: "Chiang-Mai" },
  { value: "Nonthaburi", label: "Nonthaburi" },
];

const companyNameOptions = [
  { value: "ITforgerenger", label: "ITforgerenger" },
  { value: "AItakeover", label: "AItakeover" },
  { value: "DataMaster", label: "DataMaster" },
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
  const [selectedJob, setSelectedJob] = useState(null);  // Moved useState inside the component

  // Handle input changes for Select components
  const handleInputChange = (selectedOptions, actionMeta) => {
    const { name } = actionMeta;
    setFilters({
      ...filters,
      [name]: selectedOptions || [],
    });
  };

  // Log search actions
  const handleFindJob = () => {
    console.log('ค้นหางานด้วยฟิลเตอร์:', filters);
    console.log('Searching for:', searchText);
  };

  const handleMatchJob = () => {
    console.log('จับคู่งานด้วยฟิลเตอร์:', filters);
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
          <div className="filter-options my-4 flex flex-wrap gap-4"> {/* Use flex-wrap for wrapping */}
            {/* Select components for job filters */}
            <div className="flex-grow md:w-1/3"> {/* Adjust width for responsive design */}
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
                name="compensation"
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
        </div>

        {/* Job results */}
        <div className="flex gap-5">
      {/* Job List */}
      <div className="w-1/3 border-r pr-5">
        {jobs.map((job, i) => (
          <div
            key={i}
            onClick={() => setSelectedJob(job)}
            className={`p-5 mb-4 border rounded-lg cursor-pointer ${selectedJob?.position === job.position ? 'border-blue-500' : 'border-gray-300'}`}
          >
            {/* แสดงข้อมูลงาน */}
            <h3 className="text-lg font-semibold">{job.companyname}</h3>
            <p className="text-gray-500">{job.position}</p>
            <p className="text-gray-500">{job.location}</p>
            <p className="text-gray-500">{job.compensation}</p>
          </div>
        ))}
      </div>

            {/* Job Detail */}
            <div className="w-2/3">
              {selectedJob ? (
                <div className="border p-5"> {/* เพิ่ม border และ padding */}
                  {/* แสดงรายละเอียดงานที่ถูกเลือก */}
                  <h2 className="text-2xl font-bold">{selectedJob.companyname}</h2>
                  <p className="text-gray-600">{selectedJob.position}</p>
                  <p>{selectedJob.location} | {selectedJob.worktype}</p>
                  <p>{selectedJob.compensation}</p>

                  {/* ปุ่ม Quick apply และ Save */}
                  <div className="mt-5">
                    <button className="bg-pink-500 text-white py-2 px-4 rounded-lg mr-3">Quick apply</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save</button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">Please select a job to see details.</p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

