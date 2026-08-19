import React from "react";

import "../brands.css";

import {
    Header,
    InnerPageLogo,
    Footer
} from "./Home.jsx";

import { affiliateBrands } from "../data/affiliateBrands.js";

import {
    FiBookOpen,
    FiCode,
    FiCpu,
    FiGlobe,
    FiShield,
    FiMonitor,
    FiHeart,
    FiHome,
    FiBriefcase,
    FiShoppingBag,
    FiTruck,
    FiZap,
    FiLayers,
    FiCompass,
    FiGrid
} from "react-icons/fi";


/*
==================================================
  CATEGORY ICONS
==================================================
*/

const categoryIcons = {

    education: FiBookOpen,

    technology: FiCpu,

    software: FiCode,

    ai: FiZap,

    gaming: FiMonitor,

    entertainment: FiMonitor,

    travel: FiCompass,

    mobility: FiTruck,

    automotive: FiTruck,

    health: FiHeart,

    beauty: FiHeart,

    wellness: FiHeart,

    lifestyle: FiGlobe,

    home: FiHome,

    business: FiBriefcase,

    finance: FiBriefcase,

    trading: FiBriefcase,

    shopping: FiShoppingBag,

    fashion: FiShoppingBag,

    cybersecurity: FiShield,

    privacy: FiShield,

    affiliate: FiLayers,

    marketing: FiLayers,

    web: FiCode,

    domains: FiCode,

    hosting: FiCode,

    infrastructure: FiCode,

    general: FiGrid

};


/*
==================================================
  CATEGORY SUBTITLES
==================================================
*/

const categorySubtitles = {

    education:
        "Learning & Professional Development",

    travel:
        "Travel, Mobility & Connectivity",

    software:
        "Software, SaaS & Creative Tools",

    other:
        "Other & Emerging Brands",

    lifestyle:
        "Lifestyle, Fashion & Personal Goods",

    technology:
        "Technology & Consumer Electronics",

    home:
        "Home, Office & Consumer Goods",

    ai:
        "AI & Automation",

    gaming:
        "Gaming & Entertainment",

    health:
        "Health, Beauty & Wellness",

    cybersecurity:
        "Cybersecurity, Privacy & Digital Safety",

    automotive:
        "Automotive, Mobility & Outdoor Tech",

    affiliate:
        "Affiliate & Marketing Platforms",

    business:
        "Business, Finance & Trading",

    web:
        "Web, Domains, Hosting & Infrastructure"

};


/*
==================================================
  CATEGORY INTRO
==================================================
*/

const categoryIntros = {

    education:
        "Explore selected platforms and services supporting learning, education, skills and professional development.",

    travel:
        "Discover brands connected with travel, mobility, transportation and modern connectivity.",

    software:
        "Explore software platforms, SaaS products and creative tools for modern digital work.",

    other:
        "Discover selected brands and emerging services that sit across different parts of the wider ecosystem.",

    lifestyle:
        "Explore lifestyle, fashion, personal goods and everyday consumer brands.",

    technology:
        "Discover technology, electronics and digital products from selected ecosystem brands.",

    home:
        "Explore brands focused on home, office, living and everyday consumer products.",

    ai:
        "Discover AI, automation and intelligent digital services supporting modern users and businesses.",

    gaming:
        "Explore gaming, entertainment and interactive digital experiences.",

    health:
        "Discover selected brands across health, beauty, wellness and personal care.",

    cybersecurity:
        "Explore cybersecurity, privacy and digital safety services for modern online experiences.",

    automotive:
        "Discover automotive, mobility and outdoor technology brands.",

    affiliate:
        "Explore brands and platforms connected with affiliate marketing and digital business.",

    business:
        "Discover business, finance and professional services supporting modern work and commerce.",

    web:
        "Explore domains, hosting, web platforms and digital infrastructure services."

};


/*
==================================================
  NORMALIZE CATEGORY
==================================================
*/

const normalizeCategory = (category = "") => {

    return category
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[–—]/g, "-")
        .replace(/,/g, " ")
        .split(/\s+/)
        .filter(Boolean)
        .join(" ");

};


/*
==================================================
  GET CATEGORY KEY
==================================================
*/

const getCategoryKey = (category = "") => {

    const normalized = normalizeCategory(category);

    if (normalized.includes("education")) {
        return "education";
    }

    if (normalized.includes("travel")) {
        return "travel";
    }

    if (normalized.includes("software")) {
        return "software";
    }

    if (normalized.includes("other")) {
        return "other";
    }

    if (
        normalized.includes("lifestyle") ||
        normalized.includes("fashion")
    ) {
        return "lifestyle";
    }

    if (
        normalized.includes("technology") ||
        normalized.includes("consumer electronics")
    ) {
        return "technology";
    }

    if (
        normalized.includes("home") ||
        normalized.includes("office")
    ) {
        return "home";
    }

    if (normalized.includes("ai")) {
        return "ai";
    }

    if (
        normalized.includes("gaming") ||
        normalized.includes("entertainment")
    ) {
        return "gaming";
    }

    if (
        normalized.includes("health") ||
        normalized.includes("beauty") ||
        normalized.includes("wellness")
    ) {
        return "health";
    }

    if (
        normalized.includes("cybersecurity") ||
        normalized.includes("privacy")
    ) {
        return "cybersecurity";
    }

    if (
        normalized.includes("automotive") ||
        normalized.includes("outdoor")
    ) {
        return "automotive";
    }

    if (
        normalized.includes("affiliate") ||
        normalized.includes("marketing")
    ) {
        return "affiliate";
    }

    if (
        normalized.includes("business") ||
        normalized.includes("finance") ||
        normalized.includes("trading")
    ) {
        return "business";
    }

    if (
        normalized.includes("web") ||
        normalized.includes("domains") ||
        normalized.includes("hosting") ||
        normalized.includes("infrastructure")
    ) {
        return "web";
    }

    return "general";

};


