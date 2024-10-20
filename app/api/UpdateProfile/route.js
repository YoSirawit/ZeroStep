import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(req, res) {
    
    try {
        const data = await req.json();

        const {
            id,
            firstName,
            lastName,
            location,
            faculty,
            workExperience,
            interestedField,
            dateOfBirth
          } = data;
            
        const result = await sql`
            UPDATE applicant
            SET 
                firstname = ${firstName},
                lastname = ${lastName},
                location = ${location},
                faculty = ${faculty},
                experience = ${workExperience},
                interested_field = ${interestedField},
                dob = ${dateOfBirth}
            WHERE id = ${id};
        `;

        if (result.rowCount === 0) {
            return NextResponse.json({ message: 'No record found to update' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Update successful', data: result });

    } catch (error) {
        console.error('Update Failed:', error);
        return NextResponse.json({ message: 'Update failed', error: error.message }, { status: 500 });
    }
}