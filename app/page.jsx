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

  const jobTitleOptions = [
    { value: "FullStack Developer", label: "FullStack Developer" },
    { value: "Database Designer", label: "Database Designer" },
    { value: "AI Developer", label: "AI Developer" },
  ];
  
  const facultyOptions = [
    { value: "IT", label: "IT" },
    { value: "DSBA", label: "DSBA" },
    { value: "AIT", label: "AIT" },
  ];
  
  const workTypeOptions = [
    { value: "Work From Home", label: "Work From Home" },
    { value: "In-office", label: "In-office" },
    { value: "Hybrid", label: "Hybrid" },
  ];
  
  const provinceOptions = [
    { value: "Bangkok", label: "Bangkok" },
    { value: "Roi-et", label: "Roi-et" },
    { value: "Chiang-Mai", label: "Chiang-Mai" },
    { value: "Nonthaburi", label: "Nonthaburi" },
  ];
  
  const workHourOptions = [
    { value: "9:00-12:00", label: "9:00-12:00" },
    { value: "12:00-16:00", label: "12:00-16:00" },
    { value: "16:00-21:00", label: "16:00-21:00" },
  ];
  
  export default function Home() {
    return (
      <div>
        <Navbar />
        <JobSearch />
      </div>
    );
  }
  
  function JobSearch() {
    const [filters, setFilters] = useState({
      jobTitle: [],
      faculty: [],
      workType: [],
      province: [],
      workHours: [],
    });
  
    const handleInputChange = (selectedOptions, actionMeta) => {
      const { name } = actionMeta;
      setFilters({
        ...filters,
        [name]: selectedOptions || [],
      });
    };
  
    const handleFindJob = () => {
      console.log("ค้นหางานด้วยฟิลเตอร์:", filters);
    };
  
    const handleMatchJob = () => {
      console.log("จับคู่งานด้วยฟิลเตอร์:", filters);
    };
  
    return (
      <div className="container mx-auto py-5 px-10">
        <div className="top-row flex justify-between items-start">
          <div className="filters bg-gray-100 p-5 rounded-lg shadow w-1/2">
            <h1 className="text-xl font-bold mb-2">ฟิลเตอร์การค้นหา :</h1>
            <div className="filter-options space-y-3">
              <Select
                name="jobTitle"
                isMulti
                options={jobTitleOptions}
                value={filters.jobTitle}
                onChange={handleInputChange}
                placeholder="ตำแหน่งงาน"
                className="w-full"
              />
              <Select
                name="faculty"
                isMulti
                options={facultyOptions}
                value={filters.faculty}
                onChange={handleInputChange}
                placeholder="คณะ"
                className="w-full"
              />
              <Select
                name="workType"
                isMulti
                options={workTypeOptions}
                value={filters.workType}
                onChange={handleInputChange}
                placeholder="ประเภทงาน"
                className="w-full"
              />
              <Select
                name="province"
                isMulti
                options={provinceOptions}
                value={filters.province}
                onChange={handleInputChange}
                placeholder="จังหวัด"
                className="w-full"
              />
              <Select
                name="workHours"
                isMulti
                options={workHourOptions}
                value={filters.workHours}
                onChange={handleInputChange}
                placeholder="ชั่วโมงการทำงาน"
                className="w-full"
              />
            </div>
            <div className="action-buttons flex gap-3 mt-3 justify-end">
              <button onClick={handleFindJob} className="bg-orange-500 text-white py-2 px-4 rounded">
                ค้นหางาน!
              </button>
              <button onClick={handleMatchJob} className="bg-red-500 text-white py-2 px-4 rounded">
                จับคู่งาน! ✨
              </button>
            </div>

          </div>
          <div className="search-bar w-1/2 flex justify-start ml-5 bg-gray-100 p-5 rounded-lg shadow">
            <input type="text" placeholder="ค้นหาบริษัทหรือตำแหน่งงาน" className="w-full p-2 border rounded"/>
          </div>
        </div>
        <div className="job-results w-1/2 bg-gray-100 p-5 rounded-lg shadow mt-5 text-center">
          <h3 className="text-xl font-bold">ตำแหน่งงานที่มี</h3>
          <div className="flex justify-start space-x-4 mt-3">
            <p>ตำแหน่ง!</p>
            <p>1 บริษัท!</p>
          </div>
        </div>
      </div>
    );
  }