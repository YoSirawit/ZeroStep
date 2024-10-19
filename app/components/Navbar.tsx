"use client"; 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ไปโหลดfont awesomeตามโค้ดบรรทัด 4
// npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

function Navbar() {
  return (
      <nav className='bg-black text-white py-5 px-10'>
          <div className="container mx-auto">
              <div className='flex justify-between items-center'>
                  {/* โลโก้ */}
<<<<<<< HEAD
                  <Link href="/homeSendResume" className="mr-10">Logo here</Link>  {/*ขอยืมปุ่มแปปนึงนะ เดี๋ยวมาลบออกให้/}
                  
=======
                  <Link href="/" className="flex items-center mr-0">
                    <Image src="/picture/logo.png" alt="ZeroStep" width={50} height={50}/>
                    <span className="ml-2">ZERO-STEP</span>
                  </Link>  {/*ขอยืมปุ่มแปปนึงนะ เดี๋ยวมาลบออกให้*/}

>>>>>>> 4cfd00763f769db20ee1f2954a6d26204750841f
                  {/* เมนูรายการ */}
                  <ul className='flex items-center'>
                      <li className='mx-3'><Link href="/createResume" legacyBehavior><a>Create resume</a></Link></li>
                      <li className='mx-3'><Link href="/history" legacyBehavior><a>Applicant history</a></Link></li>
                      <li className='mx-3'>
                          <Link href="/profile" legacyBehavior>
                              <a style={styles.profileIconContainer}>
                                  <FontAwesomeIcon icon={faUser} style={styles.profileIcon} />
                                  <span style={styles.profileText}>Profile</span>
                              </a>
                          </Link>
                      </li>
                  </ul>

                  {/* Sign in และ Company site */}
                  <ul className='flex items-center ml-auto'>
                      <li className='mx-3 px-5 py-1 pb-2 rounded-md border-2 border-blue-500'><Link href="/login" legacyBehavior><a>Sign in</a></Link></li>
                      <li className='mx-3'><Link href="/company" legacyBehavior><a>Company site</a></Link></li>
                  </ul>
              </div>
          </div>
      </nav>
  );
}

const styles = {
  profileIconContainer: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
  },
  profileIcon: {
    color: '#fff',
    maxWidth: '20px',
    maxHeight: '20px',
    width: '100%',
    height: 'auto',
  },
  profileText: {
    marginLeft: '8px',
  },
};

export default Navbar;