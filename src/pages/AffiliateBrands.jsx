import React from "react";

import "../brands.css";

import {
    Header,
    InnerPageLogo,
    Footer
} from "./Home.jsx";

import {
    FiArrowRight,
    FiExternalLink,
    FiGrid,
    FiShoppingBag,
    FiLayers,
    FiCompass
} from "react-icons/fi";


/*
==================================================
  AFFILIATE BRANDS — MAIN SHOWCASE PAGE
==================================================
*/

function AffiliateBrands() {

    return (

        <div className="affiliate-main-page">

            {/* =================================================
                HEADER
            ================================================= */}

            <Header />

            <InnerPageLogo />


            {/* =================================================
                MAIN
            ================================================= */}

            <main className="affiliate-main-content">


                {/* =================================================
                    HERO
                ================================================= */}

                <section className="affiliate-main-hero">

                    <div className="affiliate-main-hero-content">

                        <span className="affiliate-main-kicker">
                            AFFILIATE BRAND ECOSYSTEM
                        </span>

                        <h1 className="affiliate-main-title">
                            Discover Brands Worth Exploring
                        </h1>

                        <p className="affiliate-main-subtitle">
                            Explore the affiliate ecosystem connected
                            with GoodOneCreation, featuring products,
                            services and digital experiences from
                            selected partner brands.
                        </p>

                    </div>

                </section>


                {/* =================================================
                    INTRO / ECOSYSTEM
                ================================================= */}

                <section className="affiliate-main-intro">

                    <div className="affiliate-main-section-heading">

                        <span className="affiliate-main-kicker">
                            OUR AFFILIATE ECOSYSTEM
                        </span>

                        <h2>
                            Connecting You With More To Discover
                        </h2>

                        <p>
                            GoodOneCreation brings together digital
                            projects, ideas and experiences across
                            different areas of the online ecosystem.
                            Our affiliate presence connects visitors
                            with selected external brands and
                            destinations.
                        </p>

                    </div>


                    {/* =================================================
                        FEATURE POINTS
                    ================================================= */}

                    <div className="affiliate-main-feature-grid">


                        <div className="affiliate-main-feature">

                            <div className="affiliate-main-feature-icon">
                                <FiGrid aria-hidden="true" />
                            </div>

                            <div>

                                <h3>
                                    Curated Ecosystem
                                </h3>

                                <p>
                                    Explore a broad range of brands
                                    organized across relevant categories.
                                </p>

                            </div>

                        </div>


                        <div className="affiliate-main-feature">

                            <div className="affiliate-main-feature-icon">
                                <FiLayers aria-hidden="true" />
                            </div>

                            <div>

                                <h3>
                                    Diverse Categories
                                </h3>

                                <p>
                                    From technology and software to
                                    lifestyle, travel, gaming and more.
                                </p>

                            </div>

                        </div>


                        <div className="affiliate-main-feature">

                            <div className="affiliate-main-feature-icon">
                                <FiCompass aria-hidden="true" />
                            </div>

                            <div>

                                <h3>
                                    More To Explore
                                </h3>

                                <p>
                                    Discover useful products, services
                                    and destinations beyond our own projects.
                                </p>

                            </div>

                        </div>


                    </div>

                </section>


                {/* =================================================
                    NFTRAJA PRIORITY SHOWCASE
                ================================================= */}

                <section className="affiliate-main-store-section">

                    <div className="affiliate-main-store-card">


                        <div className="affiliate-main-store-content">

                            <span className="affiliate-main-kicker">
                                FEATURED AFFILIATE DESTINATION
                            </span>

                            <h2>
                                Explore the NFTRaja Store
                            </h2>

                            <p>
                                Our affiliate brand ecosystem is
                                connected with the wider NFTRaja
                                Store, where you can explore the
                                complete collection of brands,
                                products and available offers.
                            </p>

                            <p>
                                For the full brand experience and
                                current offerings, visit the NFTRaja
                                Store directly.
                            </p>


                            <a
                                href="https://www.nftraja.com/p/nftraja-store.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="affiliate-main-primary-btn"
                            >

                                <span>
                                    Explore NFTRaja Store
                                </span>

                                <FiExternalLink
                                    aria-hidden="true"
                                />

                            </a>

                        </div>


                        <div className="affiliate-main-store-icon">

                            <FiShoppingBag
                                aria-hidden="true"
                            />

                        </div>


                    </div>

                </section>


                {/* =================================================
                    BRAND DIRECTORY CTA
                ================================================= */}

                <section className="affiliate-main-directory-cta">

                    <div className="affiliate-main-directory-content">

                        <span className="affiliate-main-kicker">
                            BRAND DIRECTORY
                        </span>

                        <h2>
                            Looking For Specific Brands?
                        </h2>

                        <p>
                            Browse our complete affiliate brand
                            directory to explore the brands available
                            across the different categories of the
                            ecosystem.
                        </p>


                        <a
                            href="/affiliate-brands-list"
                            className="affiliate-main-secondary-btn"
                        >

                            <span>
                                View Affiliate Brand Directory
                            </span>

                            <FiArrowRight
                                aria-hidden="true"
                            />

                        </a>

                    </div>

                </section>


                {/* =================================================
                    FINAL CTA
                ================================================= */}

                <section className="affiliate-main-final-cta">

                    <div className="affiliate-main-final-content">

                        <span className="affiliate-main-kicker">
                            GOODONECREATION ECOSYSTEM
                        </span>

                        <h2>
                            Discover More From Our Ecosystem
                        </h2>

                        <p>
                            Explore our projects, digital experiences
                            and other destinations across the
                            GoodOneCreation ecosystem.
                        </p>


                        <a
                            href="/"
                            className="affiliate-main-final-btn"
                        >
                            Discover GoodOneCreation
                            <FiArrowRight
                                aria-hidden="true"
                            />
                        </a>

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


export default AffiliateBrands;