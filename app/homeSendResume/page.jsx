"use client";

import { useEdgeStore } from '@/lib/edgestore';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from "next/link";


export default function HomeSendResumePage() {
  const { edgestore } = useEdgeStore();
  const [file, setFile] = useState<File | null>(null);
  const [urls, setUrls] = useState<{
    url: string;
    thumbnailUrl: string | null;
  }>({ url: '', thumbnailUrl: null });

  return (
    <div>
      <div className='flex flex-col item-center m-6 gap-2'>
      <Navbar />
        <input type='file' onChange={(e) => {
          setFile(e.target.files?.[0]);
        }}/>
        <button className='bg-white text-black rounded px-2 hover:opacity-80'
          onClick={async() => {
            if (file) {
              const res = await edgestore.myPublicImages.upload({ file });

              setUrls({
                url: res.url,
                thumbnailUrl: res.thumbnailUrl
              })
            }
          }}>
          Upload 
        </button>
        {urls?.url && <Link href={urls.url} target="_blank">URL</Link>}
        {urls?.thumbnailUrl && <Link href={urls.thumbnailUrl} target="_blank">THUMBNAIL</Link>}
      </div>
      </div>

  )
}


// function HomeSendResumePage() {
//   return (
//     <div>
//       <Navbar />
      
//     </div>
//   );
// }


