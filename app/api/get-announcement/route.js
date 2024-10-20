import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import SearchingAnnouncementPage from '../AnnouncementSubsystem/SearchingAnnouncementPage';
import Job  from '../AnnouncementSubsystem/Job';
import Announcement from '../AnnouncementSubsystem/Announcement';
 
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    let announce_list = [];
    // const jobField = searchParams.get('jobField');
    // const worktype = searchParams.get('worktype');
    // const location = searchParams.get('location');

    // let job = new Job(jobField, worktype, location);

    try{
        // const { jobField, worktype, location } = await request.json();
        // console.log("JobField: ", jobField);
        // let job = new Job(jobField, worktype, location);
        // console.log("in get-announce: ", job.Field, job.worktype, job.location);
        // const announcement = await SearchingAnnouncementPage.searchJobList(job);
        // console.log("get announce return", announcement);
        const announcement = await sql`SELECT announcement.id, announcement.field, announcement.position, announcement.compensation, announcement.location, announcement.worktype, company.companyname, company.contact, announcement.responsibility FROM announcement JOIN company ON announcement.companyid = company.id`;
        for(let i=0; i<announcement.rowCount; i++){
            let announce = new Announcement(announcement.rows[i].field, announcement.rows[i].position, announcement.rows[i].compensation, announcement.rows[i].location, announcement.rows[i].worktype, announcement.rows[i].responsibility);
            announce.Id = announcement.rows[i].id;
            announce.Companyname = announcement.rows[i].companyname;
            const hardskill = await sql`select skill from announcement_skill_req where announcement_id = ${announcement.rows[i].id}`;
            for(let j=0; j<hardskill.rowCount; j++){
                announce.addHardSkillReq(hardskill.rows[j].skill);
            } 
            announce_list.push(announce);
        }
        
       let jsonstring = JSON.stringify(announce_list);
       let jsonobj = JSON.parse(jsonstring);
        console.log(jsonobj);

        //  const announcement = await sql`SELECT * FROM announcement JOIN company ON announcement.companyid = company.id`;
        // //  console.log(announcement.rows);
        // if(announcement.rowCount > 0){
        //     return NextResponse.json({announcement: announcement.rows }, {status: 200})
        // }else{
        //     return NextResponse.json({ message : 'notfound' }, {status: 404});
        // }
        // return NextResponse.json({ message: 'ok'}, { status: 201});
        return NextResponse.json({ann : jsonobj}, {status: 201});
    }catch{
        return NextResponse.json({ error }, { status: 500 });
    }

    // const announcement =  SearchingAnnouncementPage.searchJobList(job);
   
}