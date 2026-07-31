import React from "react";

export default function ResumeSectionItem(props) {
    const item = props.item;
    return (
        <div className="item">
            <div className="information_wrap">
                <div className="info">
                    <h3>{item.title}</h3>
                    {item.subtitle && <p>{item.subtitle}</p>}
                    {item.secondarySubtitle && (<p className="coursework">{item.secondarySubtitle}</p>)}
                </div>
                
                <div className="details">
                    <div className="location">
                        {item.location}
                    </div>
                    <div className="duration">
                        {item.duration}
                    </div>
                </div>
            </div>

            {Array.isArray(item.details) && item.details.length >0 && (
                <ul>
                    {item.details.map((text)=> (
                        <li key={text}>{text}</li>
                    ))}
                </ul>
            )}
        </div>
  );
}