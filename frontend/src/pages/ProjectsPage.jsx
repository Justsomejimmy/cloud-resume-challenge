import React from "react";
import 'css/pages/projects.css' 
import ProjectsData from "data/ProjectsData.json";
import ProjectItem from 'components/ProjectItem'

export default function ProjectsPage() {
    return (
        <>
            <div className = "projects">
                {ProjectsData.map((project) => (
                    <ProjectItem key={project.handle} project={project}/>
                ))}
            </div>
        </>
    )
}