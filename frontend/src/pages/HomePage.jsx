import React from "react";
import { NavLink } from "react-router";
import { ArrowRight } from "lucide-react";
import ProjectsData from "data/ProjectsData.js";
import 'css/pages/home.css' ;

export default function HomePage() {
    const featuredProjects = ProjectsData.slice(0, 3);

    return (
        <>
            <section className="home_hero">
                <div className="hero_content">
                    <p className="eyebrow">SOFTWARE • CLOUD • DEVOPS</p>

                    <h1>Jimmy Hoang</h1>

                    <p className="hero_description">
                        Computer Science graduate focused on software engineering, cloud infrastructure,
                        and building practical solutions through hands-on development.
                    </p>

                    <div className="hero_buttons">
                        <NavLink className="bttn secondary" to="/resume">
                            View Resume
                        </NavLink>
                        
                        <NavLink className="bttn" to="/projects">
                            View Projects
                            <ArrowRight size={18} />
                        </NavLink>
                    </div>
                </div>
            </section>

            <section className="featured_projects">
                <div className="section_heading">
                    <div>
                        <p className="eyebrow">SELECTED WORK</p>
                        <h2>Featured Projects</h2>
                    </div>

                    <NavLink className="view_all" to="/projects">
                        View all
                        <ArrowRight size={16} />
                    </NavLink>
                </div>

                <div className="project_grid">
                    {featuredProjects.map((project) => (
                        <div className="project_card" key={project.handle}>

                            <div className="project_card_content">
                                <h3>{project.name}</h3>

                                <NavLink
                                    to={`/projects/${project.handle}`}
                                    className="project_link"
                                >
                                    View Project
                                    <ArrowRight size={16} />
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="current_focus">
                <div>
                    <p className="eyebrow">CURRENT FOCUS</p>
                    <h2>Building and learning through projects.</h2>
                </div>

                <div className="focus_items">
                    <div className="focus_item">
                        <span>01</span>
                        <div>
                            <h3>Cloud Infrastructure</h3>
                            <p>
                                Exploring AWS, Terraform, Docker, and
                                Kubernetes through practical projects.
                            </p>
                        </div>
                    </div>

                    <div className="focus_item">
                        <span>02</span>
                        <div>
                            <h3>Software Engineering</h3>
                            <p>
                                Building maintainable applications with
                                modern development practices and tools.
                            </p>
                        </div>
                    </div>

                    <div className="focus_item">
                        <span>03</span>
                        <div>
                            <h3>Continuous Learning</h3>
                            <p>
                                Expanding my technical skills through
                                coursework, personal projects, and hands-on
                                experimentation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="portfolio_tech">
                <p className="eyebrow">THIS PORTFOLIO</p>

                <h2>Built with modern web and cloud technologies.</h2>

                <div className="tech_list">
                    <span>React</span>
                    <span>Vite</span>
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>AWS</span>
                    <span>Docker</span>
                    <span>Terraform</span>
                </div>
            </section>

            <section className="home_cta">
                <h2>Want to see what I've been building?</h2>

                <div className="hero_buttons">
                    <NavLink className="bttn secondary" to="/aboutme">
                        About Me
                    </NavLink>

                    <NavLink className="bttn" to="/projects">
                        Explore Projects
                        <ArrowRight size={18} />
                    </NavLink>
                </div>
            </section>
        </>
    );
}
