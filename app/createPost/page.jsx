"use client";
import React, { useState } from 'react';
import NavbarCom from "../components/NavbarCom";
import Link from 'next/link';
import ConfirmationPopup from "../components/ConfirmationPopup";
import Select from 'react-select';

function CreatePost() {
  const [showPopup, setShowPopup] = useState(false); // สถานะเพื่อควบคุมการแสดง ConfirmationPopup
  const [selectedField, setselectedField] = useState([]); // State สำหรับจัดการ field ที่เลือก
  const [selectedWorkType, setselectedWorkType] = useState([]);

  const handleSave = () => {
    setShowPopup(true); // แสดง ConfirmationPopup เมื่อกดบันทึก
  };

  const handleCancel = () => {
    // เปลี่ยนเส้นทางไปยังหน้า Company
    window.location.href = '/company'; // เปลี่ยนเส้นทางไปยังหน้า Company
  };
  // ตัวเลือกสำหรับ field
  const fieldOptions = [
    { value: 'IT', label: 'IT' },
    { value: 'AI', label: 'AI' },
    { value: 'DSBA', label: 'DSBA' },
  ];
  // ตัวเลือกสำหรับ WorkType
  const workTypeOptions = [
    { value: 'Work From Home', label: 'Work From Home' },
    { value: 'In-office', label: 'In-office' },
    { value: 'Hybrid', label: 'Hybrid' },
  ];

  return (
    <div>
      <NavbarCom />
      <div className="flex-1 p-5">
        <div className="bg-white p-8 rounded-lg shadow-md">

          {/* Position และ Recruitment Number */}
          <div className="grid grid-cols-6 gap-4 mb-4">
            <div className="col-span-5">
              <label className="font-medium">Position</label>
              <input
                type="text"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-1">
              <label className="font-medium">Recruitment Number</label>
              <input
                type="text"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/*Field */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
            <label className="font-medium">Field : สาขา หรือ สายงาน</label>
              {/* ใช้ react-select สำหรับ dropdown multi-select */}
              <Select
                isMulti
                options={fieldOptions}
                value={selectedField}
                onChange={setselectedField}
                className="w-full mt-1"
              />
            </div>
          </div>

          {/* Compensation และ Work Type */}
          <div className="grid grid-cols-6 gap-4 mb-4">
            <div className="col-span-2">
              <label className="font-medium">Compensation</label>
              <input
                type="text"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-4">
              <label className="font-medium">Work Type</label>
              {/* ใช้ react-select สำหรับ dropdown multi-select */}
              <Select
                isMulti
                options={workTypeOptions}
                value={selectedWorkType}
                onChange={setselectedWorkType}
                className="w-full mt-1"
              />
            </div>
          </div>

          {/* Hard skills */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="col-span-1">
              <label className="font-medium">Hard skills</label>
              <textarea className="w-full p-2 mt-1 border border-gray-300 rounded-md"></textarea>
            </div>
          </div>

          {/* Soft skills */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="col-span-1">
              <label className="font-medium">Soft skills</label>
              <textarea className="w-full p-2 mt-1 border border-gray-300 rounded-md"></textarea>
            </div>
          </div>

          {/* Job description */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="col-span-1">
              <label className="font-medium">Job description</label>
              <textarea className="w-full p-2 mt-1 border border-gray-300 rounded-md"></textarea>
            </div>
          </div>

          {/* button save or cancel */}
          <div className="flex justify-end mt-4">
            <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
              บันทึก
            </button>
            <button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded-md">
              ยกเลิก
            </button>
          </div>

          {/* แสดง ConfirmationPopup ถ้ามีการกดปุ่มบันทึก */}
          {showPopup && (
            <ConfirmationPopup 
              onClose={() => setShowPopup(false)} // ฟังก์ชันปิด popup
            />
          )}

        </div>
      </div>
    </div>
  )
}

export default CreatePost;
