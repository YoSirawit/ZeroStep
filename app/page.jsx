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
  { value: 'AIT', label: 'AIT' },
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
const jobs = [
  { field: 'IT', position: 'FullStack Developer', compensation: 'THB 300/day', location: 'Bangkok', worktype: 'Full-time', companyname: 'ITforgerenger' },
  { field: 'DSBA', position: 'Database Designer', compensation: 'Not specified', location: 'Bangkok', worktype: 'Full-time', companyname: 'AItakeover' },
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

    setFilteredJobs(result); // Store filtered jobs in state
    setIsSearchClicked(true); // Indicate that search has been performed
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
        </div>

        {/* Job results - Show only when the button is clicked */}
        {isSearchClicked && filteredJobs.length > 0 ? (
          <div className="flex gap-5">
            <div className="w-1/3 border-r pr-5">
              {filteredJobs.map((job, i) => (
                <div
                  key={i}
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

            <div className="w-2/3">
              {selectedJob ? (
                <div className="border p-5">
                  <h2 className="text-2xl font-bold">{selectedJob.companyname}</h2>
                  <p className="text-gray-600">{selectedJob.position}</p>
                  <p>{selectedJob.location} | {selectedJob.worktype}</p>
                  <p>{selectedJob.compensation}</p>
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
        ) : (
          isSearchClicked && (
            <p className="text-gray-600">ไม่พบงานที่ตรงกับเงื่อนไขที่เลือก</p>
          )
        )}
      </div>
    </div>
  );
}
