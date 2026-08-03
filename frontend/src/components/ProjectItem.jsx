import React from "react";
import { NavLink } from "react-router";

export default function ProjectItem(props) {
    const project = props.project;
    return (
        <div className="project_item">
            <div className="project_info">
                <h2>{project.name}</h2>
                <div className="technologies">
                    {project.technologies.map((tech) => (
                        <span className="technology" key={tech}>
                            {tech}
                        </span>
                    ))}
                </div>
                <p> {project.description} </p>
                <NavLink className="bttn" to={`/projects/${project.handle}`}>View Project Details</NavLink>
                <a className="bttn" href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <img className="project_thumbnail" src={project.thumbnail}></img>
        </div>
    );
}