import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    // const petName = searchParams.get('petName');
    try{
         const pets = await sql`SELECT * FROM Pets;`;
        //  console.log(pets.rows);
        if(pets.rowCount > 0){
            return NextResponse.json({pets: pets.rows })
        }else{
            return NextResponse.json({ message : 'notfound' }, {status: 404});
        }
    }catch{
        return NextResponse.json({ error }, { status: 500 });
    }
   
}