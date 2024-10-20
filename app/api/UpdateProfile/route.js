import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(req, res) {
    
    try {
        const data = await req.json();

        const { firstName } = data;
        // if (req.method === 'POST') {
            
        const result = await sql`UPDATE applicant SET firstname = ${firstName} WHERE id = 1;`;
            
        // } else {
        if (result.rowCount === 0) {
            return NextResponse.json({ message: 'No record found to update' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Update successful', data: result });
        // }
    } catch (error) {
        console.error('Update Failed:', error);
        return NextResponse.json({ message: 'Update failed', error: error.message }, { status: 500 });
    }
}