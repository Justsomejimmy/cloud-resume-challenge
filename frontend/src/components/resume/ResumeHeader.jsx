import React from "react";

export default function ResumeHeader(props) {
    const header = props.header;
    return (
        <section className="header">
            <h1>{ header.name }</h1>
            <p>
                { header.location }
                &bull;
                <a href="mailto:{header.email}">{ header.email }</a>
                &bull;
                { header.phone }
            </p>
        </section>
  );
}