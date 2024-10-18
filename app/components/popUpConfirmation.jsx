import { useState } from 'react';
import Link from 'next/link';

export default function ConfirmationPopup() {
  // สถานะเปิด/ปิด Pop-up
  const [isOpen, setIsOpen] = useState(false);

  // ฟังก์ชันสำหรับเปิด/ปิด Pop-up
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* ปุ่มเปิด Pop-up */}
      <button
        onClick={togglePopup}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Open Confirmation
      </button>

      {/* Pop-up Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
            <p className="mb-6">Do you want to save?</p>
            <div className="flex justify-center space-x-4">
              {/* ปุ่ม Confirm */}
              <Link href="/company" passHref>
                <button
                  onClick={() => {
                    togglePopup();
                    console.log("Confirmed!");
                  }}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                  Yes
                </button>
              </Link>
              {/* ปุ่ม Cancel */}
              <button
                onClick={togglePopup}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
