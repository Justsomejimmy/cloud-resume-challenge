import React from "react";
import { NavLink } from "react-router";
import { ArrowRight } from "lucide-react";
import ProjectsData from "data/ProjectsData.json";
import HomeData from "data/HomeData.json";
import ViewCounter from "components/ViewCounter";
import 'css/pages/home.css';

export default function HomePage() {
    const featuredProjects = ProjectsData.filter(project =>
        HomeData.featured_projects.includes(project.handle)
    );

    return (
        <>
            <section className="home_hero">
                <div className="hero_content">
                    <p className="eyebrow">SOFTWARE • CLOUD • DEVOPS</p>
                    <h1>{HomeData.name}</h1>

                    <p className="hero_description">
                        {HomeData.description}
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
                    {HomeData.focus.map((focus, index) => (
                        <div className="focus_item" key={focus.title}>
                            <span>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div>
                                <h3>{focus.title}</h3>
                                <p>{focus.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="portfolio_tech">
                <p className="eyebrow">THIS PORTFOLIO</p>

                <h2>
                    Built with modern web and cloud technologies.
                </h2>

                <div className="tech_list">
                    {HomeData.portfolio_technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
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
            <ViewCounter />
        </>
    );
}