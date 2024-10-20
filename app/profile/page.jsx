import { sql } from '@vercel/postgres';
import ProfileClient from './ProfileClient'; // Import the client component

export default async function ProfilePage() {
  
  // Directly fetch data without caching
  const response = await fetch('https://zero-step-wheat.vercel.app/api/getApplicant', {
    cache: 'no-store',
    next: {revalidate: 0}
  });
  const applicant = await response.json();
  // const { rows: skills } = await sql`SELECT * FROM skill;`;
  const response2 = await fetch('https://zero-step-wheat.vercel.app/api/getSkill', {
    cache: 'no-store',
    next: {revalidate: 0}
  });
  const skills = await response2.json();

  console.log("Applicant Data: ");  
  console.log(applicant);
  console.log(skills);

  return (
    <div>
      <ProfileClient applicant={applicant} skill={skills} /> {/* Render the client component */}
    </div>
  );
}
