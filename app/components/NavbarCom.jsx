import React from 'react';
import Link from 'next/link';


function NavbarCom() {
  return (
      <nav className='bg-black text-white py-5 px-10'>
        <div className="container mx-auto">
          <div className='flex justify-between items-center'>
            <Link href="/">Logo here</Link>
            <ul className='flex items-center'>
              <li className='mx-3'><Link href="/" legacyBehavior><a>Applicant site</a></Link></li>
              <li className='mx-3'><Link href="/login" legacyBehavior><a>Sign in</a></Link></li>
              <li className='mx-3'><Link href="/logout" legacyBehavior><a>Logout</a></Link></li>
            </ul>
          </div>
        </div>
      </nav>
  );
}


export default NavbarCom;