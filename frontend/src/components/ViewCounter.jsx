import React, {useEffect, useState} from "react";

export default function ViewCounter(){
    const [count, setCount] = useState(0);
    const endpoint = import.meta.env.VITE_COUNTER_ENDPOINT;

    useEffect(() => {
        fetch(endpoint + "/counter", {
            method: "POST",
        })
            .then((res) => res.json())
            .then((data) => setCount(Number(data.count) || 0))
            .catch((err) =>
                console.error("Error incrementing view count:", err)
            );
    }, [endpoint]);

    return (
        <div className='view_counter_wrap'>
            <div className='view_counter'>
                <span className='count'> {count} </span>
                <span className='label'>Views</span>
            </div>
        </div>
    )
}