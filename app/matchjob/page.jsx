// "use client"
import React from 'react'
import Navbar from "../components/Navbar";
import Link from 'next/link';
import { sql } from '@vercel/postgres';
import Petinfo from '../components/petinfo';
import InfoCard from '../components/InfoCard';
import { NextResponse } from 'next/server';












async function getPets(){
  try{
    const pets = await fetch('https://zero-step-wheat.vercel.app/api/get-pet-info', {next: {revalidate: 0}});
    const pets_data = await pets.json();
    // console.log(data.pets);
    return pets_data.pets;
  } catch (error){
      console.error(error);
  }

}

async function matchAnnouncement(){
  try{
    const announcement = await fetch('http://localhost:3000/api/get-match-announcement', {next: {revalidate: 0}});
    const data = await announcement.json();
    // const ann_data = await announcement.json();
    // // console.log(ann_data.announcement);
    return data;
  } catch (error){
      console.error(error);
  }
}

function removeall(){
  sql`DELETE FROM Pets`
}

async function Home() {

    const announcement = await matchAnnouncement();
    console.log(announcement.announcement);


  // const announcement = await matchAnnouncement();
  // console.log({announcement});

  
  const jobPositionsCount = 1; //ดึงจากDatabaseมาอะครับคุณหลังบ้าน
  const companiesHiringCount = 1; //ดึงจากDatabaseมาอะครับคุณหลังบ้าน


  return (
    <div>
        <Navbar />
        <div className="flex-container">
        </div>
        <div>
        {announcement.announcement && 
              announcement.announcement.map((ann) =>{
                return(
                 <InfoCard key={ann.id} companyName={ann.companyname} jobTitle={ann.position} workType={ann.worktype} jobDetail={ann.score}/>
              )})
            }
        </div>

    </div>
  )
}

export default Home

