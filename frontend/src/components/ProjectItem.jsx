import React from "react";
import { NavLink } from "react-router";

export default function ProjectItem(props) {
    const project = props.project;
    return (
        <div className="project">
            <h2>{project.name}</h2>
            <img src={project.thumbnail}></img>
            <p> {project.description} </p>
            <NavLink to="/projects/{project.handle}">View Project Details</NavLink>
        </div>
    );
}