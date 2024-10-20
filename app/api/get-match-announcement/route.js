import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import SearchingAnnouncementPage from '../AnnouncementSubsystem/SearchingAnnouncementPage'
 
export async function GET(request) {

    try{
        const { rows } = sql
    }catch{
        return NextResponse.json({ error }, { status: 500 });
    }
   
}