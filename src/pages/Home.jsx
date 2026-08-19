import React, { useState } from "react";

import good1Banner from "../images/good1banner.webp";
import good1Logo from "../images/good1logo.webp";
import projectsImage from "../images/projects.webp";
import appsImage from "../images/apps.webp";
import affiliateBrandsImage from "../images/affiliatebrands.webp";
import innovationsImage from "../images/innovations.webp";
import MenuPage from "./MenuPage.jsx";


/*==================================================
  COMMON HEADER
==================================================*/

export function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    const isActive = (path, hash = "") => {

        if (hash) {
            return (
                currentPath === path &&
                currentHash === hash
            );
        }

        return currentPath === path;
    };


    return (

        <>
            <header className="home-header">

                <div className="home-header-container">


                    {/*==================================================
                      MENU BUTTON
                    ==================================================*/}

                    <button
                        type="button"
                        className="home-menu-btn"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={menuOpen}
                    >

                        <span></span>
                        <span></span>
                        <span></span>

                    </button>


                    {/*==================================================
                      BRAND
                    ==================================================*/}

                    <a
                        href="/"
                        className={`home-brand ${
                            isActive("/") && !currentHash
                                ? "active"
                                : ""
                        }`}
                    >

                        <img
                            src={good1Logo}
                            alt="Good1Creation"
                        />

                        <span>
                            GoodOneCreation
                        </span>

                    </a>


                    {/*==================================================
                      NAVIGATION
                    ==================================================*/}

                    <nav className="home-nav">

                        <a
                            href="/"
                            className={
                                isActive("/") && !currentHash
                                    ? "active"
                                    : ""
                            }
                        >
                            Home
                        </a>


                        <a
                            href="/#about"
                            className={
                                isActive("/", "#about")
                                    ? "active"
                                    : ""
                            }
                        >
                            About
                        </a>


                        <a
                            href="/projects"
                            className={
                                isActive("/projects")
                                    ? "active"
                                    : ""
                            }
                        >
                            Projects
                        </a>

                        <a
                          href="/apps"
                          className={
                          isActive("/apps")
                          ? "active"
                          : ""
                          }
                          >
                          Apps
                        </a>

                        <a
                            href="/affiliate-brands"
                            className={
                                isActive("/affiliate-brands")
                                    ? "active"
                                    : ""
                            }
                        >
                            Affiliate Brands
                        </a>


                        <a
                            href="/collaborate"
                            className={
                                isActive("/collaborate")
                                    ? "active"
                                    : ""
                            }
                        >
                            Collaborate
                        </a>


                        <a
                            href="/investor"
                            className={
                                isActive("/investor")
                                    ? "active"
                                    : ""
                            }
                        >
                            Investor
                        </a>


                        <a
                            href="/partner"
                            className={
                                isActive("/partner")
                                    ? "active"
                                    : ""
                            }
                        >
                            Partner
                        </a>


                        <a
                            href="/grant"
                            className={
                                isActive("/grant")
                                    ? "active"
                                    : ""
                            }
                        >
                            Grant
                        </a>


                        <a
                            href="/sponsor"
                            className={
                                isActive("/sponsor")
                                    ? "active"
                                    : ""
                            }
                        >
                            Sponsor
                        </a>

                    </nav>


                    {/*==================================================
                      CONTACT
                    ==================================================*/}

                    <a
                        href="/contact-us"
                        className={`home-header-btn ${
                            isActive("/contact-us")
                                ? "active"
                                : ""
                        }`}
                    >
                        Contact Us
                    </a>

                </div>

            </header>


            {/*==================================================
              FULL SCREEN MENU
            ==================================================*/}

            {menuOpen && (

                <MenuPage
                    onClose={() => setMenuOpen(false)}
                />

            )}

        </>

    );

}


/*==================================================
  COMMON INNER PAGE LOGO
==================================================*/

export function InnerPageLogo() {

    return (

        <div className="inner-page-logo">

            <img
                src={good1Logo}
                alt="Good One Creation"
            />

        </div>

    );

}


/*==================================================
  COMMON FOOTER
==================================================*/

