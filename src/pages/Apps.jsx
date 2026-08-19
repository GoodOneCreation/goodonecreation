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
    FiLayers,
    FiSmartphone,
    FiClock
} from "react-icons/fi";

import nftRajaLogo from "../images/nftraja-logo.webp";
import gamintoLogo from "../images/gaminto.webp";
import toolazaLogo from "../images/toolaza.webp";
import artempleLogo from "../images/artemple.webp";
import qbankLogo from "../images/qbank.webp";
import akhandverseLogo from "../images/akhandverse.webp";
import cartoonverseLogo from "../images/cartoonverse.webp";
import kidsverseLogo from "../images/kidsverse.webp";
import animeverseLogo from "../images/animeverse.webp";
import photoverseLogo from "../images/photoverse.webp";
import iqvibeLogo from "../images/iqvibe.webp";
import inditoneLogo from "../images/inditone.webp";
import viewlystLogo from "../images/viewlyst.webp";
import pickauraLogo from "../images/pickaura.webp";
import ladyglamourLogo from "../images/ladyglamour.webp";


/*
==================================================
  APP DATA
==================================================
*/

const apps = [

    /*
    ==================================================
      PUBLISHED APP
    ==================================================
    */

    {
        id: "nft-raja",
        name: "NFTraja",
        logo: nftRajaLogo,
        subtitle: "Digital Ecosystem App",
        description:
            "NFTraja brings the wider digital ecosystem closer to users through a connected experience covering content, platforms, tools, discoveries and digital destinations.",
        details:
            "The first published app in the GoodOneCreation ecosystem, connecting users with the growing NFTraja digital ecosystem from one accessible destination.",
        status: "published",
        accent: "orange",
        link: "https://play.google.com/store/apps/details?id=com.nftraja.app"
    },


    /*
    ==================================================
      UPCOMING APPS
    ==================================================
    */

    {
        id: "gaminto",
        name: "GAMINTO",
        logo: gamintoLogo,
        subtitle: "Gaming & Interactive Entertainment",
        description:
            "A dedicated gaming experience bringing games, entertainment and interactive digital experiences together for players.",
        details:
            "GAMINTO is planned as a focused gaming destination within the GoodOneCreation ecosystem.",
        status: "upcoming",
        accent: "purple",
        link: "#"
    },

    {
        id: "toolaza",
        name: "TOOLAZA",
        logo: toolazaLogo,
        subtitle: "AI & Digital Utility Tools",
        description:
            "A utility-focused app experience designed to bring useful AI, productivity, developer, design and everyday digital tools closer to users.",
        details:
            "TOOLAZA will provide a convenient way to discover and access practical digital utilities from one place.",
        status: "upcoming",
        accent: "blue",
        link: "#"
    },

    {
        id: "artemple",
        name: "Artemple",
        logo: artempleLogo,
        subtitle: "Art & Creative Discovery",
        description:
            "A creative app experience focused on digital art, visual storytelling, artistic inspiration and creative discovery.",
        details:
            "Artemple is planned as a dedicated creative destination for artists, designers and creative learners.",
        status: "upcoming",
        accent: "red",
        link: "#"
    },

    {
        id: "q-bank",
        name: "Q.Bank",
        logo: qbankLogo,
        subtitle: "Learning & Knowledge",
        description:
            "A smart learning experience designed to help students and self-learners access organized educational resources and knowledge.",
        details:
            "Q.Bank is planned as a knowledge-focused digital learning experience within the ecosystem.",
        status: "upcoming",
        accent: "green",
        link: "#"
    },

    {
        id: "akhandverse",
        name: "Akhandverse",
        logo: akhandverseLogo,
        subtitle: "Sanatan Dharma & Cultural Knowledge",
        description:
            "A spiritual and cultural digital experience focused on Sanatan Dharma, Indian heritage, Vedic wisdom and traditional knowledge.",
        details:
            "Akhandverse will bring spiritual, cultural and educational experiences into a dedicated digital destination.",
        status: "upcoming",
        accent: "gold",
        link: "#"
    },

    {
        id: "cartoonverse",
        name: "Cartoonverse",
        logo: cartoonverseLogo,
        subtitle: "Cartoon & Animation World",
        description:
            "A playful creative experience built around cartoons, characters, animation and visual storytelling.",
        details:
            "Cartoonverse is planned as an entertainment and creative destination for cartoon and animation enthusiasts.",
        status: "upcoming",
        accent: "yellow",
        link: "#"
    },

    {
        id: "kidsverse",
        name: "Kidsverse",
        logo: kidsverseLogo,
        subtitle: "Kids Learning & Creativity",
        description:
            "A child-friendly digital experience designed around learning, creativity, curiosity and fun educational activities.",
        details:
            "Kidsverse is planned as a dedicated digital destination for children and family-friendly learning experiences.",
        status: "upcoming",
        accent: "cyan",
        link: "#"
    },

    {
        id: "animeverse",
        name: "Animeverse",
        logo: animeverseLogo,
        subtitle: "Anime & Creative Culture",
        description:
            "A dedicated anime-focused experience bringing together anime culture, characters, visual creativity and digital discovery.",
        details:
            "Animeverse is planned as a creative destination for anime fans, artists and enthusiasts.",
        status: "upcoming",
        accent: "pink",
        link: "#"
    },

    {
        id: "photoverse",
        name: "Photoverse",
        logo: photoverseLogo,
        subtitle: "Photography & Visual Creativity",
        description:
            "A visual experience focused on photography, creative imagery, visual storytelling and photography learning.",
        details:
            "Photoverse is planned as a dedicated destination for photographers, creators and visual enthusiasts.",
        status: "upcoming",
        accent: "indigo",
        link: "#"
    },

    {
        id: "iqvibe",
        name: "iQVibe",
        logo: iqvibeLogo,
        subtitle: "Productivity & Personal Growth",
        description:
            "A smart digital experience focused on productivity, learning efficiency, personal growth and better digital habits.",
        details:
            "iQVibe is planned as a productivity and self-improvement destination within the ecosystem.",
        status: "upcoming",
        accent: "violet",
        link: "#"
    },

    {
        id: "inditone",
        name: "IndiTone",
        logo: inditoneLogo,
        subtitle: "Indian Music & Audio Culture",
        description:
            "A music-focused digital experience connecting Indian music culture, audio creativity and sound-based discovery.",
        details:
            "IndiTone is planned as a dedicated destination for music, audio creativity and cultural discovery.",
        status: "upcoming",
        accent: "saffron",
        link: "#"
    },

    {
        id: "viewlyst",
        name: "Viewlyst",
        logo: viewlystLogo,
        subtitle: "Video Discovery & Media",
        description:
            "A video-focused experience designed for discovering visual content, entertainment, learning resources and digital media.",
        details:
            "Viewlyst is planned as a dedicated destination for video discovery and visual experiences.",
        status: "upcoming",
        accent: "teal",
        link: "#"
    },

    {
        id: "ladyglamour",
        name: "Ladyglamour",
        logo: ladyglamourLogo,
        subtitle: "Women, Beauty & Lifestyle",
        description:
            "A lifestyle-focused digital experience covering beauty, fashion, wellness, confidence and modern women's interests.",
        details:
            "Ladyglamour is planned as a dedicated lifestyle destination for women.",
        status: "upcoming",
        accent: "rose",
        link: "#"
    },

    {
        id: "pickaura",
        name: "PickAura",
        logo: pickauraLogo,
        subtitle: "Smart Product Discovery",
        description:
            "A discovery-focused experience helping users explore useful products, digital services, tools and things worth choosing.",
        details:
            "PickAura is planned as a smart discovery destination focused on research, comparison and informed choices.",
        status: "upcoming",
        accent: "coral",
        link: "#"
    }

];


