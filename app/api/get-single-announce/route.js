import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const announceID = searchParams.get('id');
    try{
         const announce = await sql`SELECT * FROM Announcement where id = ${announceID};`;
        console.log(announce.rows);
        if(pets.rowCount > 0){
            return NextResponse.json({announce: announce.rows })
        }else{
            return NextResponse.json({ message : 'notfound' }, {status: 404});
        }
    }catch(error){
        return NextResponse.json({ error }, { status: 500 });
    }
   
}