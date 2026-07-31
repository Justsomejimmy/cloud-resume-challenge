import React from "react";

export default function ResumeHeader(props) {
    const header = props.header;
    return (
        <section className="header">
            <h1>{ header.name }</h1>
            <p>
                <span className="address">{ header.location }</span>
                <span className="bull">&bull;</span>
                <span className="email"><a href="mailto:{header.email}">{ header.email }</a></span>
                <span className="bull">&bull;</span>
                <span className="phone">{ header.phone }</span>
            </p>
        </section>
  );
}