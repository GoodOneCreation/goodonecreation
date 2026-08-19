import React from "react";
import emailjs from "@emailjs/browser";
import {
    Header,
    InnerPageLogo,
    Footer
} from "./Home.jsx";

function OfficialSponsors() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#08090d",
                color: "#ffffff",
                padding: "100px 40px",
                textAlign: "center"
            }}
        >
            <h1>Official Sponsors</h1>
            <p>GoodOneCreation Official Sponsors</p>
        </div>
    );
}

export default OfficialSponsors;