import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(req, res) {
    
    try {
        const data = await req.json();

        const { newSkill } = data;
        // if (req.method === 'POST') {

        const result = await sql`INSERT INTO skill (applicant_id, skill) VALUES (${1}, ${newSkill})`;
            
        // } else {
        if (result.rowCount === 0) {
            return NextResponse.json({ message: 'No record found to insert' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Insert successful', data: result });
        // }
    } catch (error) {
        console.error('Insert Failed:', error);
        return NextResponse.json({ message: 'Insert failed', error: error.message }, { status: 500 });
    }
}