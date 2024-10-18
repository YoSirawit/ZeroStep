"use client";
import React, { useState } from 'react';
import { TextField, Autocomplete, Chip, Box, Button } from '@mui/material';

interface Tag {
    label: string;
    source: string;
}

const JobSearch: React.FC = () => {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    const handleComboboxChange = (event: any, value: string | null, source: string) => {
        if (value) {
            const newTag = { label: value, source };
            setSelectedTags((prevTags) => [...prevTags.filter(tag => tag.source !== source),
                newTag,
            ]);
        }
    };
    const jobTitleOptions: string[] = ["Developer", "Designer", "Manager"];
    const FacultyOptions: string[] = ["IT", "DSBA", "AIT"];
    const WorkTypeOptions: string[] = ["Work From Home", "In-office", "Hybrid"];
    const ProvinceOptions: string[] = ["Bangkok", "Roi-et", "Chiang-Mai" , "Nonthaburi"];
    const WorkHourOptions: string[] = ["9:00-12:00", "12:00-16:00", "16:00-21:00"];

    const handleDeleteTag = (tagToDelete: string) => {
        setSelectedTags((prevTags) => prevTags.filter(tag => tag.label !== tagToDelete));
    };
    const colorMapping: { [key: string]: string } = {
        "Job Title": "primary", // Blue (MUI default for 'primary')
        "Faculty": "secondary", // Purple (MUI default for 'secondary')
        "WorkType": "success", // Green
        "Province": "warning", // Orange
        "Work Hour": "#4b00ff",
    };

    const handleSubmit = () => {
        console.log(selectedTags);
    };
    

    return (
        <Box 
            sx={{
                marginTop: '20px',
                marginLeft: '20px',
                marginRight: '20px', 
                maxWidth: '685px',
            }}
        >
            <Box sx={{ 
                padding: 2, 
                backgroundColor: '#f0f0f0', 
                borderRadius: '8px', 
                width: '100%', 
                maxWidth: '685px',
                Height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                fontFamily: 'Georgia, serif',
                fontSize: '18px',
                fontWeight: '300',
                color: '#555',
            }}>
                <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'nowrap', 
                    overflowX: 'auto', 
                    gap: 1, 
                    padding: 1, 
                    whiteSpace: 'nowrap',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '4px',
                }}>
                    Tags Filter :
                    {selectedTags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag.label}
                            onDelete={() => handleDeleteTag(tag.label)}
                            color="primary"
                        />
                    ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap'}}>
                    <Autocomplete
                        options={jobTitleOptions}
                        onChange={(e, value) => handleComboboxChange(event, value, "Job Title")}
                        sx={{ 
                            width: '322px',
                        }}
                        renderInput={(params) => <TextField {...params} label="Job Title" />}
                    />
                    <Autocomplete
                        options={FacultyOptions}
                        onChange={(e, value) => handleComboboxChange(event, value, "Faculty")}
                        sx={{ 
                            width: '322px',
                        }}
                        renderInput={(params) => <TextField {...params} label="Faculty" />}
                    />
                    <Autocomplete
                        options={WorkTypeOptions}
                        onChange={(e, value) => handleComboboxChange(event, value, "Work Type")}
                        sx={{ 
                            width: '220px',
                        }}
                        renderInput={(params) => <TextField {...params} label="Work Type" />}
                    />
                    <Autocomplete
                        options={ProvinceOptions}
                        onChange={(e, value) => handleComboboxChange(event, value, "Province")}
                        sx={{ 
                            width: '220px',
                        }}
                        renderInput={(params) => <TextField {...params} label="Province" />}
                    />
                    <Autocomplete
                        options={WorkHourOptions}
                        onChange={(e, value) => handleComboboxChange(event, value, "Work Hour")}
                        sx={{ 
                            width: '197px',
                        }}
                        renderInput={(params) => <TextField {...params} label="Work hours" />}
                    />
                </Box>

                <Button variant="contained" color="warning" fullWidth onClick={handleSubmit}>
                    Find a job!
                </Button>
            </Box>
        </Box>
        
    );
};

export default JobSearch;
