"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  // State to manage if the input fields are editable
  const [isEditable, setIsEditable] = useState(false);
  const [firstName, setFirstName] = useState("สรวิทย์");
  const [lastName, setLastName] = useState("ด่ารงคงกระพันธุ์");
  const [dateOfBirth, setDateOfBirth] = useState("2004-08-19");
  const [location, setLocation] = useState("จังหวัดสมุทรปราการ");
  const [studyYear, setStudyYear] = useState("2");
  const [education, setEducation] = useState("สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง");
  const [faculty, setFaculty] = useState("เทคโนโลยีสารสนเทศ");
  const [softSkill, setSoftSkill] = useState("- ความเป็นผู้นำสูง");
  const [hardSkill, setHardSkill] = useState("- สามารถหลับแล้วเรียนรู้เรื่องได้\n- เชี่ยวชาญการใช้คณิตศาสตร์นิดๆ");
  const [workExperience, setWorkExperience] = useState("- เป็นอาจารย์ฮ๊อควอต");
  const [contribution, setContribution] = useState("- ประดิษฐ์อักษรภาษาอังอังๆ");
  const [interestedField, setInterestedField] = useState("งานที่นอนแล้วได้เงิน");

  // Toggle edit mode on button click
  const handleEditClick = () => {
    setIsEditable((prev) => !prev); // Toggle the edit mode
  };

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify({firstName: firstName,
                                                      lastName: lastName,
                                                      dateOfBirth: dateOfBirth,
                                                      location: location,
                                                      studyYear: studyYear,
                                                      education: education,
                                                      faculty: faculty,
                                                      softSkill: softSkill,
                                                      hardSkill: hardSkill,
                                                      workExperience: workExperience,
                                                      contribution: contribution,
                                                      interestedField: interestedField}))
  })

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
              <h2 className="text-xl font-bold">Profile</h2>
              <h2 className="text-xl mb-6">ID : 00001</h2>
              {/* <p className="text-gray-400 text-sm mb-6">ช่องทางติดต่อ : </p>
              <p className="text-gray-400 text-sm mb-8">ที่อยู่</p>
              <div className="text-gray-400 text-sm space-y-1">
                <p>โย่ไม่ใช่สถานที่ แต่คือผู้คน</p>
              </div> */}
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

              <div className="flex items-center space-x-4 mt-6">
                  <label className="font-semibold whitespace-nowrap">วัน-เดือน-ปีเกิด</label>
                  <input
                    type="date"
                    value={dateOfBirth} // Use the lastName state
                    onChange={(e) => setDateOfBirth(e.target.value)} // Update last name state
                    readOnly={!isEditable} // Toggle readOnly based on state
                    className={`w-32 p-2 mt-1 border text-center ${
                      isEditable ? "border-blue-500" : "border-gray-300"
                    } rounded-md`}
                  />
              </div>

              <div className="flex items-center space-x-4 mt-6">
                  <label className="font-semibold whitespace-nowrap">ที่อยู่</label>
                  <input
                    type="texst"
                    value={location} // Use the lastName state
                    onChange={(e) => setLocation(e.target.value)} // Update last name state
                    readOnly={!isEditable} // Toggle readOnly based on state
                    className={`w-full p-2 mt-1 border ${
                      isEditable ? "border-blue-500" : "border-gray-300"
                    } rounded-md`}
                  />
              </div>

              <div className="flex items-center space-x-4 mt-6">
                  <label className="font-semibold whitespace-nowrap">ชั้นปีที่</label>
                  <input
                    type="texst"
                    value={studyYear} // Use the lastName state
                    onChange={(e) => setStudyYear(e.target.value)} // Update last name state
                    readOnly={!isEditable} // Toggle readOnly based on state
                    className={`w-9 p-2 mt-1 border text-center ${
                      isEditable ? "border-blue-500" : "border-gray-300"
                    } rounded-md`}
                  />
              </div>

              <div className="flex items-center space-x-4 mt-6">
                <label className="font-semibold whitespace-nowrap">มหาลัย</label>
                <input
                    type="text"
                    value={education} // Use the lastName state
                    onChange={(e) => setEducation(e.target.value)} // Update last name state
                    readOnly={!isEditable} // Toggle readOnly based on state
                    className={`w-full p-2 mt-1 border ${
                      isEditable ? "border-blue-500" : "border-gray-300"
                    } rounded-md`}
                  />
              </div>

              <div className="flex items-center space-x-4 mt-6">
                <label className="font-semibold whitespace-nowrap">คณะ</label>
                <input
                    type="text"
                    value={faculty} // Use the lastName state
                    onChange={(e) => setFaculty(e.target.value)} // Update last name state
                    readOnly={!isEditable} // Toggle readOnly based on state
                    className={`w-full p-2 mt-1 border ${
                      isEditable ? "border-blue-500" : "border-gray-300"
                    } rounded-md`}
                  />
              </div>

              <div className="mt-6">
                <label className="font-semibold mb-2">Soft skill</label>
                <textarea
                  className={`w-full p-2 border ${
                    isEditable ? "border-blue-500" : "border-gray-300"
                  } rounded-md`}
                  // className="w-full p-2 border rounded-md"
                  rows="3"
                  value={softSkill}
                  onChange={(e) => setSoftSkill(e.target.value)}
                  readOnly={!isEditable}
                ></textarea>
              </div>

              <div className="mt-4">
                <label className="font-semibold mb-2">Hard skill</label>
                <textarea
                  className={`w-full p-2 border ${
                    isEditable ? "border-blue-500" : "border-gray-300"
                  } rounded-md`}
                  // className="w-full p-2 border rounded-md"
                  rows="3"
                  value={hardSkill}
                  onChange={(e) => setHardSkill(e.target.value)}
                  readOnly={!isEditable}
                ></textarea>
              </div>

              <div className="mt-4">
                <label className="font-semibold mb-2">ประสบการณ์การทำงาน</label>
                <textarea
                  className={`w-full p-2 border ${
                    isEditable ? "border-blue-500" : "border-gray-300"
                  } rounded-md`}
                  // className="w-full p-2 border rounded-md"
                  rows="2"
                  value={workExperience}
                  onChange={(e) => setWorkExperience(e.target.value)}
                  readOnly={!isEditable}
                ></textarea>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">ผลงาน</h3>
                <textarea
                  className={`w-full p-2 border ${
                    isEditable ? "border-blue-500" : "border-gray-300"
                  } rounded-md`}
                  // className="w-full p-2 border rounded-md"
                  rows="2"
                  value={contribution}
                  onChange={(e) => setContribution(e.target.value)}
                  readOnly={!isEditable}
                ></textarea>
              </div>

              <div className="flex items-center space-x-4 mt-6">
                <label className="font-semibold whitespace-nowrap">สายงานที่สนใจ</label>
                <input
                    type="text"
                    value={interestedField} // Use the lastName state
                    onChange={(e) => setInterestedField(e.target.value)} // Update last name state
                    readOnly={!isEditable} // Toggle readOnly based on state
                    className={`w-full p-2 mt-1 border ${
                      isEditable ? "border-blue-500" : "border-gray-300"
                    } rounded-md`}
                  />
              </div>

              <div className="mt-8 flex space-x-4 flex justify-end">
                  <Link href='/CreateResumePage' legacyBehavior>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition">
                      Create Resume
                    </button>
                  </Link>
                  <button 
                  className={`px-4 py-2 ${
                    isEditable ? "bg-green-500" : "bg-red-500"
                  } text-white rounded-md hover:opacity-75 transition`}
                  onClick={handleEditClick} // Call edit function on click
                  >
                    {isEditable ? "Confirm" : "Edit Profile"}
                  </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Profile;
