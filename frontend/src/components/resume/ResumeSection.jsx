import React from "react";
import ResumeSectionItem from 'components/resume/ResumeSectionItem'

export default function ResumeSection(props) {
    const section = props.section;
    const title = props.title;
    const handle = props.handle;
    return (
        <section className={handle}>
            <h2>{section.title}</h2>

            {section.type === "items" &&
                section.data.map(item => (
                <ResumeSectionItem key={item.id} item={item} />
                ))}

            {section.type === "skills" &&
                Object.entries(section.data).map(([category, skills]) => (
                <div className="skill-group" key={category}>
                    <span className="skill-label">{category}:</span>
                    <span>{skills.join(", ")}</span>
                </div>
                ))}

            {section.type === "certifications" && (
                <ul className="certification-list">
                {section.data.map(cert => (
                    <li key={cert.name}>
                    {cert.name}
                    {cert.status && <span> {cert.status}</span>}
                    </li>
                ))}
                </ul>
            )}
        </section>
  );
}