"use client";
import React from 'react';
import { Paper, Typography, TextareaAutosize } from '@mui/material';

interface InfoCardProps {
    companyName: string;
    jobTitle: string;
    workType: string;
    jobDetail: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ companyName, jobTitle, workType, jobDetail }) => {
    return (
        <Paper sx={{ padding: 2, marginBottom: 1 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                {companyName}
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ marginTop: 0.5 }}>
                {jobTitle}
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ marginTop: 0.5 }}>
                {workType}
            </Typography>
            <TextareaAutosize
                minRows={3}
                placeholder="Job details..."
                style={{
                    width: '100%',
                    marginTop: '1rem',
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px',
                }}
                value={jobDetail}
                readOnly
            />
        </Paper>
    );
};

export default InfoCard;

