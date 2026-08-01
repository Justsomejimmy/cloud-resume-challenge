import React from "react";
import 'css/pages/home.css' ;
import jimmy_hoang from 'images/jimmy_hoang.webp';

export default function HomePage() {
    return (
        <>
            <div class="profile_pic">
                <img src={jimmy_hoang} />
            </div>
        </>
    )
}