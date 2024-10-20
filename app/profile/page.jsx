import { sql } from '@vercel/postgres';
import ProfileClient from './ProfileClient'; // Import the client component

export default async function ProfilePage() {
  
  // Directly fetch data without caching
  const response = await fetch('http://localhost:3000/api/getApplicant', {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache', // Ensure the request is not cached
    },
  });
  const applicant = await response.json();
  // const { rows: skills } = await sql`SELECT * FROM skill;`;
  const response2 = await fetch('http://localhost:3000/api/getSkill', {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache', // Ensure the request is not cached
    },
  });
  const skills = await response2.json();

  console.log("Applicant Data: ");  
  console.log(applicant);

  return (
    <div>
      <ProfileClient applicant={applicant} skill={skills} /> {/* Render the client component */}
    </div>
  );
}
