"use client";

import React, { useState } from "react";
import Image from 'next/image';
import Navbar from "../components/Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

const ProfileClient = ({ applicant, skill }) => {
// State to manage if the input fields are editable
const [applicantData, setApplicantData] = useState(applicant[0] || {});

// Function to convert Date from DB to Date format in input tag
const convertDateFormat = (dateString) => {
    if (!dateString) {
    console.error("Invalid date input: No date provided");
    return "";
    }

    // Create a Date object from the ISO string
    const date = new Date(dateString);

    // Format it as YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`; // Return in YYYY-MM-DD format
};

// Functoin to get number of year from year you start study
const calculateStudyDuration = (startDateString) => {
    const startDate = new Date(startDateString);
    const currentDate = new Date();
    
    // Calculate difference in years
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();
    
    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Adjust for negative days
    if (days < 0) {
        months--;
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0); // Last day of previous month
        days += lastMonth.getDate(); // Get the total days in the last month
    }
    
    return years;
    };

const [isEditable, setIsEditable] = useState(false);
const [isAddSkill, setIsAddSkill] = useState(false);

const [id, setID] = useState(applicantData.id);
const [firstName, setFirstName] = useState(applicantData.firstname);
const [lastName, setLastName] = useState(applicantData.lastname);
const [dateOfBirth, setDateOfBirth] = useState(convertDateFormat(applicantData.dob));
const [location, setLocation] = useState(applicantData.location);
const [studyYear, setStudyYear] = useState(calculateStudyDuration(convertDateFormat(applicantData.studyyear)));
const [education, setEducation] = useState("สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง");
const [faculty, setFaculty] = useState(applicantData.faculty);
const [softSkill, setSoftSkill] = useState("- ความเป็นผู้นำสูง");
const [workExperience, setWorkExperience] = useState(applicantData.experience);
const [contribution, setContribution] = useState("- ประดิษฐ์อักษรภาษาอังอังๆ");
const [interestedField, setInterestedField] = useState(applicantData.interested_field);

const [hardSkill, setHardSkill] = useState(skill);
const [newSkill, setNewSkill] = useState("");

// Toggle edit mode on button click
const handleEditClick = async () => {
    setIsEditable((prev) => !prev); // Toggle the edit mode
    if (isAddSkill) {
        // if (newSkill != "") {
        //     insertSkill(newSkill)
        // }
        setIsAddSkill(false);
    }
    if (isEditable) {
        // try {
        //     await fetch('http://localhost:3000/api/InsertProfile', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ firstName }), // Wrap firstName in an object
        //     });
        // } catch (error) {
        //     console.log(error);
        // }
    }
};

const handleAddClick = () => {
    setIsAddSkill(true);
}

const handleSkillChange = (index, value) => {
    const editSkill = [...hardSkill]; // Create a copy of the skills array
    editSkill[index].skill = value; // Update the skill at the specified index
    setHardSkill(editSkill); // Set the updated skills array to state
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
                    width={225}
                    height={225}
                    className="rounded-full mb-4"
                /> */}
                <FontAwesomeIcon icon={faUser} className="w-32 h-32 rounded-full mt-8 mb-8" />
                <h2 className="text-xl font-bold">Profile</h2>
                <h2 className="text-xl mb-6">ID : {id}</h2>
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
                {/* <ApplicantSkill applicantSkill={skill} isEditable={isEditable} isAddSkill={[isAddSkill, setIsAddSkill]} /> */}
                {hardSkill.length === 0 ? (<label className="w-full p-2 mt-1 border rounded-md ml-4">No Skill</label>) :
                    hardSkill.map((skillEach, index) => (
                        <input
                            key={index} // Use index as key; ideally use a unique identifier if available
                            type="text"
                            value={skillEach.skill} // Use the skill from the array
                            onChange={(e) => {handleSkillChange(index, e.target.value)}}
                            readOnly={!isEditable} // Toggle readOnly based on state
                            className={`w-full p-2 mt-1 border ${
                                isEditable ? "border-blue-500" : "border-gray-300"
                            } rounded-md`}
                        />
                    ))
                }
                {!isEditable || isAddSkill ? (
                    <div></div>
                ) : (
                    <div className="flex justify-end mt-4">
                        <button className="w-10 h-10" onClick={handleAddClick}>
                            <FontAwesomeIcon icon={faPlus} className="w-10 h-10" />
                        </button>
                    </div>
                )}
                {!isEditable || !isAddSkill ? (
                    <div></div>
                ) : (
                    <div className="flex justify-end">
                        <input
                            type="text"
                            value={newSkill} // Use the skill from the array
                            onChange={(e) => setNewSkill(e.target.value)}
                            readOnly={!isEditable} // Toggle readOnly based on state
                            className={`w-full p-2 mt-1 border ${
                                isEditable ? "border-green-500" : "border-gray-300"
                            } rounded-md`}
                        />
                    </div>
                )}
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
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition">
                    Create resume
                </button>
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

export default ProfileClient;
