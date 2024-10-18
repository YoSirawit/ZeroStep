"use client";
import React, { useState } from 'react';
import NavbarCom from "../components/NavbarCom";
import Link from 'next/link';

// ไปโหลดfont awesomeตามโค้ดบรรทัด 4
// npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faEye, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


function createPost() {
  return (
    <div>
        <NavbarCom />
    </div>
  )
}

export default createPost