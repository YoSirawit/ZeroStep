import { sql } from '@vercel/postgres';

export default async function updateProfilePage({ dataType, data, applicantID}) {
    try {
        const result = await sql`UPDATE applicant SET ${dataType} = ${data} WHERE id = ${applicantID};`;
        console.log("Update result:", result);
        console.log("Update Successed.");
    } catch (error) {
        console.log("Update Failed.");
    }
}