export function Footer() {

    return (

        <footer className="home-footer">

            <div className="home-footer-container">

                {/* BRAND */}

                <div className="home-footer-brand">

                    <a
                        href="/"
                        className="home-footer-logo"
                    >

                        <img
                            src={good1Logo}
                            alt="Good1Creation"
                        />

                        <span>
                            GoodOneCreation
                        </span>

                    </a>

                    <p>
                        A future-focused digital ecosystem
                        building creative products, platforms
                        and innovative solutions for a better
                        tomorrow.
                    </p>

                </div>


                {/* QUICK LINKS */}

                <div className="home-footer-column">

                    <h3>QUICK LINKS</h3>

                    <a href="/#about">
                        About Us
                    </a>

                    <a href="/projects">
                        Projects
                    </a>

                    <a href="/apps">
                        Apps
                    </a>

                    <a href="/founders">
                        Founders
                    </a>

                    <a href="/collaborate">
                        Collaborate
                    </a>

                </div>


                {/* OPPORTUNITIES */}

                <div className="home-footer-column">

                    <h3>OPPORTUNITIES</h3>

                    <a href="/investor">
                        Investor
                    </a>

                    <a href="/partner">
                        Partner
                    </a>

                    <a href="/grant">
                        Grant
                    </a>

                    <a href="/sponsor">
                        Sponsor
                    </a>

                    <a href="/affiliate-brands">
                        Affiliate Brands
                    </a>

                </div>


                {/* COLLABORATE */}

                <div className="home-footer-column">

                    <h3>COLLABORATE</h3>

                    <a href="/collaborate">
                        Collaborate
                    </a>

                    <a href="/partner">
                        Become a Partner
                    </a>

                    <a href="/sponsor">
                        Become a Sponsor
                    </a>

                    <a href="/grant">
                        Grant Opportunities
                    </a>

                </div>


                {/* LEGAL */}

                <div className="home-footer-column">

                    <h3>LEGAL</h3>

                    <a href="/privacy-policy">
                        Privacy Policy
                    </a>

                    <a href="/terms-conditions">
                        Terms &amp; Conditions
                    </a>

                    <a href="/disclaimer">
                        Disclaimer
                    </a>

                    <a href="/contact-us">
                        Contact Us
                    </a>

                </div>

            </div>


            {/*==================================================
              SOCIAL — FULL WIDTH SINGLE ROW
            ==================================================*/}

<div className="home-footer-social-row">

    {/* Instagram */}

    <a
        href="https://www.instagram.com/good1creation?igsh=NXN6dTJjMHRodGNl"
        className="home-social-btn home-social-instagram"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
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


    {/* Facebook */}

    <a
        href="https://www.facebook.com/share/1BdVKjp9J1/"
        className="home-social-btn home-social-facebook"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
    >

        <svg viewBox="0 0 24 24">

            <path
                fill="currentColor"
                d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4z"
            />

        </svg>

    </a>


    {/* YouTube */}

    <a
        href="https://youtube.com/@goodonecreation?si=s8R48KmvfaVbj9k4"
        className="home-social-btn home-social-youtube"
        aria-label="YouTube"
        target="_blank"
        rel="noopener noreferrer"
    >

        <svg viewBox="0 0 24 24">

            <path
                fill="currentColor"
                d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9-.5-5.8-.5-5.8s0-3.9.5-5.8z"
            />

            <path
                fill="#fff"
                d="M9.6 15.8 15.8 12 9.6 8.2v7.6z"
            />

        </svg>

    </a>


    {/* Pinterest */}

    <a
        href="https://pin.it/9jMiWY7JH"
        className="home-social-btn home-social-pinterest"
        aria-label="Pinterest"
        target="_blank"
        rel="noopener noreferrer"
    >

        <svg viewBox="0 0 24 24">

            <path
                fill="currentColor"
                d="M12 2a10 10 0 0 0-3.6 19.3c-.1-1.6 0-3.5.4-5.1l1.1-4.7s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-.9 3.8-.3 1.1.6 2 1.7 2 2.1 0 3.8-2.2 3.8-5.4 0-2.8-2-4.8-5-4.8-3.4 0-5.4 2.5-5.4 5.1 0 1 .4 2.1.9 2.7.1.1.1.2.1.4l-.3 1.1c-.1.3-.4.4-.7.3-1.5-.7-2.4-2.8-2.4-4.5 0-3.7 2.7-7.1 7.8-7.1 4.1 0 7.3 2.9 7.3 6.7 0 4-2.5 7.2-5.9 7.2-1.2 0-2.4-.6-2.8-1.3l-.7 2.7c-.3 1.2-1.1 2.7-1.7 3.6A10 10 0 1 0 12 2z"
            />

        </svg>

    </a>


    {/* Telegram */}

    <a
        href="https://t.me/goodonecreation"
        className="home-social-btn home-social-telegram"
        aria-label="Telegram"
        target="_blank"
        rel="noopener noreferrer"
    >

        <svg viewBox="0 0 24 24">

            <path
                fill="currentColor"
                d="M21.5 3.5 2.8 10.7c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.8 5.5c.2.6.1.8.7.8.5 0 .7-.2 1-.4 1l2.4-2.3 5 3.7c.9.5 1.5.3 1.7-.8l3.1-15.2c.3-1.3-.5-1.9-1.7-1.4zM8.1 13.3l10.9-6.9c.5-.3 1-.1.6.2l-8.8 7.9-.3 3.1-1.4-4.3-1-.3z"
            />

        </svg>

    </a>


    {/* Linktree */}

    <a
        href="https://linktr.ee/goodonecreation"
        className="home-social-btn home-social-linktree"
        aria-label="Linktree"
        target="_blank"
        rel="noopener noreferrer"
    >

        <svg viewBox="0 0 24 24">

            <path
                fill="currentColor"
                d="M12 2.2 9.4 6.7 12 6.2l-2.8 3.1H12v2.1H9.3L12 15l2.7-3.6H12V9.3h2.8L12 6.2l2.6.5L12 2.2z"
            />

            <path
                fill="currentColor"
                d="M10.8 15.4h2.4V22h-2.4z"
            />

        </svg>

    </a>

</div>


            {/*==================================================
              FOOTER BOTTOM
            ==================================================*/}

            <div className="home-footer-bottom">

                <p>
                    © 2026 Good1Creation. All Rights Reserved.
                </p>

                <p>
                    Made with ♥ for a better digital future.
                </p>

            </div>

        </footer>

    );

}


