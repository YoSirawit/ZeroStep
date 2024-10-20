import React from 'react'
import Navbar from "../../components/Navbar";
import Link from 'next/link';
import { sql } from '@vercel/postgres';
import InfoCard from '../../components/InfoCard';

// async function getAnnouncement(id){
//     try{
//         const announce = await sql`select announcement.id, field, position, compensation, location, worktype, companyname from announcement join company on announcement.companyid = company.id where announcement.id = ${id};`;
//         // console.log(announce.rows);
//         return announce.rows;

//    }catch(error){
//        return console.log(error);
//    }
// }

async function announcementDetail({ params }){
//     const id = params.id

//    const announce = await getAnnouncement(id);
//    console.log(announce);



//     return(
//         <main>
//             <div>
//                 <Navbar />
//             </div>
//             <div>
//             {announce && 
//               announce.map((ann) =>{
//                 return(
//                  <InfoCard key={ann.id} companyName={ann.companyname} jobTitle={ann.position} workType={ann.worktype} jobDetail={'test'}/>
//               )})
//             }
//             </div>

//         </main>

//     )
}

export default announcementDetail;