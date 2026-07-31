import React from "react";
import 'css/pages/resume.css' 
import ResumeHeader from 'components/resume/ResumeHeader'
import resumeData from "data/ResumeData.js";

export default function ResumePage() {
  return (
    <>
        <ResumeHeader header={resumeData.header}></ResumeHeader>

        <section className="education">
            <h2>Education & Credentials</h2>
            <div className="item">
                <div className="information_wrap">
                    <div className="info">
                        <h3>University of New Mexico</h3>
                        <p>Bachelor of Science in Computer Science</p>
                        <p className="coursework">
                            Relevant Coursework: Software Engineering, Operating Systems, Algorithms, Cybersecurity
                        </p>
                    </div>
                    
                    <div className="details">
                        <div className="location">
                            Albuquerque, NM
                        </div>
                        <div className="duration">
                            May 2026
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="experience">
            <h2>Work Experience</h2>
            <div className="item">
                <div className="information_wrap">
                    <div className="info">
                        <h3>CSBS COMPUTING, UNIVERSITY OF UTAH</h3>
                        <p>Work Study Office Tech</p>
                    </div>
                    
                    <div className="details">
                        <div className="location">
                            Salt Lake City, UT
                        </div>
                        <div className="duration">
                            Sep 2022 &mdash; Sep 2023
                        </div>
                    </div>
                </div>
            </div>

            <ul>
                <li>
                    Delivered technical support by troubleshooting operating system, hardware, software, networking, and workstation issues across multiple university departments, using structured troubleshooting techniques to maintain reliable computing resources.
                </li>

                <li>
                    Assisted with system deployments, software installations, and routine workstation maintenance while collaborating with professional IT staff to minimize downtime and ensure stable day-to-day operations.
                </li>

                <li>
                    Maintained IT hardware inventory by tracking equipment, preparing systems for deployment or retirement, and assisting with asset organization and lifecycle management.
                </li>
            </ul>
        </section>

        <section className="leadership_and_activities">
            <h2>Leadership &amp; Activities</h2>

            <div className="item">
                <div className="information_wrap">
                    <div className="info">
                        <h3>2024 Winter Classic Invitational Student Cluster Competition</h3>
                        <p>Team Member</p>
                    </div>
                    
                    <div className="details">
                        <div className="location">
                            Albuquerque, NM
                        </div>
                        <div className="duration">
                            Jan 2024 &mdash; Apr 2024
                        </div>
                    </div>
                </div>
            </div>

            <ul>
                <li>
                    Scheduled, managed, and optimized parallel workloads using Slurm on multi-node production HPC clusters, including benchmarking industry-standard HPL and HPCG applications; performed detailed profiling, performance tuning, and resource allocation to maximize throughput and efficiency.
                </li>

                <li>
                    Achieved 2nd place out of 9 national teams by executing optimized workflows for HPC applications from U.S. national labs, coordinating with teammates to use best practices in parallel computing and performance analysis.
                </li>
            </ul>

            <div className="item">
                <div className="information_wrap">
                    <div className="info">
                        <h3>UNM Japanese Language and Culture Club</h3>
                        <p>Treasurer and Secretary</p>
                    </div>
                    
                    <div className="details">
                        <div className="location">
                            Albuquerque, NM
                        </div>
                        <div className="duration">
                            Aug 2025 &mdash; May 2026
                        </div>
                    </div>
                </div>
            </div>

            <ul>
                <li>
                    Managed finances, administrative documentation, and meeting logistics for a student cultural organization, coordinating communication among members to foster engagement and language practice in collaboration with other officers.
                </li>

                <li>
                    Planned and executed joint events with four student organizations by coordinating event logistics, facilitating communication between leadership teams, and managing member outreach across Instagram, LINE, and email.
                </li>
            </ul>
        </section>

        <section className="skills">
            <h2>Technical Skills</h2>

            <div className="skill-group">
                <span className="skill-label">Languages:</span>
                <span>Java, Python, C, C++, JavaScript, HTML/CSS, SQL</span>
            </div>

            <div className="skill-group">
                <span className="skill-label">Cloud & DevOps:</span>
                <span>AWS, Docker, Kubernetes, Terraform</span>
            </div>

            <div className="skill-group">
                <span className="skill-label">Operating Systems:</span>
                <span>Linux (Ubuntu), Windows</span>
            </div>

            <div className="skill-group">
                <span className="skill-label">Tools:</span>
                <span>Git, GitHub, MySQL, Slurm</span>
            </div>
        </section>

        <section className="certifications">
            <h2>Certifications</h2>
            <ul className="certification-list">
                <li>AWS Certified Cloud Practitioner <span>In Progress</span></li>
                <li>PADI Open Water Diver</li>
                <li>120-Hour TEFL/TESOL Certification</li>
                <li>Japanese Language Proficiency Test (JLPT N4) <span>In Progress</span></li>
            </ul>
        </section>
    </>
  );
}