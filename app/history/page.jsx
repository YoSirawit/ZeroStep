"use client";
import React from 'react'
import Navbar from "../components/Navbar";

const history = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
          <div className="flex-1 p-5 min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-7xl w-full">
          {/* Title */}
          <h1 className="text-left text-3xl font-bold my-8">
            ประวัติการสมัคร <br /> <span className="text-sm font-normal">Complete Company List</span>
          </h1>

          <div className="grid sm:grid-cols-3 gap-8">
            {/* Company Cards */}
            <div className="md:col-span-1 space-y-4">
              {/* Big Big Ducky Inc. */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="font-semibold mb-2 text-lg">BIG Big Ducky Inc.</h2>
                <form>
                  <label className="block mb-2">วันที่สมัคร</label>
                  <input className="w-full mb-3 p-2 border rounded" type="text" disabled/>
                  
                  <label className="block mb-2">ตำแหน่ง</label>
                  <input className="w-full mb-3 p-2 border rounded" type="text" disabled/>
                  
                  <label className="block mb-2">รายละเอียดงาน</label>
                  <textarea className="w-full p-2 border rounded" disabled></textarea>
                </form>
                <button className="bg-black text-white py-2 px-4 mt-4 w-full rounded">Review</button>
                <p className="text-gray-500 text-xs mt-2">* About The Internship Environment</p>
              </div>

              {/* Company B */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="font-semibold mb-2 text-lg">Company B.</h2>
                <form>
                  <label className="block mb-2">วันที่สมัคร</label>
                  <input className="w-full mb-4 p-2 border rounded" type="text" disabled/>
                  
                  <label className="block mb-2">ตำแหน่ง</label>
                  <input className="w-full mb-4 p-2 border rounded" type="text" disabled/>
                  
                  <label className="block mb-2">รายละเอียดงาน</label>
                  <textarea className="w-full p-2 border rounded" disabled></textarea>
                </form>
                <button className="bg-black text-white py-2 px-4 mt-4 w-full rounded">Review</button>
                <p className="text-gray-500 text-xs mt-2">* About The Internship Environment</p>
              </div>

              {/* Company C */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="font-semibold mb-2 text-lg">Company C.</h2>
                <form>
                  <label className="block mb-2">วันที่สมัคร</label>
                  <input className="w-full mb-4 p-2 border rounded" type="text" disabled/>
                  
                  <label className="block mb-2">ตำแหน่ง</label>
                  <input className="w-full mb-4 p-2 border rounded" type="text" disabled/>
                  
                  <label className="block mb-2">รายละเอียดงาน</label>
                  <textarea className="w-full p-2 border rounded" disabled></textarea>
                </form>
                <button className="bg-black text-white py-2 px-4 mt-4 w-full rounded">Review</button>
                <p className="text-gray-500 text-xs mt-2">* About The Internship Environment</p>
              </div>
            </div>

            {/* Review Section */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 shadow-md rounded-md h-1/2">
                <h2 className="text-center font-semibold text-2xl mb-2">Review</h2>
                {/* This is the review section, which can be populated based on selection */}
                <div className="h-5/6 border-dashed border-2 border-gray-300 flex items-center justify-center text-gray-500">
                  Select a company to review
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default history