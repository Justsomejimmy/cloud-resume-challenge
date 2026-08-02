import React from "react";
import { NavLink } from "react-router";

export default function ProjectItem(props) {
    const project = props.project;
    return (
        <div className="project_item">
            <div className="project_info">
                <h2>{project.name}</h2>
                <p> {project.description} </p>
                <NavLink className="bttn" to={`/projects/${project.handle}`}>View Project Details</NavLink>
            </div>
            <img className="project_thumbnail" src={project.thumbnail}></img>
        </div>
    );
}