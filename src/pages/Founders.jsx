import React from "react";

import {
    FiInstagram,
    FiLinkedin,
    FiMail,
    FiTwitter,
    FiFacebook,
    FiYoutube,
    FiArrowRight
} from "react-icons/fi";

import {
    Header,
    InnerPageLogo,
    Footer
} from "./Home.jsx";

import dineshFounderImage from "../images/founder-dinesh.webp";
import bhartiFounderImage from "../images/founder-bharti.webp";


/*
==================================================
  FOUNDER CARD
==================================================
*/

function FounderCard({
    number,
    image,
    name,
    role,
    description,
    socials,
    reverse = false
}) {

    return (

        <article
            className={`founder-card ${reverse ? "founder-card-reverse" : ""}`}
        >

            <div className="founder-card-image">

                <img
                    src={image}
                    alt={name}
                />

            </div>


            <div className="founder-card-content">

                <span className="founder-card-number">
                    {number}
                </span>


                <span className="founder-card-kicker">
                    FOUNDER
                </span>


                <h2 className="founder-card-name">
                    {name}
                </h2>


                <h3 className="founder-card-role">
                    {role}
                </h3>


                <p className="founder-card-description">
                    {description}
                </p>


                <div className="founder-card-socials">

                    {socials.map((social, index) => (

                        <a
                            key={index}
                            href={social.href}
                            aria-label={social.label}
                            className="founder-social-link"
                            target={
                                social.external
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                social.external
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                        >
                            {social.icon}
                        </a>

                    ))}

                </div>

            </div>

        </article>

    );

}


/*
==================================================
  FOUNDERS DATA
==================================================
*/

const founders = [

    {
        number: "01",

        image: dineshFounderImage,

        name: "Dinesh Kumar Birla",

        role: "Founder · Technology & Creative Lead",

        description:
            "Leading technology, development, design and creative direction across the GoodOneCreation ecosystem.",

        socials: [

            {
                label: "Facebook",
                href: "#",
                icon: <FiFacebook />
            },

            {
                label: "Instagram",
                href: "#",
                icon: <FiInstagram />
            },

            {
                label: "X",
                href: "#",
                icon: <FiTwitter />
            },

            {
                label: "LinkedIn",
                href: "#",
                icon: <FiLinkedin />
            },

            {
                label: "YouTube",
                href: "#",
                icon: <FiYoutube />
            }

        ]
    },


    {
        number: "02",

        image: bhartiFounderImage,

        name: "Bharti Birla",

        role: "Co-Founder · Digital Content Creator",

        description:
            "Creating digital content and contributing to the creative and community presence of the GoodOneCreation ecosystem.",

        socials: [

            {
                label: "Instagram",
                href: "#",
                icon: <FiInstagram />
            },

            {
                label: "Facebook",
                href: "#",
                icon: <FiFacebook />
            },

            {
                label: "FB Page",
                href: "#",
                icon: <FiFacebook />
            },

            {
                label: "YouTube",
                href: "#",
                icon: <FiYoutube />
            },

            {
                label: "X",
                href: "#",
                icon: <FiTwitter />
            }

        ],

        reverse: true
    }

];


/*
==================================================
  MAIN COMPONENT
==================================================
*/

function Founders() {

    return (

        <div className="founders-page">


            {/* =================================================
                HEADER
            ================================================= */}

            <Header />

            <InnerPageLogo />


            {/* =================================================
                MAIN
            ================================================= */}

            <main className="founders-main">


                {/* =================================================
                    HERO / INTRO
                ================================================= */}

                <section className="founders-hero">

                    <div className="founders-hero-content">

                        <span className="founders-kicker">
                            THE PEOPLE BEHIND THE VISION
                        </span>


                        <h1 className="founders-title">
                            Meet the Founders
                        </h1>


                        <p className="founders-subtitle">
                            Building the vision through technology,
                            creativity and digital experiences.
                        </p>


                        <div className="founders-stats">

                            <span>
                                2 Founders
                            </span>

                            <span className="founders-stat-dot">
                                •
                            </span>

                            <span>
                                Growing Digital Ecosystem
                            </span>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    FOUNDERS
                ================================================= */}

                <section className="founders-section">

                    <div className="founders-list">

                        {founders.map((founder) => (

                            <FounderCard
                                key={founder.number}
                                {...founder}
                            />

                        ))}

                    </div>

                </section>


                {/* =================================================
                    CONTACT INFO
                ================================================= */}

                <section className="founders-contact">

                    <div className="founders-contact-card">


                        <div className="founders-contact-content">

                            <span className="founders-kicker">
                                LET'S CONNECT
                            </span>


                            <h2>
                                Have a Project in Mind?
                            </h2>


                            <p>
                                Whether you want to build a website,
                                create an app, explore a collaboration,
                                or simply get in touch, we'd love to
                                hear from you.
                            </p>


                            <div className="founders-contact-actions">

                                <a
                                    href="/contact-us"
                                    className="founders-contact-primary"
                                >

                                    <FiMail
                                        aria-hidden="true"
                                    />

                                    <span>
                                        Contact Us
                                    </span>

                                    <FiArrowRight
                                        aria-hidden="true"
                                    />

                                </a>


                                <a
                                    href="/projects"
                                    className="founders-contact-secondary"
                                >

                                    <span>
                                        Explore Our Projects
                                    </span>

                                </a>

                            </div>

                        </div>


                    </div>

                </section>


            </main>


            {/* =================================================
                FOOTER
            ================================================= */}

            <Footer />

        </div>

    );

}


export default Founders;