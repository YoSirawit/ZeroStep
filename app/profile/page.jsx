import { sql } from '@vercel/postgres';
import ProfileClient from './ProfileClient'; // Import the client component

export default async function ProfilePage() {
  let applicant = [];
  let skills = [];

  try {
    const { rows } = await sql`SELECT * FROM applicant;`;
    applicant = rows;
    console.log(applicant);
  } catch (error) {
    console.error("Database Error:", error);
  }

  try {
    const { rows } = await sql`SELECT * FROM skill;`;
    skills = rows;
    console.log(skills);
  } catch (error) {
    console.error("Database Error:", error);
  }

  return (
    <div>
      <ProfileClient applicant={applicant} skill={skills} /> {/* Render the client component */}
    </div>
  );
}
