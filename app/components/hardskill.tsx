"use client";
import React from 'react';
import { Paper, Typography, TextareaAutosize } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faBriefcase } from '@fortawesome/free-solid-svg-icons';

interface InfoCardProps {
    hardSkillReq: string;

}
 /* เดี๋ยวผมมาตกแต่งต่อครับท่านผู้นำ */
const HardSkill: React.FC<InfoCardProps> = ({ hardSkillReq }) => {
    return (<p className="text-gray-500">• {hardSkillReq}</p>
    );
};

export default HardSkill;

