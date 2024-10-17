"use client";

import React, { useState } from "react";
import Image from 'next/image';
import Navbar from "../components/Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  // State to manage if the input fields are editable
  const [isEditable, setIsEditable] = useState(false);
  const [firstName, setFirstName] = useState("สรวิทย์");
  const [lastName, setLastName] = useState("ด่ารงคงกระพันธุ์");

// Toggle edit mode on button click
const handleEditClick = () => {
  setIsEditable((prev) => !prev); // Toggle the edit mode
};

  return (
    <div>
        <Navbar />
        
        <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
          <div className="bg-gray-800 text-white w-1/4 p-6">
            <div className="flex flex-col items-center">
              {/* <Image
                src="/DogLaughMeme.jpg"
                alt="Profile"
                width={175}
                height={175}
                className="rounded-full mb-4"
              /> */}
              <FontAwesomeIcon icon={faUser} className="w-32 h-32 rounded-full mt-8 mb-8" />
              <h2 className="text-xl font-bold mb-6">Profile</h2>
              <p className="text-gray-400 text-sm mb-6">ช่องทางติดต่อ : </p>
              <p className="text-gray-400 text-sm mb-8">ที่อยู่</p>
              <div className="text-gray-400 text-sm space-y-1">
                <p>โย่ไม่ใช่สถานที่ แต่คือผู้คน</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold">ชื่อ</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    readOnly={!isEditable} // Toggle readOnly based on state
                    className={`w-full p-2 mt-1 border ${
                      isEditable ? "border-blue-500" : "border-gray-300"
                    } rounded-md`}
                  />
                </div>
                <div>
                  <label className="font-semibold">นามสกุล</label>
                  <input
                    type="text"
                    value={lastName} // Use the lastName state
                    onChange={(e) => setLastName(e.target.value)} // Update last name state
                    readOnly={!isEditable} // Toggle readOnly based on state
                    className={`w-full p-2 mt-1 border ${
                      isEditable ? "border-blue-500" : "border-gray-300"
                    } rounded-md`}
                  />
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">ประวัติการศึกษา</h3>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows="2"
                  defaultValue="สุดยอด Valorant Boy ผู้มากความสามารถ เก่งสุดไม่รองใคร"
                  readOnly
                ></textarea>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Soft skill</h3>
                <ul className="list-disc list-inside">
                  <li>ความเป็นผู้นำสูง</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">Hard skill</h3>
                <ul className="list-disc list-inside">
                  <li>สามารถหลับแล้วเรียนรู้เรื่องได้</li>
                  <li>เชี่ยวชาญการใช้คณิตศาสตร์นิดๆ</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">ประวัติการทำงาน</h3>
                <ul className="list-disc list-inside">
                  <li>เป็นอาจารย์ฮ๊อควอต</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">ผลงาน</h3>
                <ul className="list-disc list-inside">
                  <li>แชมป์รายการ Valorant Master ตลาดระบัง</li>
                </ul>
              </div>

              <div className="mt-8 flex space-x-4 flex justify-end">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition">
                    Create resume
                  </button>
                  <button 
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                  onClick={handleEditClick} // Call edit function on click
                  >
                    Edit profile
                  </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Profile;
