"use client"; 
import { useState } from 'react';
import Link from 'next/link';

export default function ConfirmationPopup({ onClose }) {
  const handleConfirm = () => {
    onClose(); // ปิด Popup
    console.log("Confirmed!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white py-6 px-10 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
        <p className="mb-6">Do you want to save?</p>
        <div className="flex justify-center space-x-4">
          {/* ปุ่ม Confirm */}
          <Link href="/company" passHref>
            <button
              onClick={handleConfirm} // ปิด Popup และยืนยัน
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Yes
            </button>
          </Link>
          {/* ปุ่ม Cancel */}
          <button
            onClick={onClose} // ปิด Popup
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            No
          </button>
        </div>
      </div>
    </div>
  );
}
