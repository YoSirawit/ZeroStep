// "use client"
import React from 'react'
import Navbar from "./components/Navbar";
import JobSearch from "./components/JobSearch";
import JobCount from "./components/JobCount";
import Link from 'next/link';
import { sql } from '@vercel/postgres';
import Petinfo from './components/petinfo';
import InfoCard from './components/InfoCard';
import { NextResponse } from 'next/server';
import JobField from './components/JobField';

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

function removeall(){
  sql`DELETE FROM Pets`
}

async function Home() {

  const pets = await getPets();
  // console.log({pets});

  const announcement = await getAnnouncement();
  // console.log({announcement});

  
  const jobPositionsCount = 1; //ดึงจากDatabaseมาอะครับคุณหลังบ้าน
  const companiesHiringCount = 1; //ดึงจากDatabaseมาอะครับคุณหลังบ้าน


  return (
    <div>
        <Navbar />
        <div className="flex-container">
            <div className="job-search-container"> 
                <JobSearch />
                <JobCount 
                  jobPositionsCount={jobPositionsCount} 
                  companiesHiringCount={companiesHiringCount} 
                />
            </div>
            <JobField />
        </div>
        {/* <div className='container mx-auto'>
            <h3>Home</h3>
            <h1><Link href="/api/get-pet-info">Test</Link></h1>
            <Link href="/add-pet">Add pet</Link>

        </div> */}
            {announcement && 
              announcement.map((ann) =>{
                return(
                 <InfoCard key={ann.id} companyName={ann.companyname} jobTitle={ann.position} workType={ann.worktype} jobDetail='test'/>
              )})
            }

            {/* {pets &&
              pets.map((pet) => {
                return(
                  <Petinfo key={pet.name} name={pet.name} owner={pet.owner}/>
                )})

            } */}
    </div>
  )
}

export default Home

