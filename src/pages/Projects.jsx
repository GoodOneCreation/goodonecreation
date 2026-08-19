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
    FiSmartphone
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


const projects = [

    {
        id: "nft-raja",
        name: "NFTraja",
        logo: nftRajaLogo,
        link: "https://www.nftraja.com",
        subtitle: "Digital Ecosystem & Store",
        description:
            "NFTraja is a broad digital ecosystem bringing together blogs, online stores, digital platforms, useful tools, product discovery and other connected digital experiences under one ecosystem.",
        details:
            "A growing multi-platform digital ecosystem designed to connect content, commerce, tools, services and new digital experiences in one destination.",
        accent: "orange"
    },

    {
        id: "gaminto",
        name: "GAMINTO",
        logo: gamintoLogo,
        link: "https://www.gaminto.in",
        subtitle: "Games & Interactive Entertainment Platform",
        description:
            "GAMINTO is a dedicated gaming platform focused on games, entertainment and interactive digital experiences for a growing community of players.",
        details:
            "A focused gaming destination built to bring games and interactive entertainment experiences together in one platform.",
        accent: "purple"
    },

    {
        id: "toolaza",
        name: "TOOLAZA",
        logo: toolazaLogo,
        link: "https://toolaza.nftraja.com/",
        subtitle: "AI, Productivity & Digital Utility Tools Platform",
        description:
            "TOOLAZA is a curated digital utility platform bringing together AI, productivity, design, developer, and everyday online tools to help creators, learners, and professionals discover and use powerful digital resources efficiently.",
        details:
            "A growing digital tools ecosystem focused on AI tools discovery, productivity, developer utilities, design resources, everyday online utilities, workflow optimization and smarter digital work.",
        accent: "blue"
    },

    {
        id: "artemple",
        name: "Artemple",
        logo: artempleLogo,
        link: "https://nftraja.store/",
        subtitle: "Digital Art, Culture & Creative Heritage Hub",
        description:
            "Artemple is a creative platform focused on art, visual storytelling, cultural expression, and digital creativity. It helps artists, designers, and creative learners discover inspiration, improve skills, and explore modern and traditional artistic workflows.",
        details:
            "A creative destination bringing together digital art resources, visual storytelling inspiration, traditional and modern art styles, portfolio development, creative learning, cultural exploration, design references and creator showcase opportunities.",
        accent: "red"
    },

    {
        id: "q-bank",
        name: "Q.Bank",
        logo: qbankLogo,
        link: "https://qbank.nftraja.com/",
        subtitle: "Smart Learning & Knowledge Resource Hub",
        description:
            "Q.Bank is a structured digital learning platform that helps students, educators, and self-learners access organized educational resources, study materials, and knowledge systems for continuous learning and skill development.",
        details:
            "A knowledge-focused platform covering study resources, exam preparation, academic knowledge, research and reference materials, digital learning tools, skill development, smart revision and educational productivity.",
        accent: "green"
    },

    {
        id: "akhandverse",
        name: "Akhandverse",
        logo: akhandverseLogo,
        link: "https://akhandverse.nftraja.com/",
        subtitle: "Sanatan Dharma Digital World",
        description:
            "Akhandverse is a spiritual and cultural knowledge platform dedicated to Sanatan Dharma, Indian heritage, Vedic wisdom, and traditional philosophies through accessible digital learning experiences.",
        details:
            "A cultural and spiritual destination covering spiritual knowledge, Vedic teachings and scriptures, meditation and mindfulness, Indian culture and heritage, traditional philosophy, festival and Dharma resources, cultural preservation and spiritual growth.",
        accent: "gold"
    },

    {
        id: "cartoonverse",
        name: "Cartoonverse",
        logo: cartoonverseLogo,
        link: "https://cartoonverse.nftraja.com/",
        subtitle: "Creative Cartoon & Animation World",
        description:
            "Cartoonverse is a creative ecosystem focused on animation, character design, digital illustration, and visual storytelling for artists, creators, educators, and entertainment enthusiasts.",
        details:
            "A creative world built around character design inspiration, animation art resources, digital illustration, visual storytelling, creative design references, cartoon artwork, entertainment learning and creator growth.",
        accent: "yellow"
    },

    {
        id: "kidsverse",
        name: "Kidsverse",
        logo: kidsverseLogo,
        link: "https://kidverse.nftraja.com/",
        subtitle: "Smart Learning Zone For Kids",
        description:
            "Kidsverse is a child-friendly educational platform designed to encourage learning, creativity, curiosity, and early skill development through safe and engaging digital experiences.",
        details:
            "A dedicated kids-focused destination featuring educational learning resources, creative activities, storytelling and reading content, interactive learning, parent and teacher support tools, early skill development and fun educational experiences.",
        accent: "cyan"
    },

    {
        id: "animeverse",
        name: "Animeverse",
        logo: animeverseLogo,
        link: "https://animeverse.nftraja.com/",
        subtitle: "Anime Culture & Creative Community",
        description:
            "Animeverse is a creative hub for anime culture, character design, visual storytelling, and digital art inspiration. It helps fans, artists, and creators explore animation trends, artistic styles, and engaging creative communities.",
        details:
            "A dedicated anime destination covering anime art and character design, visual storytelling, animation culture, creative design references, fan community engagement, digital art, manga and anime creativity and creator inspiration.",
        accent: "pink"
    },

    {
        id: "photoverse",
        name: "Photoverse",
        logo: photoverseLogo,
        link: "https://photoverse.nftraja.com/",
        subtitle: "Photography & Visual Content Hub",
        description:
            "Photoverse is a photography and visual storytelling platform designed for photographers, designers, and content creators seeking creative inspiration and technical skill development.",
        details:
            "A visual-focused destination covering photography learning, visual storytelling techniques, editing and composition, portfolio development, creative photography inspiration, digital branding visuals, camera and editing knowledge and professional visual identity building.",
        accent: "indigo"
    },

    {
        id: "iqvibe",
        name: "iQVibe",
        logo: iqvibeLogo,
        link: "https://iqvibe.nftraja.com/",
        subtitle: "Smart Knowledge & Productivity Platform",
        description:
            "iQVibe is a productivity and self-improvement platform focused on smarter learning, personal growth, and performance optimization for students, professionals, and creators.",
        details:
            "A productivity-focused platform covering productivity improvement, learning efficiency, focus and time management, habit building, personal growth systems, skill development, mental performance optimization and smart workflows.",
        accent: "violet"
    },

    {
        id: "inditone",
        name: "IndiTone",
        logo: inditoneLogo,
        link: "https://inditone.nftraja.com/",
        subtitle: "Indian Music & Audio Culture Hub",
        description:
            "IndiTone is a digital platform dedicated to music culture, audio creativity, and sound-focused learning, connecting musicians, creators, and audio enthusiasts through educational and creative resources.",
        details:
            "A music and audio destination covering music learning, audio production inspiration, sound design knowledge, independent creator support, regional music discovery, digital audio innovation, creative music workflows and artist growth.",
        accent: "saffron"
    },

    {
        id: "viewlyst",
        name: "Viewlyst",
        logo: viewlystLogo,
        link: "https://viewlyst.nftraja.com/",
        subtitle: "Video Discovery & Streaming Platform",
        description:
            "Viewlyst is a video-focused platform designed for media discovery, visual learning, and entertainment, helping users explore quality video resources and storytelling techniques.",
        details:
            "A video and media destination covering video content discovery, visual learning resources, storytelling techniques, media production insights, video editing knowledge, creator growth, entertainment and education content and digital media exploration.",
        accent: "teal"
    },

    {
        id: "ladyglamour",
        name: "Ladyglamour",
        logo: ladyglamourLogo,
        link: "https://ladyglamour.nftraja.com/",
        subtitle: "Women Lifestyle Platform",
        description:
            "Ladyglamour is a lifestyle and personal growth platform focused on beauty, fashion, wellness, entrepreneurship, and confidence-building resources for modern women.",
        details:
            "A women-focused lifestyle destination covering beauty and skincare, fashion and lifestyle inspiration, wellness and self-care, personal growth, career and entrepreneurship, digital branding, confidence building and women's empowerment.",
        accent: "rose"
    },

    {
        id: "pickaura",
        name: "PickAura",
        logo: pickauraLogo,
        link: "https://pickaura.nftraja.com/",
        subtitle: "Smart Product Discovery Platform",
        description:
            "PickAura is a smart product discovery platform that helps users explore useful tools, digital services, and online products through organized research and comparison resources.",
        details:
            "A discovery and research destination covering product discovery, tool and service comparisons, feature analysis, smart buying insights, digital product research, online service exploration, value-based recommendations and informed purchase decisions.",
        accent: "coral"
    }

];