/*
==================================================
  CATEGORY ICON
==================================================
*/

const getCategoryIcon = (category) => {

    const key = getCategoryKey(category);

    return categoryIcons[key] || categoryIcons.general;

};


/*
==================================================
  MAIN COMPONENT
==================================================
*/

function AffiliateBrandsList() {

    return (

        <div className="affiliate-list-page">


            {/* =================================================
                HEADER
            ================================================= */}

            <Header />

            <InnerPageLogo />


            {/* =================================================
                MAIN
            ================================================= */}

            <main className="affiliate-list-main">

                <div className="affiliate-list-container">


                    {/* =================================================
                        HERO
                    ================================================= */}

                    <section className="affiliate-list-hero">

                        <span className="affiliate-list-kicker">
                            AFFILIATE BRAND ECOSYSTEM
                        </span>

                        <h1 className="affiliate-list-title">
                            Our Affiliate Brand Network
                        </h1>

                        <p className="affiliate-list-subtitle">
                            Explore the brands connected with the
                            GoodOneCreation ecosystem, organized
                            across relevant categories.
                        </p>

                    </section>


                    {/* =================================================
                        DIRECTORY
                    ================================================= */}

                    <section className="affiliate-list-directory">


                        <div className="affiliate-list-section-heading">

                            <span className="affiliate-list-kicker">
                                BRAND DIRECTORY
                            </span>

                            <h2>
                                Explore Our Brand Categories
                            </h2>

                            <p>
                                Browse the brands across technology,
                                software, education, gaming, travel,
                                lifestyle, business and other areas
                                of our digital ecosystem.
                            </p>

                        </div>


                        {/* =================================================
                            CATEGORY LIST
                        ================================================= */}

                        <div className="affiliate-category-list">

                            {Object.entries(affiliateBrands).map(
                                ([category, brands]) => {

                                    const categoryKey =
                                        getCategoryKey(category);

                                    const CategoryIcon =
                                        getCategoryIcon(category);

                                    const subtitle =
                                        categorySubtitles[categoryKey] ||
                                        category;

                                    const intro =
                                        categoryIntros[categoryKey] ||
                                        "Explore selected brands connected with the GoodOneCreation ecosystem.";


                                    return (

                                        <section
                                            key={category}
                                            className={`affiliate-category-section affiliate-category-${categoryKey}`}
                                        >


                                            {/* =================================================
                                                CATEGORY HEADING
                                            ================================================= */}

                                            <div className="affiliate-category-heading">


                                                <div className="affiliate-category-icon">

                                                    <CategoryIcon
                                                        aria-hidden="true"
                                                    />

                                                </div>


                                                <span className="affiliate-list-kicker">
                                                    CATEGORY
                                                </span>


                                                <h3>
                                                    {category}
                                                </h3>


                                                <p className="affiliate-category-subtitle">
                                                    {subtitle}
                                                </p>


                                                <p className="affiliate-category-description">
                                                    {intro}
                                                </p>

                                            </div>


                                            {/* =================================================
                                                BRAND TEXT LIST
                                            ================================================= */}

                                            <ul className="affiliate-brand-list">

                                                {brands.map(
                                                    (brand, index) => (

                                                        <li
                                                            key={`${brand}-${index}`}
                                                            className="affiliate-brand-list-item"
                                                        >

                                                            <span
                                                                className="affiliate-brand-list-icon"
                                                                aria-hidden="true"
                                                            >
                                                                <span>
                                                                    ◆
                                                                </span>
                                                            </span>

                                                            <span className="affiliate-brand-list-name">
                                                                {brand}
                                                            </span>

                                                        </li>

                                                    )
                                                )}

                                            </ul>


                                        </section>

                                    );

                                }
                            )}

                        </div>


                    </section>


                    {/* =================================================
                        NFTRAJA STORE CTA
                    ================================================= */}

                    <section className="affiliate-list-cta">

                        <div className="affiliate-list-cta-content">

                            <span className="affiliate-list-kicker">
                                EXPLORE THE FULL COLLECTION
                            </span>

                            <h2>
                                Discover More Brands & Deals
                            </h2>

                            <p>
                                Explore the complete brand collection,
                                products and available offers on the
                                NFTRaja Store.
                            </p>


                            <a
                                href="https://www.nftraja.com/p/nftraja-store.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="affiliate-list-cta-btn"
                            >
                                Visit NFTRaja Store →
                            </a>

                        </div>

                    </section>


                </div>

            </main>


            {/* =================================================
                FOOTER
            ================================================= */}

            <Footer />

        </div>

    );

}


export default AffiliateBrandsList;