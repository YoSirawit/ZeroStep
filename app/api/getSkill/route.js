// app/api/getApplicant/route.js

import { sql } from '@vercel/postgres'; // Ensure you have the proper database connection set up

export const dynamic = "force-dynamic";

export async function GET(request) {
    try {
        // Replace this query with your actual SQL query to fetch applicant data
        const { rows } = await sql`SELECT * FROM skill;`;

        // Return the applicant data as a JSON response
        return new Response(JSON.stringify(rows), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store',  // Prevent caching of the response
                'Pragma': 'no-cache',         // HTTP/1.0 compatibility
                'Expires': '0',               // Immediately expire any cached data
            },
        });
    } catch (error) {
        console.error('Error fetching skill data:', error);

        // Return an error response
        return new Response(JSON.stringify({ error: 'Failed to fetch skill data' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
