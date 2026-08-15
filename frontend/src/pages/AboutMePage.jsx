import React from "react";
import { NavLink } from "react-router";
import { ArrowRight } from "lucide-react";
import "css/pages/aboutme.css";
import jimmyPhoto from "images/jimmy_hoang.webp";

export default function AboutMePage() {
    return (
        <>
            <section className="about_intro">
                <div className="about_intro_content">
                    <p className="eyebrow">ABOUT ME</p>

                    <h1>A little more about me.</h1>

                    <p>
                        I'm Jimmy, a Computer Science 2026 graduate from the
                        University of New Mexico with an interest in software
                        engineering, cloud infrastructure, and systems.
                    </p>

                    <p>
                        I'm a practical learner so I learn the most by building things. A majority of my
                        projects start with a problem or an idea and turn into
                        an opportunity to explore a new technology, programming
                        language, or system.
                    </p>
                </div>

                <div className="about_photo">
                    <img
                        src="jimmyPhoto"
                        alt="Jimmy Hoang"
                    />
                </div>
            </section>

            <section className="about_story">
                <p className="eyebrow">MY STORY</p>

                <h2>Always Learning.</h2>

                <p>
                    I started my Computer Science journey in elementary school, where I was getting taught how to type and was 
                    introduced to Scratch, my first programming language. I didn't know it then, but that was the start to a never-ending education.
                    In highschool, I took a dual-credit C++ programming class in CNM. I was better than my friends who were also taking it for our 
                    highschool dual prerequisites and that convinced me to make it my major. I reveled at the fact that I was
                    able to create simple programs like rock-paper-sciccors.
                    When I entered University, I didn't know what concentration of Computer Science I wanted to do, so I explored many avenues.
                    My journey since have taken me across several areas of
                    computing, from software development and databases to
                    Linux systems, networking, cloud infrastructure, HFOSS open-source communities, and
                    high-performance computing.
                </p>

                <p>
                    I particularly enjoy projects where I can understand how
                    the pieces fit together rather than treating technology as
                    a black box. That has led me to work with technologies
                    including AWS, Docker, Kubernetes, Terraform, Linux,
                    Python, Java, C++, and Rust.
                </p>

                <p>
                    In general, I've always been a person with many interests and I easily find myself absorbed in whatever topic I am currently into or introduced to.
                    Some of my longer-term interests are listed below.
                </p>
            </section>

            <section className="hobbies">
                <div className="section_heading">
                    <div>
                        <h2>Hobbies & Interests</h2>
                    </div>
                </div>

                <div className="hobby_grid">
                    <div className="hobby">
                        <span className="hobby_number">01</span>
                        <h3>Scuba Diving 🤿</h3>
                        <p>
                            I enjoy scuba diving and want to do it more in the future! 
                            I originally was inspired by Grand Blue, an anime, and got certified in 2024.
                            I am currently PADI Open Water Diver certified, but I haven't dived in about two years now, so I need to take a refresher course. 
                            I plan to take the refresher and Advanced Open Water Diver class within the next year! 
                        </p>
                    </div>

                    <div className="hobby">
                        <span className="hobby_number">02</span>
                        <h3>Languages & Culture ⛩️</h3>
                        <p>
                            I'm interested in languages and cultural exchange.
                            I've been involved with the UNM Japanese Language
                            and Culture Club and enjoy opportunities to practice
                            Japanese and participate in cultural events. 
                            I am still studying Japanese with the goal of passing the N4 within the coming year!
                            I've also studied Sign Language and German in the past, and plan to continue learning German at some point.
                            Besides learning languages, I'm a traveler and I want to be one of the people to have been to every country!
                        </p>
                    </div>

                    <div className="hobby">
                        <span className="hobby_number">03</span>
                        <h3>Reading 📖</h3>
                        <p>
                            I personally think that everyone should read and as such I have been reading more and more, 
                            especially within the last year.
                            The last book that I finished was The Grace of Kings by Ken Liu about a week ago and when I was reading it, 
                            I just couldn't put it down for a week straight.
                            The next book that I'm going to read is The Bear and the Nightingale by Katherine Arden, 
                            which was recommended to me by a friend.
                        </p>
                    </div>

                    <div className="hobby">
                        <span className="hobby_number">04</span>
                        <h3>Photography & Film 📸</h3>
                        <p>
                            I'm interested in photography and digital media,
                            particularly the ways visual storytelling can
                            communicate ideas differently from traditional
                            technical work. Last year, I watched over 60+ films, 
                            which is a record I don't think I'll ever be able to replicate or beat.
                            I admittingly still consume too much media and am currently watching Narcos.
                            I also have a YouTube channel that I run as a personal project/hobby.
                            Try and find it if you can!
                        </p>
                    </div>

                     <div className="hobby">
                        <span className="hobby_number">05</span>
                        <h3>Video Games 🎮</h3>
                        <p>
                            I love to play games! While I'd like to say I enjoy every genre, it wouldn't be true.
                            I primarily play single player story games and fighting games primarily Tekken 8 and SF6. 
                            I hate platformers and am not any good at shooters. 
                            I've also been involved in Game Jams while I was at the University of Utah, but have 
                            since decided that game development isn't for me at the moment. That could change in 
                            the future for sure if the right opportunity came up though!
                        </p>
                    </div>
                </div>
            </section>

            <section className="about_cta">
                <p className="eyebrow">GET IN TOUCH</p>

                <h2>Interested in working together?</h2>

                <p>
                    Feel free to check out my projects or get in touch if
                    you'd like to talk.
                </p>

                <div className="hero_buttons">
                    <NavLink className="bttn secondary" to="/projects">
                        View Projects
                    </NavLink>

                    <a
                        className="bttn"
                        href="mailto:j1mm4hoang@gmail.com"
                    >
                        Contact Me
                        <ArrowRight size={18} />
                    </a>
                </div>
            </section>
        </>
    );
}