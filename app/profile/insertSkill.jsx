
import { sql } from '@vercel/postgres';

export default async function insertSkill({ skill }) {
    try {
        const result = await sql`INSERT INTO skill (applicant_id, skill) VALUES (${1}, ${skill});`;
        console.log("Insert result:", result);
        console.log("Insert Successed.");
    } catch (error) {
        console.log("Insert Failed.");
    }
}
