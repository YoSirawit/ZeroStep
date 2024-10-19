"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';

interface JobCountDisplayProps {
    jobPositionsCount: number;
    companiesHiringCount: number;
}

const JobCount: React.FC<JobCountDisplayProps> = ({ jobPositionsCount, companiesHiringCount }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 3,
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                marginTop: '20px',
                border: '3px solid #ccc', 
                marginLeft: '20px',
                marginRight: '20px', 
                maxWidth: '685px',
                textAlign: 'center',
            }}
        >
            {/* Job Positions Available */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    fontWeight: 'bold',
                    fontSize: '1.2em',
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Job Position Available
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {jobPositionsCount} Positions!
                </Typography>
            </Box>

            {/* Companies Hiring */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: 2,
                    fontSize: '1.1em',
                }}
            >
                <Typography variant="h6">Companies Hiring</Typography>
                <Typography variant="h6">{companiesHiringCount} Companies!</Typography>
            </Box>
        </Box>
    );
};

export default JobCount;