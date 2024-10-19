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
    const jobTitleOptions: string[] = ["FullStack Developer", "Database Designer", "AI Developer"];
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

    const handleSubmit = async () => {
        console.log(selectedTags);


        try{        let jobField;
        let worktype;
        let location;


        for(let i =0; i<selectedTags.length; i++){

            if(selectedTags[i].source == "Faculty"){
                jobField = selectedTags[i].label;
                continue;
            }else if(selectedTags[i].source == "Work Type"){
                worktype = selectedTags[i].label;
                continue;
            }else if(selectedTags[i].source == "Province"){
                location = selectedTags[i].label;
                continue;
            }
        }
            const res = await fetch(`http://localhost:3000/api/get-announcement`, {
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({jobField, worktype, location})
                
            });

            const data = res.json();
            console.log(data);
        }catch(error){
            console.log(error);
        }
        
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
                fontSize: '18px',
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
                        onChange={(e, value) => handleComboboxChange(event, value, "Field")}
                        sx={{ 
                            width: '322px',
                        }}
                        renderInput={(params) => <TextField {...params} label="Field" />}
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
                        onChange={(e, value) => handleComboboxChange(event, value, "Location")}
                        sx={{ 
                            width: '220px',
                        }}
                        renderInput={(params) => <TextField {...params} label="Location" />}
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
                <Box 
                    sx={{ 
                        display: 'flex', 
                        gap: 2 // Spacing between buttons
                    }}
                    >
                        <Button variant="contained" color="warning" onClick={handleSubmit} sx={{ width: '322px' }}>
                            Find a job!
                        </Button>
                        <Button variant="contained" color="error" /*onClick={} ปุ่มนี้คือ กดปุ้ป จะไปดึงข้อมูลจากข้อมูลของUsersมาFilter แล้วแสดงบนแถบด้านขวาทันที*/ sx={{ width: '322px' }}> 
                            Match a job!✨
                        </Button>
                </Box>
            </Box>
        </Box>
        
        
    );
};

export default JobSearch;
