import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    // const petName = searchParams.get('petName');
    try{
         const announcement = await sql`SELECT * FROM announcement JOIN company ON announcement.companyid = company.id`;
        //  console.log(announcement.rows);
        if(announcement.rowCount > 0){
            return NextResponse.json({announcement: announcement.rows }, {status: 200})
        }else{
            return NextResponse.json({ message : 'notfound' }, {status: 404});
        }
    }catch{
        return NextResponse.json({ error }, { status: 500 });
    }
   
}