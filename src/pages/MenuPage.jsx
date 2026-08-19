import React from "react";

import {
    FiX,
    FiArrowRight
} from "react-icons/fi";

import "../menu.css";

/*
==================================================
  MENU PAGE / FULL SCREEN MENU
==================================================
*/

function MenuPage({ onClose }) {

    return (

        <div className="menu-page">


            {/* =================================================
                MENU HEADER
            ================================================= */}

            <div className="menu-page-header">

                <div className="menu-page-label">
                    MENU
                </div>


                <button
                    type="button"
                    className="menu-page-close"
                    onClick={onClose}
                    aria-label="Close menu"
                >

                    <FiX
                        aria-hidden="true"
                    />

                    <span>
                        Close
                    </span>

                </button>

            </div>


            {/* =================================================
                MENU CONTENT
            ================================================= */}

            <main className="menu-page-content">

                <div className="menu-page-intro">

                    <span className="menu-page-kicker">
                        GOODONECREATION
                    </span>

                    <h1>
                        Explore Our
                        <span> Digital World.</span>
                    </h1>

                    <p>
                        Navigate through our projects, apps,
                        brands, opportunities and other
                        digital experiences.
                    </p>

                </div>


                {/* =================================================
                    NAVIGATION PLACEHOLDER
                ================================================= */}

                <nav className="menu-navigation">

    <a href="/">Home</a>

    <a href="/projects">Projects</a>

    <a href="/apps">Apps</a>

    <a href="/affiliate-brands">Affiliate Brands</a>

    <a href="/affiliate-brands-list">Affiliate Brands List</a>

    <a href="/founders">Founders</a>

    <a href="/collaborate">Collaborate</a>

    <a href="/investor">Investor</a>

    <a href="/partner">Partner</a>

    <a href="/grant">Grant</a>

    <a href="/sponsor">Sponsor</a>

    <a href="/official-sponsors">Official Sponsors</a>

    <a href="/contact-us">Contact Us</a>

    <a href="/privacy-policy">Privacy Policy</a>

    <a href="/terms-conditions">Terms &amp; Conditions</a>

    <a href="/disclaimer">Disclaimer</a>

</nav>


            </main>

        </div>

    );

}


export default MenuPage;