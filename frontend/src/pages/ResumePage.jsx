import React from "react";
import 'css/pages/resume.css' 
import ResumeHeader from 'components/resume/ResumeHeader'
import ResumeSection from 'components/resume/ResumeSection'
import resumeData from "data/ResumeData.js";

export default function ResumePage() {
  return (
    <>
        <ResumeHeader header={resumeData.header}></ResumeHeader>
        
        <ResumeSection title="Education" handle='education' section={resumeData.education}/>
        <ResumeSection title="Work Experience" handle='experience' section={resumeData.experience}/>
        <ResumeSection title="Leadership & Activities" handle='leadership_and_activities' section={resumeData.leadership}/>
        <ResumeSection title="Technical Skills" handle='skills' section={resumeData.skills}/>
        <ResumeSection title="Certifications" handle='certifications' section={resumeData.certifications}/>
    </>
  );
}