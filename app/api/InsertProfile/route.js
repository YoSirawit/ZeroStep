import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(req, res) {
    // const { searchParams } = new URL(request.url);
    // const petName = searchParams.get('petName');
    // const ownerName = searchParams.get('ownerName');
    try {
        const data = await req.json();
        // if (req.method === 'POST') {
            
        //     // const result = await sql`UPDATE applicant SET ${dataType} = ${data} WHERE id = ${applicantID};`;
            
        // } else {

        // }
    } catch (error) {
        console.log("Update Failed.");
    }
}