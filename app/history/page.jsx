"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react'
import Navbar from "../components/Navbar";

const history = () => {

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(false);

  const inputRef = useRef(null);

  const tags = [
    "#ร้านอาหารอร่อย",
    "#เดินทางสะดวก",
    "#บรรยากาศการทำงาน",
    "#สวัสดิการของบุคลากรภายในบริษัท",
    "#สิ่งอำนวยความสะดวกภายในบริษัท",
  ];

  const styles = {
    sendButton: {
    marginTop: "20px",
    backgroundColor: "#00008B",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    width: "15%",           
    textAlign: "center",
  }};

  const filteredTags = tags.filter((item)=>
    item?.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()?.trim()) && !selected.includes(item)
  );

  const isDisable = 
    !query?.trim() || 
    selected.filter(
      (item) => 
        item?.toLocaleLowerCase()?.trim() == query?.toLocaleLowerCase()?.trim()
    )?.length || 
    selected.filter(
      (item) => 
        item?.toLocaleLowerCase()?.trim() == "#"+query?.toLocaleLowerCase()?.trim()
    )?.length;

  return (
    <div>
      <div>
        <Navbar/>
      </div>
          <div className="flex-1 p-5 min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-7xl w-full">
          {/* Title */}
          <h1 className="text-left text-3xl font-bold my-8">
            ประวัติการสมัคร <br /> <span className="text-sm font-normal text-gray-500">Complete Company List</span>
          </h1>

          <div className="grid sm:grid-cols-3 gap-8">
            {/* Company Cards */}
            <div className="md:col-span-1 space-y-4">
              {/* Big Big Ducky Inc. */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="font-semibold mb-2 text-lg text-blue-500">BIG Big Ducky Inc.</h2>
                <form>
                  <label className="block mb-2">วันที่สมัคร</label>
                  <input className="w-full mb-3 p-2 border rounded text-gray-500" type="text" value="20 ต.ค. 2567" disabled/>
                  
                  <label className="block mb-2">ตำแหน่ง</label>
                  <input className="w-full mb-3 p-2 border rounded text-gray-500" type="text" value="Front-End"disabled/>
                  
                  <label className="block mb-2">รายละเอียดงาน</label>
                  <textarea className="w-full p-2 border rounded text-gray-500" value="เลี้ยงเป็ดที่สวนข้างคณะทั้ง 20ตัว" disabled></textarea>
                </form>
                <button className="bg-black text-white py-2 px-4 mt-4 w-full rounded"
                  onClick={()=>setSelectedJob(true)}>Review</button>
                <p className="text-gray-500 text-xs mt-2 flex justify-center">* About The Internship Environment</p>
              </div>

              {/* Company B */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="font-semibold mb-2 text-lg text-blue-500">Company B.</h2>
                <form>
                  <label className="block mb-2">วันที่สมัคร</label>
                  <input className="w-full mb-4 p-2 border rounded text-gray-500" value="18 ต.ค. 2564" type="text" disabled/>
                  
                  <label className="block mb-2">ตำแหน่ง</label>
                  <input className="w-full mb-4 p-2 border rounded text-gray-500" value="Back-End" type="text" disabled/>
                  
                  <label className="block mb-2">รายละเอียดงาน</label>
                  <textarea className="w-full p-2 border rounded text-gray-500" value="รำ ฟ้อน สร้างบ้านผีสิง" disabled></textarea>
                </form>
                <button className="bg-black text-white py-2 px-4 mt-4 w-full rounded"
                  onClick={()=>setSelectedJob(true)}>Review</button>
                <p className="text-gray-500 text-xs mt-2 flex justify-center">* About The Internship Environment</p>
              </div>

              {/* Company C */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="font-semibold mb-2 text-lg text-blue-500">Company C.</h2>
                <form>
                  <label className="block mb-2">วันที่สมัคร</label>
                  <input className="w-full mb-4 p-2 border rounded text-gray-500" value="14 ม.ค. 2566" type="text" disabled/>
                  
                  <label className="block mb-2">ตำแหน่ง</label>
                  <input className="w-full mb-4 p-2 border rounded text-gray-500" value="Full Stack" type="text" disabled/>
                  
                  <label className="block mb-2">รายละเอียดงาน</label>
                  <textarea className="w-full p-2 border rounded text-gray-500" value="ลงแรงค์ Valorant รายวัน วันละ 50ตา" disabled></textarea>
                </form>
                <button className="bg-black text-white py-2 px-4 mt-4 w-full rounded"
                  onClick={()=>setSelectedJob(true)}>Review</button>
                <p className="text-gray-500 text-xs mt-2 flex justify-center">* About The Internship Environment</p>
              </div>
            </div>

            {/* Review Section */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 shadow-md rounded-md h-[720px]">
                <h2 className="text-center font-semibold text-2xl mb-2">Review</h2>
                {/* This is the review section, which can be populated based on selection */}
              
                {selectedJob ? (
                <div className="h-5/6 border-dashed border-gray-300 grid place-items-center text-gray-500">
                  <label className="block mb-2 m-4">Comment</label>
                  <textarea className="w-3/4 h-[300px] mb-4 p-2 border rounded" type="text"></textarea>
                  <div className="relative w-80 h-52 text-sm">
                    {
                      selected?.length ? (
                      <div className="bg-white w-80 relative text-xs flex flex-wrap gap-1 p-2 mb-2">
                        {selected.map((tag)=>{
                            return <div key={tag} className="rounded-full w-fit py-1.5 px-3 border border-gray-400 bg-gray-50 text-gray-500 flex items-center gap-2"
                              >
                                {tag}
                                <div 
                                  onMouseDown={(e)=>e.preventDefault()}
                                  onClick={()=>
                                    setSelected(selected.filter((i)=>i !== tag))
                                  }
                                >
                                  <FontAwesomeIcon icon={faXmark} className="text-blue-500" />
                                </div>
                              </div>;
                          })}
                          <div className="w-full text-right">
                            <span 
                              className='text-gray-400 cursor-pointer'
                              onClick={()=>{
                                setSelected([]);
                                inputRef.current?.focus();
                              }}
                            >
                              Clear all
                            </span>
                          </div>
                      </div>
                    ) : null}
                    <div className="bg-white shadow-md rounded-md flex items-center justify-between p-3 gap-2.5">
                      <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-blue-500" />
                      </div>
                      <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e)=>setQuery(e.target.value.trimStart())}
                        placeholder='Search or Create tags'
                        className='bg-transparent text-sm flex-1 caret-rose-600'
                        onFocus={()=>setMenuOpen(true)}
                        onBlur={()=>setMenuOpen(false)}
                        onKeyDown={(e)=>{
                          if(e.key == 'Enter' && !isDisable){
                            setSelected((prev)=>[...prev, "#"+query]);
                            setQuery("");
                            setMenuOpen(true);
                          }
                        }}
                      />
                      <button 
                        className="text-sm disabled:text-gray-300 text-blue-500 disabled:cursor-not-allowed"
                        disabled={isDisable}
                        onClick={()=> {
                          if(isDisable) {
                            return;
                          }
                          setSelected((prev)=>[...prev, "#"+query]);
                          setQuery("");
                          inputRef.current?.focus();
                        }}
                      >
                        + Add
                      </button>
                    </div>

                    {/* Menu */}
                    {
                      menuOpen ? (<div className="bg-white shadow-md rounded-md absolute w-full max-h-52 mt-2 p-1 flex overflow-y-auto scrollbar-thin schrollbar-track-slate-50 scrollbar-thumb-state-200">
                      <ul className="w-full">
                        {filteredTags?.length ? filteredTags.map((tag,i)=>(
                            <li 
                              key={tag}
                              className="p-2 cursor-pointer hover:bg-rose-50 hover:text-blue-500 rounded-md w-full"
                              onMouseDown={(e)=>e.preventDefault()}
                              onClick={()=>{
                                setMenuOpen(true);
                                setSelected((prev)=>[...prev, tag]);
                              }}
                            >
                              {tag}
                            </li>
                          )):(
                            <li className='p-2 text-gray-500'>ไม่มีแท็กให้เลือก โปรดเพิ่มแท็ก</li>
                          )}
                      </ul>
                    </div>) : null}
                  </div>
                </div>
              ) : (
                <p className="text-gray-600 flex justify-center">Please select a company to review.</p>
              )}
                <div className='flex justify-center'>
                  {selectedJob ? (
                    <button style={styles.sendButton}
                      onClick={()=>setSelectedJob((e)=>!e)}>Send</button>
                  ) : (null)}
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