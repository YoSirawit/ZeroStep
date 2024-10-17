import React from 'react';
import Link from 'next/link';

// ไปโหลดfont awesomeตามโค้ดบรรทัด 4
// npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
      <nav className='bg-black text-white py-5 px-10'>
          <div className="container mx-auto">
              <div className='flex justify-start items-center'>
                  {/* โลโก้ */}
                  <Link href="/" className="mr-10">Logo here</Link>
                  
                  {/* เมนูรายการ */}
                  <ul className='flex items-center'>
                      <li className='mx-3'><Link href="/" legacyBehavior><a>Search a job</a></Link></li>
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
                      <li className='mx-3'><Link href="/login" legacyBehavior><a>Sign in</a></Link></li>
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
    maxWidth: '20px', // กำหนดขนาดสูงสุด
    maxHeight: '20px',
    width: '100%',
    height: 'auto', // อัตราส่วนคงที่
  },
  profileText: {
    marginLeft: '8px',
  },
};

export default Navbar;