/*
==================================================
  APP CARD
==================================================
*/

function AppCard({ app, index }) {

    const isPublished = app.status === "published";

    return (

        <article
            className={`app-showcase-card app-accent-${app.accent}`}
        >

            <div className="app-showcase-inner">


                {/* =================================================
                    APP LOGO
                ================================================= */}

                <div
                    className="app-showcase-logo"
                    aria-label={`${app.name} logo`}
                >

                    <img
                        src={app.logo}
                        alt={`${app.name} logo`}
                    />

                </div>


                {/* =================================================
                    APP INFORMATION
                ================================================= */}

                <div className="app-showcase-content">

                    <div className="app-showcase-number">
                        {String(index + 1).padStart(2, "0")}
                    </div>


                    <span className="app-showcase-kicker">

                        {isPublished
                            ? "PUBLISHED APP"
                            : "UPCOMING APP"}

                    </span>


                    <h2 className="app-showcase-title">
                        {app.name}
                    </h2>


                    <h3 className="app-showcase-subtitle">
                        {app.subtitle}
                    </h3>


                    <p className="app-showcase-description">
                        {app.description}
                    </p>


                    <p className="app-showcase-details">
                        {app.details}
                    </p>


                    {isPublished ? (

                        <a
                            href={app.link}
                            className="app-showcase-btn"
                        >

                            <span>
                                Explore App
                            </span>

                            <FiExternalLink
                                aria-hidden="true"
                            />

                        </a>

                    ) : (

                        <span className="app-showcase-upcoming">

                            <FiClock
                                aria-hidden="true"
                            />

                            <span>
                                Coming Soon
                            </span>

                        </span>

                    )}

                </div>


            </div>

        </article>

    );

}


