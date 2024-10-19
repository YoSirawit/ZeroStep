import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import SearchingAnnouncementPage from '../AnnouncementSubsystem/SearchingAnnouncementPage';
import Job  from '../AnnouncementSubsystem/Job';
 
export async function POST(request) {
    const { searchParams } = new URL(request.url);
    // const jobField = searchParams.get('jobField');
    // const worktype = searchParams.get('worktype');
    // const location = searchParams.get('location');

    // let job = new Job(jobField, worktype, location);

    try{
        const { jobField, worktype, location } = await request.json();
        // console.log("JobField: ", jobField);
        let job = new Job(jobField, worktype, location);
        console.log("in get-announce: ", job.Field, job.worktype, job.location);
        const announcement = await SearchingAnnouncementPage.searchJobList(job);
        console.log("get announce return", announcement);


        //  const announcement = await sql`SELECT * FROM announcement JOIN company ON announcement.companyid = company.id`;
        // //  console.log(announcement.rows);
        // if(announcement.rowCount > 0){
        //     return NextResponse.json({announcement: announcement.rows }, {status: 200})
        // }else{
        //     return NextResponse.json({ message : 'notfound' }, {status: 404});
        // }
        // return NextResponse.json({ message: 'ok'}, { status: 201});
        return NextResponse.json({ann : JSON.stringify({ announcement })}, {status: 201});
    }catch{
        return NextResponse.json({ error }, { status: 500 });
    }

    // const announcement =  SearchingAnnouncementPage.searchJobList(job);
   
}