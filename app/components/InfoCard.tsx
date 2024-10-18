"use client";
import React from 'react';
import { Paper, Typography, TextareaAutosize } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faBriefcase } from '@fortawesome/free-solid-svg-icons';

interface InfoCardProps {
    companyName: string;
    jobTitle: string;
    workType: string;
    jobDetail: string;
}
 /* เดี๋ยวผมมาตกแต่งต่อครับท่านผู้นำ */
const InfoCard: React.FC<InfoCardProps> = ({ companyName, jobTitle, workType, jobDetail }) => {
    return (
        <Paper sx={{ padding: 2, marginBottom: 1 , borderRadius: '20px', backgroundColor: '#e0e0e0', border: '3px solid #ccc', marginLeft: '20px', marginRight: '20px',}}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
                {companyName}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 0.5 }}>
                <Typography variant="subtitle1" component="p" sx={{ marginRight: 1 }}>
                    <FontAwesomeIcon icon={faListUl} /> {jobTitle}
                </Typography>
                <Typography variant="subtitle1" component="p">
                    <FontAwesomeIcon icon={faBriefcase} /> {workType}
                </Typography>
            </div>
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

