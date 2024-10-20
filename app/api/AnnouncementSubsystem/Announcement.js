// import { inputLabelClasses } from '@mui/material';
import Applicant from  '../ApplicantSubsystem/Applicant'
import Job from './Job';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

class Announcement{
    id;
    companyname;
    field;
    position;
    compensation;
    location_;
    hardSkillReq;
    softSkillReq;
    worktype;
    score;
    responsibility;

    constructor(field, pos, compensation, location_, worktype, responsibility){
        this.field = field;
        this.position = pos;
        this.compensation = compensation;
        this.location_ = location_;
        this.hardSkillReq = [];
        this.worktype = worktype;
        this.score = 0;
        this.responsibility = responsibility;
    }

    set Companyname(name){
        this.companyname = name;
    }

    get Companyname(){
        return this.companyname;
    }

    set Id(annID){
        this.id = annID;
    }
    get Id(){
        return this.id;
    }

    set Field(field){
        this.field = field;
    }
    get Field(){
        return this.field;
    }

    set Position(pos){
        this.position = pos;
    }
    get Position(){
        return this.position;
    }

    set Compensation(money){
        this.compensation = money;
    }
    get Compensation(){
        return this.compensation;
    }

    set Location_(lo){
        this.location_ = lo;
    }
    get Location_(){
        return this.location_;
    }

    addHardSkillReq(skill){
        this.hardSkillReq.push(skill);
    }
    get HardSkillReq(){
        return this.hardSkillReq;
    }

    set SoftSkillReq(skill){
        this.softSkillReq = skill;
    }
    get SoftSkillReq(){
        return this.softSkillReq;
    }

    set Score(score){
        this.score = score;
    }

    get Score(){
        return this.score;
    }

    addScore(score){
        this.score += score;
    }

    set Worktype(worktype){
        this.worktype = worktype
    }

    get Worktype(){
        return this.worktype;
    }

    set Responsibility(string){
        this.responsibility = string
    }

    get Responsibility(){
        return this.responsibility;
    }

