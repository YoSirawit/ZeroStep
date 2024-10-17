"use client"
import React, { useState } from 'react'
import Navbar from "./components/Navbar";

function Home() {
  return (
    <div>
        <Navbar />
        <div className='container mx-auto'>
            <h3>Home</h3>
        </div>
    </div>
  )
}

export default Home