/*==================================================
  HOME
==================================================*/

function Home() {

    return (

        <div className="home-page">

            {/*==================================================
              01. HEADER
            ==================================================*/}

            <Header />


            {/*==================================================
              02. HERO
            ==================================================*/}
            <section className="home-hero">

                <div className="home-hero-banner">

                    <img
                        src={good1Banner}
                        alt="Good1Creation Digital Innovation"
                    />

                    <div className="home-hero-overlay"></div>

                </div>

                <div className="home-hero-content">

                    <div className="home-hero-copy">

                        <span className="home-eyebrow">
                            DIGITAL INNOVATION ECOSYSTEM
                        </span>

                        <h1>
                            Create.
                            <span> Build.</span>
                            <strong> Inspire.</strong>
                        </h1>

                        <p className="home-hero-tagline">
                            Creative Design, Web Development, Web3, Learning, Education, AI, Digital
                            Solutions &amp; Modern Innovation.
                        </p>

                        <p className="home-hero-description">
                            Building meaningful digital products,
                            platforms and experiences for creators,
                            businesses and communities.
                        </p>

                        <div className="home-hero-actions">

                            <a
                                href="/projects"
                                className="home-primary-btn"
                            >
                                Explore Ecosystem
                                <span>→</span>
                            </a>

                            <a
                                href="/collaborate"
                                className="home-outline-btn"
                            >
                                Get in Touch
                            </a>

                        </div>

                    </div>

                    <div className="home-hero-logo-wrap">

                        <img
                            src={good1Logo}
                            alt="Good1Creation Logo"
                            className="home-hero-logo"
                        />

                    </div>

                </div>

            </section>


            {/*==================================================
              03. ABOUT
            ==================================================*/}
            <section
                id="about"
                className="home-about"
            >

                <div className="home-section-container">

                    <div className="home-section-header">

                        <span className="home-section-kicker">
                            WHO WE ARE
                        </span>

                        <h2 className="home-section-title">
                            GoodOneCreation
                        </h2>

                        <div className="home-divider"></div>

                    </div>

                    <div className="home-about-content">

                        <p>
                            <strong>GoodOneCreation</strong> is a
                            future-focused digital ecosystem dedicated
                            to creativity, technology, education, AI,
                            Web3, gaming, design, digital innovation,
                            and modern online experiences.
                        </p>

                        <p>
                            Our mission is to build impactful digital
                            products, powerful platforms, intelligent
                            tools, and innovative solutions that inspire
                            creators, learners, businesses, and
                            communities around the world.
                        </p>

                    </div>

                </div>

            </section>


            {/*==================================================
              04. FEATURED PROJECTS
            ==================================================*/}
            <section className="home-projects">

                <div className="home-section-container">

                    <div className="home-section-header">

                        <span className="home-section-kicker">
                            OUR ECOSYSTEM
                        </span>

                        <h2 className="home-section-title">
                            Featured Projects
                        </h2>

                        <p className="home-section-subtitle">
                            Discover our flagship digital products
                            and growing ecosystem.
                        </p>

                        <div className="home-divider"></div>

                    </div>

                    <div className="home-project-grid">

    {/* PROJECTS */}

    <a
        href="/projects"
        className="home-project-card"
    >

        <div className="home-project-image">

            <img
                src={projectsImage}
                alt="Projects"
            />

        </div>

        <div className="home-project-info">

            <h3>Projects</h3>

            <p>
                Explore Our Digital Ecosystem
            </p>

            <span className="home-card-arrow">
                View Projects →
            </span>

        </div>

    </a>


    {/* APPS */}

    <a
        href="/apps"
        className="home-project-card"
    >

        <div className="home-project-image">

            <img
                src={appsImage}
                alt="Apps"
            />

        </div>

        <div className="home-project-info">

            <h3>Apps</h3>

            <p>
                Explore Our Digital Applications
            </p>

            <span className="home-card-arrow">
                View Apps →
            </span>

        </div>

    </a>


    {/* AFFILIATE BRANDS */}

    <a
        href="/affiliate-brands"
        className="home-project-card"
    >

        <div className="home-project-image">

            <img
                src={affiliateBrandsImage}
                alt="Affiliate Brands"
            />

        </div>

        <div className="home-project-info">

            <h3>Affiliate Brands</h3>

            <p>
                Explore Our Trusted Brand Ecosystem
            </p>

            <span className="home-card-arrow">
                Explore Brands →
            </span>

        </div>

    </a>


    {/* MORE INNOVATIONS */}

    <a
        href="/projects"
        className="home-project-card"
    >

        <div className="home-project-image">

            <img
                src={innovationsImage}
                alt="More Innovations"
            />

        </div>

        <div className="home-project-info">

            <h3>More Innovations</h3>

            <p>
                New Digital Experiences Coming Soon
            </p>

            <span className="home-card-arrow">
                Discover More →
            </span>

        </div>

    </a>

</div>

<div className="home-project-view-all">

    <a
        href="/projects"
        className="home-primary-btn"
    >
        View All Projects
        <span>→</span>
    </a>

</div>

</div>

</section>


            {/*==================================================
              05. WHY GOOD1CREATION
            ==================================================*/}
            <section className="home-why">

                <div className="home-section-container">

                    <div className="home-section-header">

                        <span className="home-section-kicker">
                            OUR STRENGTH
                        </span>

                        <h2 className="home-section-title">
                            Why Choose Us
                        </h2>

                        <p className="home-section-subtitle">
                            Building ideas into meaningful digital
                            experiences.
                        </p>

                        <div className="home-divider"></div>

                    </div>

                    <div className="home-why-grid">

                        <div className="home-why-item">
                            <span className="home-why-icon">✦</span>
                            <span>Creative Design</span>
                        </div>

                        <div className="home-why-item">
                            <span className="home-why-icon">◈</span>
                            <span>Web Development</span>
                        </div>

                        <div className="home-why-item">
                            <span className="home-why-icon">▣</span>
                            <span>App Development</span>
                        </div>

                        <div className="home-why-item">
                            <span className="home-why-icon">AI</span>
                            <span>AI Solutions</span>
                        </div>

                        <div className="home-why-item">
                            <span className="home-why-icon">💡</span>
                            <span>Innovative Ideas</span>
                        </div>

                        <div className="home-why-item">
                            <span className="home-why-icon">◆</span>
                            <span>E-Commerce</span>
                        </div>

                        <div className="home-why-item">
                            <span className="home-why-icon">◉</span>
                            <span>Gaming Projects</span>
                        </div>

                        <div className="home-why-item">
                            <span className="home-why-icon">◎</span>
                            <span>Digital Marketing</span>
                        </div>

                        <div className="home-why-item">
                            <span className="home-why-icon">✧</span>
                            <span>Visual Experiences</span>
                        </div>

                        <div className="home-why-item">
                            <span className="home-why-icon">∞</span>
                            <span>Digital Innovation</span>
                        </div>

                        <div className="home-why-item">
                            <span className="home-why-icon">⌘</span>
                            <span>Complete Solutions</span>
                        </div>

                        <div className="home-why-item">
                            <span className="home-why-icon">♥</span>
                            <span>Made With Passion</span>
                        </div>

                    </div>

                </div>

            </section>


            {/*==================================================
              06. HOME CTA
            ==================================================*/}
            <section className="home-cta">

                <div className="home-cta-container">

                    <div className="home-cta-content">

                        <span className="home-section-kicker">
                            LET'S BUILD TOGETHER
                        </span>

                        <h2>
                            Have an Idea or Want
                            to Collaborate?
                        </h2>

                        <p>
                            Let's turn meaningful ideas into powerful
                            digital experiences and build something
                            valuable together.
                        </p>

                        <div className="home-cta-actions">

                            <a
                                href="/collaborate"
                                className="home-primary-btn"
                            >
                                Collaborate With Us
                                <span>→</span>
                            </a>

                            <a
                                href="/partner"
                                className="home-outline-btn"
                            >
                                Become a Partner
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/*==================================================
              07. FOOTER
            ==================================================*/}

            <Footer />

        </div>

    );

}


export default Home;