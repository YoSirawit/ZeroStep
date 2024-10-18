// "use client"
import React from 'react'
import Navbar from "./components/Navbar";
import JobSearch from "./components/JobSearch";
import Link from 'next/link';
import { sql } from '@vercel/postgres';
import Petinfo from './components/petinfo';
import { NextResponse } from 'next/server';
import JobField from './components/JobField';

async function getPets(){
  try{
    const pets = await fetch('https://zero-step-wheat.vercel.app/api/get-pet-info', {cache: 'no-store'});
    const data = await pets.json();
    // console.log(data.pets);
    return data.pets;
  } catch (error){
      console.error(error);
  }

}

function removeall(){
  sql`DELETE FROM Pets`
}

async function Home() {

  const pets = await getPets();
  console.log({pets});


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
            {pets &&
              pets.map((pet) => {
                return(
                  <Petinfo key={pet.name} name={pet.name} owner={pet.owner}/>
                )})

            }
    </div>
  )
}


export default Home

