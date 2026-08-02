import React from "react";
import 'css/pages/projects.css';
import ProjectsData from "data/ProjectsData";
import { ChevronLeft } from 'lucide-react';
import { useParams } from "react-router";
import { NavLink } from "react-router";

export default function ProjectPage() {
    const { handle } = useParams();

    const project = ProjectsData.find(p => p.handle === handle);
    return (
        <>
            <NavLink className="bttn l-icon" to="/projects">
                <ChevronLeft />
                Back to projects
            </NavLink>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
        </>
    )
}