    static async getJobList(input){
        if (input instanceof Applicant){
            //for getJobList(Applicant user) : Announcement
            try{
                const announcement = await sql`SELECT announcement.id, announcement.field, announcement.position, announcement.compensation, announcement.location, announcement.worktype, company.companyname, company.contact, announcement.responsibility FROM announcement JOIN company ON announcement.companyid = company.id`;
                // console.log(announcement.rows);
                const skill_applicant = await sql`select * from skill`;
                for(let j = 0; j < skill_applicant.rowCount; j++){
                    input.addHardSkill(skill_applicant.rows[j].skill);
                }
                // console.log(input.Id, input.HardSkill);
                let announce_list = [];
                for(let i=0 ; i<announcement.rowCount; i++){
                    let skill_length = 0;
                    let announce = new Announcement(announcement.rows[i].field, announcement.rows[i].position, announcement.rows[i].compensation, announcement.rows[i].location, announcement.rows[i].worktype, announcement.rows[i].responsibility);
                    announce.Id = announcement.rows[i].id;
                    announce.Companyname = announcement.rows[i].companyname;
                    const hardskill = await sql`select skill from announcement_skill_req where announcement_id = ${announcement.rows[i].id}`;
                    for(let j=0; j<hardskill.rowCount; j++){
                        announce.addHardSkillReq(hardskill.rows[j].skill);
                    }
                    // console.log(announce.Id,announce.HardSkillReq);

                    //calculate score
                    if(input.Location_ == announce.Location_){
                        announce.addScore(10);
                    }

                    if(input.HardSkill.length > announce.HardSkillReq.length){
                        skill_length = input.HardSkill.length;
                    }else{
                        skill_length = announce.HardSkillReq.length;
                    }

                    for(let k = 0; k<announce.HardSkillReq.length; k++){
                        if(input.HardSkill.includes(announce.HardSkillReq[k])){
                            announce.addScore(38/announce.HardSkillReq.length);
                        }
                    }

                    if(input.InterestedField == announce.Field){
                        announce.addScore(15);
                    }

                    if(input.Faculty == announce.Field){
                        announce.addScore(37);
                    }

                    // console.log(input.Id, input.InterestedField, input.Faculty, input.Location_)
                    // console.log(announce.Id, announce.Score);

                    
                    announce_list.push(announce);
                }

                announce_list.sort(function(a,b){return b.Score-a.Score});
                // for(let t=0; t<announce_list.length; t++){
                //     console.log(announce_list[t].Score);
                // }


                

                var Jsonstring = JSON.stringify(announce_list);
                var Jsonobj = JSON.parse(Jsonstring);
                console.log(Jsonobj);

                return Jsonobj;
                
            }catch(error){
                console.log(error);
            }
        } else if (input instanceof Job) {
            console.log("in announcement: ", input.Field, input.worktype, input.location);
            if(input.Field != null && input.location != null && input.worktype != null){
                try{
                    const announcement = await sql`SELECT * FROM announcement JOIN company ON announcement.companyid = company.id
                    where field = ${input.Field} and location = ${input.location} and worktype = ${input.worktype}`;
                    //  console.log(announcement.rows);
                   if(announcement.rowCount > 0){
                       return announcement.rows
                   }else{
                       return NextResponse.json({ message : 'notfound' }, {status: 404});
                   }
               }catch{
                   return NextResponse.json({ error }, { status: 500 });
               }
            }else if(input.Field && input.location){
                try{
                    const announcement = await sql`SELECT * FROM announcement JOIN company ON announcement.companyid = company.id
                    where field = ${input.Field} and location = ${input.location}`;
                   //  console.log(announcement.rows);
                   if(announcement.rowCount > 0){
                       return NextResponse.json({announcement: announcement.rows })
                   }else{
                       return NextResponse.json({ message : 'notfound' }, {status: 404});
                   }
               }catch{
                   return NextResponse.json({ error }, { status: 500 });
               }

            }else if(input.Field && input.worktype){
                try{
                    const announcement = await sql`SELECT * FROM announcement JOIN company ON announcement.companyid = company.id
                    where field = ${input.Field} and worktype = ${input.worktype}`;
                   //  console.log(announcement.rows);
                   if(announcement.rowCount > 0){
                       return NextResponse.json({announcement: announcement.rows })
                   }else{
                       return NextResponse.json({ message : 'notfound' }, {status: 404});
                   }
               }catch{
                   return NextResponse.json({ error }, { status: 500 });
               }

            }else if(input.location && input.worktype){
                try{
                    const announcement = await sql`SELECT * FROM announcement JOIN company ON announcement.companyid = company.id
                    where location = ${input.location} and worktype = ${input.worktype}`;
                   //  console.log(announcement.rows);
                   if(announcement.rowCount > 0){
                       return NextResponse.json({announcement: announcement.rows })
                   }else{
                       return NextResponse.json({ message : 'notfound' }, {status: 404});
                   }
               }catch{
                   return NextResponse.json({ error }, { status: 500 });
               }

            }else if(input.Field){
                try{
                    const announcement = await sql`SELECT * FROM announcement JOIN company ON announcement.companyid = company.id
                    where field = ${input.Field}`;
                   //  console.log(announcement.rows);
                   if(announcement.rowCount > 0){
                       return NextResponse.json({announcement: announcement.rows })
                   }else{
                       return NextResponse.json({ message : 'notfound' }, {status: 404});
                   }
               }catch{
                   return NextResponse.json({ error }, { status: 500 });
               }

            }else if(input.location){
                try{
                    const announcement = await sql`SELECT * FROM announcement JOIN company ON announcement.companyid = company.id
                    where location = ${input.location}`;
                   //  console.log(announcement.rows);
                   if(announcement.rowCount > 0){
                       return NextResponse.json({announcement: announcement.rows })
                   }else{
                       return NextResponse.json({ message : 'notfound' }, {status: 404});
                   }
               }catch{
                   return NextResponse.json({ error }, { status: 500 });
               }

            }else if(input.worktype){
                try{
                    const announcement = await sql`SELECT * FROM announcement JOIN company ON announcement.companyid = company.id
                    where worktype = ${input.worktype}`;
                   //  console.log(announcement.rows);
                   if(announcement.rowCount > 0){
                       return NextResponse.json({announcement: announcement.rows })
                   }else{
                       return NextResponse.json({ message : 'notfound' }, {status: 404});
                   }
               }catch{
                   return NextResponse.json({ error }, { status: 500 });
               }

            }else{
                try{
                    const announcement = await sql`SELECT * FROM announcement JOIN company ON announcement.companyid = company.id`;
                   //  console.log(announcement.rows);
                   if(announcement.rowCount > 0){
                       return NextResponse.json({announcement: announcement.rows })
                   }else{
                       return NextResponse.json({ message : 'notfound' }, {status: 404});
                   }
               }catch{
                   return NextResponse.json({ error }, { status: 500 });
               }

            }
        }
    }
}

export default Announcement