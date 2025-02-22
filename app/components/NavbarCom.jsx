import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


function NavbarCom() {
  return (
      <nav className='bg-black text-white py-5 px-10'>
        <div className="container mx-auto">
          <div className='flex justify-between items-center'>
            <Link href="/" className="flex items-center mr-0">
              <Image src="/picture/logo.png" alt="ZeroStep" width={50} height={50}/>
              <span className="ml-2">ZERO-STEP</span>
            </Link>
            <ul className='flex items-center'>
              <li className='mx-3'><Link href="/" legacyBehavior><a>Applicant site</a></Link></li>
              <li className='mx-3 px-5 py-1 pb-2 rounded-md border-2 border-blue-500'><Link href="/login" legacyBehavior><a>Sign in</a></Link></li>
              <li className='mx-3'><Link href="/" legacyBehavior><a>Logout</a></Link></li>
            </ul>
          </div>
        </div>
      </nav>
  );
}


export default NavbarCom;