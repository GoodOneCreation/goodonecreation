import React from "react";

import {
    Header,
    InnerPageLogo,
    Footer
} from "./Home.jsx";

import nftrajaLogo from "../images/nftraja-logo.webp";
import founderDinesh from "../images/founder-dinesh.webp";
import founderBharti from "../images/founder-bharti.webp";


function ContactUs() {

    return (

        <div className="contact-page">

            <Header />

            <InnerPageLogo />


            {/*==================================================
              CONTACT US
            ==================================================*/}

            <main className="contact-page-main">

                <div className="contact-page-container">


                    {/*==================================================
                      01. PAGE INTRO
                    ==================================================*/}

                    <section className="contact-page-intro">

                        <span className="contact-page-kicker">
                            LET'S CONNECT
                        </span>

                        <h1 className="contact-page-title">
                            Contact GoodOneCreation
                        </h1>

                        <p className="contact-page-subtitle">
                            Ideas, collaborations, partnerships and
                            opportunities — let's connect and build
                            something meaningful together.
                        </p>

                        <div className="contact-page-divider"></div>


                        <div className="contact-page-intro-actions">

                            <a
                                href="mailto:contact@good1creation.com"
                                className="contact-primary-btn"
                            >
                                ✉️ Contact Us
                            </a>

                            <a
                                href="/collaborate"
                                className="contact-secondary-btn"
                            >
                                🤝 Collaborate With Us
                            </a>

                        </div>

                    </section>


                    {/*==================================================
                      02. DIRECT CONTACT
                    ==================================================*/}

                    <section className="contact-page-section contact-email-section">

                        <div className="contact-section-heading">

                            <span className="contact-section-icon">
                                📩
                            </span>

                            <div>

                                <span className="contact-section-kicker">
                                    DIRECT CONTACT
                                </span>

                                <h2>
                                    Get in Touch
                                </h2>

                            </div>

                        </div>


                        <p className="contact-section-description">
                            Have a question, business enquiry, collaboration
                            opportunity or something you'd like to discuss?
                            Reach out to us directly.
                        </p>


                        <div className="contact-email-card">

                            <div className="contact-email-icon">
                                ✉
                            </div>

                            <div className="contact-email-info">

                                <span>
                                    Official Email
                                </span>

                                <strong>
                                    contact@good1creation.com
                                </strong>

                            </div>

                            <a
                                href="mailto:contact@good1creation.com"
                                className="contact-small-btn"
                            >
                                Send Email →
                            </a>

                        </div>

                    </section>


                    {/*==================================================
                      03. WORK WITH GOODONECREATION
                    ==================================================*/}

                    <section className="contact-page-section">

                        <div className="contact-section-header">

                            <span className="contact-section-kicker">
                                OPPORTUNITIES
                            </span>

                            <h2>
                                Work With GoodOneCreation
                            </h2>

                            <p>
                                Explore ways to connect, collaborate and
                                create meaningful opportunities together.
                            </p>

                        </div>


                        <div className="contact-opportunity-grid">

                            <a
                                href="/collaborate"
                                className="contact-opportunity-card"
                            >
                                <span className="contact-opportunity-icon">
                                    🤝
                                </span>

                                <strong>
                                    Collaborate
                                </strong>

                                <span>
                                    Build something meaningful together.
                                </span>
                            </a>


                            <a
                                href="/partner"
                                className="contact-opportunity-card"
                            >
                                <span className="contact-opportunity-icon">
                                    💼
                                </span>

                                <strong>
                                    Partner
                                </strong>

                                <span>
                                    Explore strategic partnerships.
                                </span>
                            </a>


                            <a
                                href="/investor"
                                className="contact-opportunity-card"
                            >
                                <span className="contact-opportunity-icon">
                                    💰
                                </span>

                                <strong>
                                    Investor
                                </strong>

                                <span>
                                    Explore investment opportunities.
                                </span>
                            </a>


                            <a
                                href="/sponsor"
                                className="contact-opportunity-card"
                            >
                                <span className="contact-opportunity-icon">
                                    🎯
                                </span>

                                <strong>
                                    Sponsor
                                </strong>

                                <span>
                                    Support our projects and initiatives.
                                </span>
                            </a>


                            <a
                                href="/grant"
                                className="contact-opportunity-card"
                            >
                                <span className="contact-opportunity-icon">
                                    🎓
                                </span>

                                <strong>
                                    Grant
                                </strong>

                                <span>
                                    Explore grant opportunities.
                                </span>
                            </a>

                            <a
                                href="/affiliate-brands"
                                className="contact-opportunity-card"
                            >
                                <span className="contact-opportunity-icon">
                                    🎓
                                </span>

                                <strong>
                                    Affiliate
                                </strong>

                                <span>
                                    Explore affiliate opportunities.
                                </span>
                            </a>

                        </div>

                    </section>


                    {/*==================================================
                      04. FOUNDERS
                    ==================================================*/}

                    <section className="contact-page-section contact-founders-section">

                        <div className="contact-section-header">

                            <span className="contact-section-kicker">
                                THE PEOPLE BEHIND THE VISION
                            </span>

                            <h2>
                                Meet the Founders
                            </h2>

                            <p>
                                Building the vision through technology,
                                creativity and digital content.
                            </p>

                        </div>


                        <div className="contact-founder-reach">

                            <strong>
                                2 Founders
                            </strong>

                            <span>
                                •
                            </span>

                            <strong>
                                100K+ Combined Social Reach
                            </strong>

                        </div>


                        <div className="contact-founder-grid">


                            {/*==================================================
                              FOUNDER 01 — DINESH
                            ==================================================*/}

                            <article className="contact-founder-card">

                                <div className="contact-founder-image-wrap">

                                    <img
                                        src={founderDinesh}
                                        alt="Dinesh Kumar Birla"
                                        className="contact-founder-image"
                                    />

                                </div>


                                <div className="contact-founder-info">

                                    <h3>
                                        Dinesh Kumar Birla
                                    </h3>

                                    <p className="contact-founder-role">
                                        Founder • Technology &amp; Creative Lead
                                    </p>

                                    <p className="contact-founder-description">
                                        Leading technology, development,
                                        design and creative direction across
                                        the GoodOneCreation ecosystem.
                                    </p>


                                    <div className="contact-founder-socials">


                                        {/* Facebook */}

                                        <a
                                            href="https://www.facebook.com/share/1Cx6R1xXXC/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Dinesh Kumar Birla on Facebook"
                                            className="contact-social-link"
                                        >
                                            <svg viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z"
                                                />
                                            </svg>
                                        </a>


                                        {/* Instagram */}

                                        <a
                                            href="https://www.instagram.com/dkgurjar7181?igsh=eXJ3Z2lrNmhldDIz"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Dinesh Kumar Birla on Instagram"
                                            className="contact-social-link"
                                        >
                                            <svg viewBox="0 0 24 24">
                                                <rect
                                                    x="3"
                                                    y="3"
                                                    width="18"
                                                    height="18"
                                                    rx="5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                                <circle
                                                    cx="17.5"
                                                    cy="6.5"
                                                    r="1.2"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </a>


                                        {/* YouTube */}

                                        <a
                                            href="https://youtube.com/@dkgurjar7181?si=ZoxWOE-KYxqFjXd5"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Dinesh Kumar Birla on YouTube"
                                            className="contact-social-link"
                                        >
                                            <svg viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9-.5-5.8-.5-5.8s0-3.9.5-5.8Z"
                                                />
                                                <path
                                                    fill="#fff"
                                                    d="m9.6 15.8 6.2-3.8-6.2-3.8v7.6Z"
                                                />
                                            </svg>
                                        </a>


                                        {/* Pinterest */}

                                        <a
                                            href="https://pin.it/7h48gniRr"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Dinesh Kumar Birla on Pinterest"
                                            className="contact-social-link"
                                        >
                                            <svg viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M12 2a10 10 0 0 0-3.6 19.3c-.1-1.6 0-3.5.4-5.1l1.1-4.7s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-.9 3.8-.3 1.1.6 2 1.7 2 2.1 0 3.8-2.2 3.8-5.4 0-2.8-2-4.8-5-4.8-3.4 0-5.4 2.5-5.4 5.1 0 1 .4 2.1.9 2.7.1.1.1.2.1.4l-.3 1.1c-.1.3-.4.4-.7.3-1.5-.7-2.4-2.8-2.4-4.5 0-3.7 2.7-7.1 7.8-7.1 4.1 0 7.3 2.9 7.3 6.7 0 4-2.5 7.2-5.9 7.2-1.2 0-2.4-.6-2.8-1.3l-.7 2.7c-.3 1.2-1.1 2.7-1.7 3.6A10 10 0 1 0 12 2Z"
                                                />
                                            </svg>
                                        </a>


                                        {/* LinkedIn */}

                                        <a
                                            href="https://in.linkedin.com/in/dinesh-kumar-birla-a4a28a178"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Dinesh Kumar Birla on LinkedIn"
                                            className="contact-social-link"
                                        >
                                            <svg viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.8c0-3.7-2-5.4-4.7-5.4-2.2 0-3.2 1.2-3.8 2v-1.9H9V21h3.5v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.8 2 3.3V21H21v-7.2Z"
                                                />
                                            </svg>
                                        </a>


                                        {/* X */}

                                        <a
                                            href="https://x.com/DineshKumarBir2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Dinesh Kumar Birla on X"
                                            className="contact-social-link"
                                        >
                                            <svg viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.4L2.9 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.8h1.7L8.3 4H6.5l11.3 15.8Z"
                                                />
                                            </svg>
                                        </a>

                                    </div>

                                </div>

                            </article>


                            {/*==================================================
                              FOUNDER 02 — BHARTI
                            ==================================================*/}

                            <article className="contact-founder-card">

                                <div className="contact-founder-image-wrap">

                                    <img
                                        src={founderBharti}
                                        alt="Bharti Birla"
                                        className="contact-founder-image"
                                    />

                                </div>


                                <div className="contact-founder-info">

                                    <h3>
                                        Bharti Birla
                                    </h3>

                                    <p className="contact-founder-role">
                                        Co-Founder • Digital Content Creator
                                    </p>

                                    <p className="contact-founder-description">
                                        Creating digital content and
                                        contributing to the creative and
                                        community presence of the ecosystem.
                                    </p>


                                    <div className="contact-founder-socials">


                                        {/* Facebook Profile */}

                                        <a
                                            href="https://www.facebook.com/bgurjar2812?mibextid=ZbWKwL"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Bharti Birla on Facebook"
                                            className="contact-social-link"
                                        >
                                            <svg viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z"
                                                />
                                            </svg>
                                        </a>


                                        {/* Facebook Page */}

                                        <a
                                            href="https://www.facebook.com/share/17WNWnDivD/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Bharti Birla Facebook Page"
                                            className="contact-social-link"
                                        >
                                            <svg viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z"
                                                />
                                            </svg>
                                        </a>


                                        {/* Instagram */}

                                        <a
                                            href="https://www.instagram.com/bgurjar2812?igsh=bzlqODU0MjRmNHpq&igsi=bzlqODU0MjRmNHpq"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Bharti Birla on Instagram"
                                            className="contact-social-link"
                                        >
                                            <svg viewBox="0 0 24 24">
                                                <rect
                                                    x="3"
                                                    y="3"
                                                    width="18"
                                                    height="18"
                                                    rx="5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                                <circle
                                                    cx="17.5"
                                                    cy="6.5"
                                                    r="1.2"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </a>


                                        {/* YouTube */}

                                        <a
                                            href="https://youtube.com/@gurjarbhartivlogs?si=4tDAVM4WunbJlZxG"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Bharti Birla on YouTube"
                                            className="contact-social-link"
                                        >
                                            <svg viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9-.5-5.8-.5-5.8s0-3.9.5-5.8Z"
                                                />
                                                <path
                                                    fill="#fff"
                                                    d="m9.6 15.8 6.2-3.8-6.2-3.8v7.6Z"
                                                />
                                            </svg>
                                        </a>


                                        {/* Pinterest */}

                                        <a
                                            href="https://pin.it/2ZaDZfCV5"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Bharti Birla on Pinterest"
                                            className="contact-social-link"
                                        >
                                            <svg viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M12 2a10 10 0 0 0-3.6 19.3c-.1-1.6 0-3.5.4-5.1l1.1-4.7s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-.9 3.8-.3 1.1.6 2 1.7 2 2.1 0 3.8-2.2 3.8-5.4 0-2.8-2-4.8-5-4.8-3.4 0-5.4 2.5-5.4 5.1 0 1 .4 2.1.9 2.7.1.1.1.2.1.4l-.3 1.1c-.1.3-.4.4-.7.3-1.5-.7-2.4-2.8-2.4-4.5 0-3.7 2.7-7.1 7.8-7.1 4.1 0 7.3 2.9 7.3 6.7 0 4-2.5 7.2-5.9 7.2-1.2 0-2.4-.6-2.8-1.3l-.7 2.7c-.3 1.2-1.1 2.7-1.7 3.6A10 10 0 1 0 12 2Z"
                                                />
                                            </svg>
                                        </a>

                                    </div>

                                </div>

                            </article>

                        </div>

                    </section>


                    {/*==================================================
                      05. GOODONECREATION ECOSYSTEM
                    ==================================================*/}

                    <section className="contact-page-section">

                        <div className="contact-section-header">

                            <span className="contact-section-kicker">
                                OUR DIGITAL ECOSYSTEM
                            </span>

                            <h2>
                                GoodOneCreation
                            </h2>

                            <p>
                                Explore GoodOneCreation across social platforms
                                and discover our creative work, updates,
                                projects and digital presence.
                            </p>

                        </div>


                        <div className="contact-social-grid">


                            <a
                                href="https://www.facebook.com/share/1BdVKjp9J1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">f</span>
                                <strong>Facebook</strong>
                                <span>GoodOneCreation</span>
                            </a>


                            <a
                                href="https://www.instagram.com/good1creation?igsh=NXN6dTJjMHRodGNl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">◎</span>
                                <strong>Instagram</strong>
                                <span>GoodOneCreation</span>
                            </a>


                            <a
                                href="https://youtube.com/@goodonecreation?si=s8R48KmvfaVbj9k4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">▶</span>
                                <strong>YouTube</strong>
                                <span>GoodOneCreation</span>
                            </a>


                            <a
                                href="https://pin.it/9jMiWY7JH"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">P</span>
                                <strong>Pinterest</strong>
                                <span>GoodOneCreation</span>
                            </a>


                            <a
                                href="https://t.me/goodonecreation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">✈</span>
                                <strong>Telegram</strong>
                                <span>GoodOneCreation</span>
                            </a>


                            <a
                                href="https://linktr.ee/goodonecreation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">↗</span>
                                <strong>Linktree</strong>
                                <span>GoodOneCreation</span>
                            </a>

                        </div>

                    </section>


                    {/*==================================================
                      06. NFTraja
                    ==================================================*/}

                    <section className="contact-page-section contact-nftraja-section">

                        <div className="contact-nftraja-content">

                            <div className="contact-nftraja-logo-wrap">

                                <img
                                    src={nftrajaLogo}
                                    alt="NFTraja"
                                    className="contact-nftraja-logo"
                                />

                            </div>


                            <div className="contact-nftraja-info">

                                <span className="contact-section-kicker">
                                    OUR ESTABLISHED CREATIVE BRAND
                                </span>

                                <h2>
                                    NFTraja
                                </h2>

                                <h3>
                                    The Ocean of Digital Art,
                                    Creativity &amp; Visual Imaginations
                                </h3>

                                <p>
                                    NFTraja is an established creative digital
                                    brand within the GoodOneCreation ecosystem,
                                    focused on digital art, creativity, visual
                                    imagination, creative tools, Web3, gaming
                                    and digital experiences.
                                </p>


                                <a
                                    href="https://www.nftraja.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-primary-btn"
                                >
                                    Explore NFTraja →
                                </a>

                            </div>

                        </div>


                        {/* NFTraja Socials */}

                        <div className="contact-social-grid">


                            <a
                                href="https://www.instagram.com/nftrajaa?igsh=MWxjaneXJ3Z2lrNmhldDIz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">◎</span>
                                <strong>Instagram</strong>
                                <span>NFTraja</span>
                            </a>


                            <a
                                href="https://www.facebook.com/share/1DMB4qLbfy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">f</span>
                                <strong>Facebook</strong>
                                <span>NFTraja</span>
                            </a>


                            <a
                                href="https://youtube.com/@nftrajaa?si=ENc7ZGWzZM1nWlW_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">▶</span>
                                <strong>YouTube</strong>
                                <span>NFTraja</span>
                            </a>


                            <a
                                href="https://pin.it/JrL24oRkt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">P</span>
                                <strong>Pinterest</strong>
                                <span>NFTraja</span>
                            </a>


                            <a
                                href="https://x.com/nftaraja"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">𝕏</span>
                                <strong>X</strong>
                                <span>NFTraja</span>
                            </a>


                            <a
                                href="https://t.me/nftraja"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">✈</span>
                                <strong>Telegram</strong>
                                <span>NFTraja Channel</span>
                            </a>


                            <a
                                href="https://ko-fi.com/nftraja/tiers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">☕</span>
                                <strong>Membership</strong>
                                <span>NFTraja on Ko-fi</span>
                            </a>


                            <a
                                href="https://buymeacoffee.com/nftraja"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-platform-card"
                            >
                                <span className="contact-platform-icon">☕</span>
                                <strong>Buy Me a Coffee</strong>
                                <span>Support NFTraja</span>
                            </a>

                        </div>

                    </section>


                    {/*==================================================
                      07. SUPPORT
                    ==================================================*/}

                    <section className="contact-page-section contact-support-section">

                        <div className="contact-section-header">

                            <span className="contact-section-kicker">
                                SUPPORT OUR JOURNEY
                            </span>

                            <h2>
                                Support Our Creative Work
                            </h2>

                            <p>
                                Your support helps us continue building
                                creative projects, digital products,
                                educational resources and innovative
                                digital experiences.
                            </p>

                        </div>


                        <div className="contact-support-grid">


                            {/* Ko-fi */}

                            <a
                                href="https://ko-fi.com/nftraja/tiers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-support-card contact-kofi-card"
                            >
                                <span className="contact-support-icon">
                                    ☕
                                </span>

                                <strong>
                                    NFTraja Membership
                                </strong>

                                <span>
                                    Support the creative ecosystem through
                                    our membership community.
                                </span>

                                <b>
                                    Explore Membership →
                                </b>
                            </a>


                            {/* PayPal */}

                            <a
                                href="https://paypal.me/dkbirla7181?locale.x=en_GB&country.x=IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-support-card"
                            >
                                <span className="contact-support-icon">
                                    💙
                                </span>

                                <strong>
                                    PayPal
                                </strong>

                                <span>
                                    Support our digital journey directly.
                                </span>

                                <b>
                                    Support Us →
                                </b>
                            </a>


                            {/* Razorpay */}

                            <a
                                href="https://razorpay.me/@nftraja"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-support-card"
                            >
                                <span className="contact-support-icon">
                                    🟦
                                </span>

                                <strong>
                                    Razorpay
                                </strong>

                                <span>
                                    Support us through online payment.
                                </span>

                                <b>
                                    Support Us →
                                </b>
                            </a>


                            {/* Buy Me a Coffee */}

                            <a
                                href="https://buymeacoffee.com/nftraja"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-support-card"
                            >
                                <span className="contact-support-icon">
                                    ☕
                                </span>

                                <strong>
                                    Buy Me a Coffee
                                </strong>

                                <span>
                                    Support our creative work with a coffee.
                                </span>

                                <b>
                                    Support Us →
                                </b>
                            </a>

                        </div>

                    </section>


                    {/*==================================================
                      08. NFTraja MEMBERSHIP
                    ==================================================*/}

                    <section className="contact-page-section contact-membership-section">

                        <div className="contact-section-header">

                            <span className="contact-section-kicker">
                                NFTRAJA • KO-FI
                            </span>

                            <h2>
                                Support Through Membership
                            </h2>

                            <p>
                                Become part of the NFTraja creative community
                                and unlock member benefits according to your
                                selected membership tier.
                            </p>

                        </div>


                        <div className="contact-membership-grid">


                            <div className="contact-membership-card">

                                <span>
                                    🌱
                                </span>

                                <h3>
                                    NFTraja Supporter
                                </h3>

                                <p>
                                    Exclusive updates, research notes,
                                    wallpapers, bonus resources and
                                    members-only content.
                                </p>

                            </div>


                            <div className="contact-membership-card">

                                <span>
                                    🎨
                                </span>

                                <h3>
                                    NFTraja Premium
                                </h3>

                                <p>
                                    Creator resources, AI image collections,
                                    digital assets, premium content and
                                    exclusive monthly resources.
                                </p>

                            </div>


                            <div className="contact-membership-card">

                                <span>
                                    👑
                                </span>

                                <h3>
                                    NFTraja Ultimate Vault
                                </h3>

                                <p>
                                    Premium eBooks, creator resource bundles,
                                    digital asset vault access and future
                                    premium releases.
                                </p>

                            </div>

                        </div>


                        <div className="contact-membership-action">

                            <a
                                href="https://ko-fi.com/nftraja/tiers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-primary-btn"
                            >
                                Join NFTraja Membership →
                            </a>

                        </div>

                    </section>


                    {/*==================================================
                      09. IDEA CTA
                    ==================================================*/}

                    <section className="contact-page-idea">

                        <span className="contact-page-kicker">
                            HAVE AN IDEA?
                        </span>

                        <h2>
                            Have an Idea Worth Building?
                        </h2>

                        <p>
                            Whether you have a creative concept, technology
                            idea, digital product or collaboration opportunity,
                            we'd love to hear what you're imagining.
                        </p>

                        <a
                            href="/collaborate"
                            className="contact-primary-btn"
                        >
                            Share Your Idea →
                        </a>

                    </section>


                    {/*==================================================
                      10. CONTACT TOPICS
                    ==================================================*/}

                    <section className="contact-page-section contact-topics-section">

                        <div className="contact-section-header">

                            <span className="contact-section-kicker">
                                HOW CAN WE HELP?
                            </span>

                            <h2>
                                What Can You Contact Us About?
                            </h2>

                        </div>


                        <div className="contact-topic-list">

                            <span>
                                Collaboration
                            </span>

                            <span>
                                Partnership
                            </span>

                            <span>
                                Investment
                            </span>

                            <span>
                                Sponsorship
                            </span>

                            <span>
                                Grant Opportunities
                            </span>

                            <span>
                                Creative Projects
                            </span>

                            <span>
                                Technology &amp; Development
                            </span>

                            <span>
                                Digital Products
                            </span>

                        </div>

                    </section>


                    {/*==================================================
                      11. LEGAL
                    ==================================================*/}

                    <section className="contact-page-legal">

                        <p>
                            For information about privacy, website usage
                            and general limitations, please review our
                            legal pages.
                        </p>

                        <div>

                            <a href="/privacy-policy">
                                Privacy Policy
                            </a>

                            <span>
                                •
                            </span>

                            <a href="/terms-conditions">
                                Terms &amp; Conditions
                            </a>

                            <span>
                                •
                            </span>

                            <a href="/disclaimer">
                                Disclaimer
                            </a>

                        </div>

                    </section>


                    {/*==================================================
                      12. FINAL CTA
                    ==================================================*/}

                    <section className="contact-page-final-cta">

                        <h2>
                            Let's Create Something Meaningful.
                        </h2>

                        <p>
                            Have a question, idea or opportunity?
                            Start a conversation with GoodOneCreation.
                        </p>


                        <div className="contact-page-final-actions">

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@goodonecreation.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-primary-btn"
                            >
                                Email Us →
                            </a>


                            <a
                                href="/collaborate"
                                className="contact-secondary-btn"
                            >
                                Collaborate →
                            </a>

                        </div>

                    </section>


                </div>

            </main>


            <Footer />

        </div>

    );

}


export default ContactUs;