"use client";
import React, { useEffect, useState } from 'react';
import { Box, Typography,TextField } from '@mui/material';
import InfoCard from './InfoCard'; // Adjust the path as necessary
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

interface JobListing {
    companyName: string;
    jobTitle: string;
    workType: string;
    jobDetail: string;
}

const JobField: React.FC = () => {
    const [jobListings, setJobListings] = useState<JobListing[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const fetchJobListings = async () => {
    //         try {
    //             const response = await fetch('YOUR_API_ENDPOINT_HERE'); // Replace with your API endpoint
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data: JobListing[] = await response.json(); // Ensure data is typed
    //             setJobListings(data);
    //         } catch (err) {
    //             // Type assertion
    //             if (err instanceof Error) {
    //                 setError(err.message);
    //             } else {
    //                 setError('An unknown error occurred');
    //             }
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchJobListings();
    // }, []);

    // if (loading) {
    //     return <Typography>Loading...</Typography>;
    // }

    // if (error) {
    //     return <Typography>Error: {error}</Typography>;
    // }

    return (
        <Box 
            sx={{
                width: '300px',  
                height: '600px',
                border: '3px solid #ccc', 
                marginTop: '20px',
                borderRadius: '8px', 
                padding: 2,
                backgroundColor: '#f9f9f9',
            }}
            
        >
            <TextField 
                    label="Search Company or Job Name" 
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        style: {
                            textAlign: 'center', // Center the text
                        },
                    }}
                    variant="outlined" 
                    fullWidth
                />
            {jobListings.map((job, index) => (
                <InfoCard
                    key={index}
                    companyName={job.companyName}
                    jobTitle={job.jobTitle}
                    workType={job.workType}
                    jobDetail={job.jobDetail}
                />
            ))}
        </Box>
    );
};

export default JobField;