/*
==================================================
  PROJECT CARD
==================================================
*/

function ProjectCard({ project, index }) {

    return (

        <article
            className={`project-showcase-card project-accent-${project.accent}`}
        >

            <div className="project-showcase-inner">


                {/* =================================================
                    PROJECT LOGO
                ================================================= */}

                <div
                    className="project-showcase-logo"
                    aria-label={`${project.name} logo`}
                >

                    <img
                        src={project.logo}
                        alt={`${project.name} logo`}
                    />

                </div>


                {/* =================================================
                    PROJECT INFORMATION
                ================================================= */}

                <div className="project-showcase-content">

                    <div className="project-showcase-number">
                        {String(index + 1).padStart(2, "0")}
                    </div>


                    <span className="project-showcase-kicker">
                        PROJECT
                    </span>


                    <h2 className="project-showcase-title">
                        {project.name}
                    </h2>


                    <h3 className="project-showcase-subtitle">
                        {project.subtitle}
                    </h3>


                    <p className="project-showcase-description">
                        {project.description}
                    </p>


                    <p className="project-showcase-details">
                        {project.details}
                    </p>


                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-showcase-btn"
                    >

                        <span>
                            Explore Project
                        </span>

                        <FiArrowRight
                            aria-hidden="true"
                        />

                    </a>

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

function Projects() {

    return (

        <div className="projects-page">


            {/* =================================================
                EXISTING GOODONECREATION HEADER
            ================================================= */}

            <Header />

            <InnerPageLogo />


            {/* =================================================
                MAIN
            ================================================= */}

            <main className="projects-main">


                {/* =================================================
                    HERO
                ================================================= */}

                <section className="projects-hero">

                    <div className="projects-hero-content">

                        <span className="projects-kicker">
                            GOODONECREATION PROJECTS
                        </span>

                        <h1 className="projects-title">
                            Ideas Built Into
                            <span> Digital Experiences.</span>
                        </h1>

                        <p className="projects-subtitle">
                            Explore the projects, platforms and
                            digital worlds being developed across
                            the GoodOneCreation ecosystem.
                        </p>

                    </div>

                </section>


                {/* =================================================
                    PROJECT DIRECTORY INTRO
                ================================================= */}

                <section className="projects-intro">

                    <span className="projects-kicker">
                        OUR PROJECT ECOSYSTEM
                    </span>

                    <h2>
                        Built For Different Digital Experiences
                    </h2>

                    <p>
                        From gaming and utility tools to creative
                        worlds, digital platforms and lifestyle
                        destinations, each project has its own
                        identity and purpose within the wider
                        GoodOneCreation ecosystem.
                    </p>

                </section>


                {/* =================================================
                    PROJECT LIST
                ================================================= */}

                <section className="projects-showcase">

                    <div className="projects-showcase-list">

                        {projects.map((project, index) => (

                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />

                        ))}

                    </div>

                </section>


                {/* =================================================
                    FINAL ECOSYSTEM CTA
                ================================================= */}

                <section className="projects-final-cta">

                    <div className="projects-final-card">

                        <div className="projects-final-icon">
                            <FiLayers aria-hidden="true" />
                        </div>

                        <div className="projects-final-content">

                            <span className="projects-kicker">
                                EXPLORE MORE
                            </span>

                            <h2>
                                Continue Exploring The Ecosystem
                            </h2>

                            <p>
                                Discover more digital experiences, apps and
                                destinations created across the GoodOneCreation
                                ecosystem.
                            </p>

                            <div className="projects-final-actions">

                                {/* APPS PAGE */}

                                <a
                                    href="/apps"
                                    className="projects-final-primary"
                                >

                                    <FiSmartphone
                                        aria-hidden="true"
                                    />

                                    <span>
                                        Explore Our Apps
                                    </span>

                                    <FiArrowRight
                                        aria-hidden="true"
                                    />

                                </a>


                                {/* HOME PAGE */}

                                <a
                                    href="/"
                                    className="projects-final-secondary"
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


export default Projects;