/*
==================================================
  MAIN COMPONENT
==================================================
*/

function Apps() {

    const publishedApps = apps.filter(
        (app) => app.status === "published"
    );

    const upcomingApps = apps.filter(
        (app) => app.status === "upcoming"
    );


    return (

        <div className="apps-page">


            {/* =================================================
                HEADER
            ================================================= */}

            <Header />

            <InnerPageLogo />


            {/* =================================================
                MAIN
            ================================================= */}

            <main className="apps-main">


                {/* =================================================
                    HERO
                ================================================= */}

                <section className="apps-hero">

                    <div className="apps-hero-content">

                        <span className="apps-kicker">
                            GOODONECREATION APPS
                        </span>


                        <h1 className="apps-title">
                            Digital Experiences,
                            <span> In Your Hands.</span>
                        </h1>


                        <p className="apps-subtitle">
                            Explore the apps being developed
                            across the GoodOneCreation ecosystem,
                            from published experiences to the
                            next generation of upcoming apps.
                        </p>

                    </div>

                </section>


                {/* =================================================
                    PUBLISHED APPS
                ================================================= */}

                <section className="apps-section">

                    <div className="apps-section-header">

                        <span className="apps-kicker">
                            AVAILABLE NOW
                        </span>


                        <h2>
                            Published Apps
                        </h2>


                        <p>
                            Explore the apps currently available
                            from the GoodOneCreation ecosystem.
                        </p>

                    </div>


                    <div className="apps-showcase-list">

                        {publishedApps.map((app, index) => (

                            <AppCard
                                key={app.id}
                                app={app}
                                index={index}
                            />

                        ))}

                    </div>

                </section>


                {/* =================================================
                    UPCOMING APPS
                ================================================= */}

                <section className="apps-section apps-upcoming-section">

                    <div className="apps-section-header">

                        <span className="apps-kicker">
                            IN DEVELOPMENT
                        </span>


                        <h2>
                            Upcoming Apps
                        </h2>


                        <p>
                            New digital experiences are being
                            developed across different categories
                            and audiences. More apps will be
                            introduced over time.
                        </p>

                    </div>


                    <div className="apps-showcase-list">

                        {upcomingApps.map((app, index) => (

                            <AppCard
                                key={app.id}
                                app={app}
                                index={index + 1}
                            />

                        ))}

                    </div>

                </section>


                {/* =================================================
                    FINAL CTA
                ================================================= */}

                <section className="apps-final-cta">

                    <div className="apps-final-card">

                        <div className="apps-final-icon">
                            <FiSmartphone
                                aria-hidden="true"
                            />
                        </div>


                        <div className="apps-final-content">

                            <span className="apps-kicker">
                                EXPLORE THE ECOSYSTEM
                            </span>


                            <h2>
                                Discover More From GoodOneCreation
                            </h2>


                            <p>
                                Explore the projects, platforms,
                                digital worlds and other experiences
                                being developed across the ecosystem.
                            </p>


                            <div className="apps-final-actions">

                                <a
                                    href="/projects"
                                    className="apps-final-primary"
                                >

                                    <FiLayers
                                        aria-hidden="true"
                                    />

                                    <span>
                                        Explore Our Projects
                                    </span>

                                    <FiArrowRight
                                        aria-hidden="true"
                                    />

                                </a>


                                <a
                                    href="/"
                                    className="apps-final-secondary"
                                >

                                    <FiGrid
                                        aria-hidden="true"
                                    />

                                    <span>
                                        Explore More
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


export default Apps;