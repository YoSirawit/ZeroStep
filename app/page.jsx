// "use client"
import React from 'react'
import Navbar from "./components/Navbar";
import JobSearch from "./components/JobSearch";
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
    const announcement = await fetch('http://localhost:3000/api/get-announcement');
    const ann_data = await announcement.json();
    // console.log(ann_data.announcement);
    return ann_data.announcement;
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
  console.log({announcement});


  return (
    <div>
        <Navbar />
        <JobSearch />
        <JobField />
        <div className='container mx-auto'>
            <h3>Home</h3>
            <h1><Link href="/api/get-pet-info">Test</Link></h1>
            <Link href="/add-pet">Add pet</Link>

        </div>
            {announcement && 
              announcement.map((ann) =>{
                return(
                <InfoCard key={ann.id}  />
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

