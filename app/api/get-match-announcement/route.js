import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import SearchingAnnouncementPage from '../AnnouncementSubsystem/SearchingAnnouncementPage'
 
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    // const petName = searchParams.get('petName');
    try{
         const announcement = await SearchingAnnouncementPage.findMyJob();
         console.log(announcement);
        //  const announcement = await sql`SELECT * FROM Applicant;`
        //  const data = announcement.json();
        //  console.log('match-api: ', announcement);
        // if(pets.rowCount > 0){
        return NextResponse.json({announcement: announcement })
        // }else{
        //     return NextResponse.json({ message : 'notfound' }, {status: 404});
        // }
    }catch{
        return NextResponse.json({ error }, { status: 500 });
    }
   
}