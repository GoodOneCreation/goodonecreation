import React from "react";
import emailjs from "@emailjs/browser";
import {
    Header,
    InnerPageLogo,
    Footer
} from "./Home.jsx";


function Grant() {

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitMessage, setSubmitMessage] = React.useState("");
    const [submitSuccess, setSubmitSuccess] = React.useState(false);


    const handleSubmit = async (e) => {

        e.preventDefault();

        setIsSubmitting(true);
        setSubmitMessage("");
        setSubmitSuccess(false);

        const form = e.currentTarget;

        const formData = {

            name: form.name.value,
            email: form.email.value,
            organization: form.organization.value,
            website: form.website.value,

            about: form.about.value,

            opportunity: form.opportunity.value,

            lookingFor: form.lookingFor.value,

            additional: form.additional.value,

            // Existing EmailJS template variables
            title: "Grant / Funding Opportunity",

            partnershipType: "Grant / Funding Inquiry"

        };


        try {

            await emailjs.send(

                "service_0su3tkm",

                "template_do87ha8",

                formData,

                {
                    publicKey: "wGJTXozm1sja9LEVv"
                }

            );


            setSubmitSuccess(true);

            setSubmitMessage(
                "Your funding inquiry has been sent successfully."
            );

            form.reset();


        } catch (error) {

            console.error("EmailJS Error:", error);

            setSubmitSuccess(false);

            setSubmitMessage(
                "Something went wrong. Please try again."
            );


        } finally {

            setIsSubmitting(false);

        }

    };


    return (

        <div className="grant-page">


            <Header />

            <InnerPageLogo />


            <main className="grant-page-main">

                <div className="grant-page-container">


                    {/* =================================================
                        01. HERO
                    ================================================= */}

                    <section className="grant-hero">

                        <span className="grant-kicker">
                            SEEKING FUNDING & GRANT SUPPORT
                        </span>

                        <h1 className="grant-title">
                            Help Us Build What Comes Next
                        </h1>

                        <p className="grant-subtitle">
                            GoodOneCreation is developing digital,
                            creative and technology-driven projects.
                            We are looking for relevant grants,
                            funding programs and organizations that
                            can support the work we are building.
                        </p>


                        <div className="grant-hero-actions">

                            <a
                                href="#grant-form"
                                className="grant-primary-btn"
                            >
                                Share a Funding Opportunity →
                            </a>

                            <a
                                href="#support-us"
                                className="grant-secondary-btn"
                            >
                                Interested in Supporting Our Work?
                            </a>

                        </div>

                    </section>


                    {/* =================================================
                        02. ABOUT OUR WORK
                    ================================================= */}

                    <section className="grant-section">

                        <div className="grant-section-heading">

                            <span className="grant-kicker">
                                OUR WORK
                            </span>

                            <h2>
                                What We Are Building
                            </h2>

                            <p>
                                GoodOneCreation brings together
                                technology, creativity and digital
                                thinking to develop useful and
                                meaningful projects.
                            </p>

                        </div>


                        <div className="grant-work-grid">


                            <article className="grant-work-card">

                                <span>
                                    01
                                </span>

                                <h3>
                                    Digital Projects
                                </h3>

                                <p>
                                    Websites, platforms, digital
                                    experiences and tools designed
                                    to solve real problems.
                                </p>

                            </article>


                            <article className="grant-work-card">

                                <span>
                                    02
                                </span>

                                <h3>
                                    Technology
                                </h3>

                                <p>
                                    Technology-driven ideas,
                                    development and experiments
                                    that can grow into useful products.
                                </p>

                            </article>


                            <article className="grant-work-card">

                                <span>
                                    03
                                </span>

                                <h3>
                                    Creative Work
                                </h3>

                                <p>
                                    Digital art, design, content
                                    and creative experiences built
                                    for modern audiences.
                                </p>

                            </article>


                            <article className="grant-work-card">

                                <span>
                                    04
                                </span>

                                <h3>
                                    New Ideas
                                </h3>

                                <p>
                                    Early-stage concepts and
                                    experiments that have potential
                                    to become larger projects.
                                </p>

                            </article>


                        </div>

                    </section>


                    {/* =================================================
                        03. WHY FUNDING
                    ================================================= */}

                    <section className="grant-section grant-dark-section">

                        <div className="grant-section-heading">

                            <span className="grant-kicker">
                                WHY WE ARE SEEKING FUNDING
                            </span>

                            <h2>
                                Funding Helps Ideas Move Forward
                            </h2>

                            <p>
                                External funding can give promising
                                projects the resources needed to move
                                from development and experimentation
                                toward real-world execution.
                            </p>

                        </div>


                        <div className="grant-reason-grid">


                            <article className="grant-reason-card">

                                <strong>
                                    Development
                                </strong>

                                <p>
                                    Build, test and improve digital
                                    products and project ideas.
                                </p>

                            </article>


                            <article className="grant-reason-card">

                                <strong>
                                    Resources
                                </strong>

                                <p>
                                    Access technology, tools,
                                    infrastructure and resources
                                    required for development.
                                </p>

                            </article>


                            <article className="grant-reason-card">

                                <strong>
                                    Expansion
                                </strong>

                                <p>
                                    Take successful concepts further
                                    and expand their reach.
                                </p>

                            </article>


                            <article className="grant-reason-card">

                                <strong>
                                    Experimentation
                                </strong>

                                <p>
                                    Explore new technologies,
                                    creative approaches and ideas
                                    that require room to experiment.
                                </p>

                            </article>


                        </div>

                    </section>


                    {/* =================================================
                        04. WHAT FUNDING CAN HELP ACHIEVE
                    ================================================= */}

                    <section className="grant-section">

                        <div className="grant-section-heading">

                            <span className="grant-kicker">
                                POTENTIAL IMPACT
                            </span>

                            <h2>
                                What Support Can Help Us Achieve
                            </h2>

                            <p>
                                The right funding can help turn
                                promising ideas into working,
                                accessible and scalable projects.
                            </p>

                        </div>


                        <div className="grant-impact-grid">


                            <div className="grant-impact-item">

                                <span>
                                    DEVELOP
                                </span>

                                <h3>
                                    Turn Ideas Into Projects
                                </h3>

                                <p>
                                    Move concepts from planning
                                    and prototypes toward functional
                                    digital experiences.
                                </p>

                            </div>


                            <div className="grant-impact-item">

                                <span>
                                    IMPROVE
                                </span>

                                <h3>
                                    Strengthen Existing Work
                                </h3>

                                <p>
                                    Improve technology, usability,
                                    design and overall project quality.
                                </p>

                            </div>


                            <div className="grant-impact-item">

                                <span>
                                    EXPAND
                                </span>

                                <h3>
                                    Reach More People
                                </h3>

                                <p>
                                    Help useful projects reach wider
                                    audiences and communities.
                                </p>

                            </div>


                        </div>

                    </section>


                    {/* =================================================
                        05. FUNDING WE ARE SEEKING
                    ================================================= */}

                    <section className="grant-section">

                        <div className="grant-section-heading">

                            <span className="grant-kicker">
                                FUNDING WE ARE SEEKING
                            </span>

                            <h2>
                                What Kind of Support Are We Looking For?
                            </h2>

                            <p>
                                We are interested in relevant programs
                                and organizations whose goals align with
                                the type of work GoodOneCreation is
                                developing.
                            </p>

                        </div>


                        <div className="grant-funding-grid">


                            <div className="grant-funding-card">

                                <span>
                                    TECHNOLOGY
                                </span>

                                <strong>
                                    Technology Grants
                                </strong>

                            </div>


                            <div className="grant-funding-card">

                                <span>
                                    DIGITAL
                                </span>

                                <strong>
                                    Digital Innovation Funding
                                </strong>

                            </div>


                            <div className="grant-funding-card">

                                <span>
                                    CREATIVE
                                </span>

                                <strong>
                                    Creative & Digital Arts Grants
                                </strong>

                            </div>


                            <div className="grant-funding-card">

                                <span>
                                    PROJECT
                                </span>

                                <strong>
                                    Project Development Funding
                                </strong>

                            </div>


                            <div className="grant-funding-card">

                                <span>
                                    COMMUNITY
                                </span>

                                <strong>
                                    Community & Impact Programs
                                </strong>

                            </div>


                            <div className="grant-funding-card">

                                <span>
                                    INNOVATION
                                </span>

                                <strong>
                                    Open Innovation Programs
                                </strong>

                            </div>


                        </div>

                    </section>


                    {/* =================================================
                        06. WHY SUPPORT US
                    ================================================= */}

                    <section
                        id="support-us"
                        className="grant-support-section"
                    >

                        <div className="grant-support-content">

                            <span className="grant-kicker">
                                WHY SUPPORT GOODONECREATION
                            </span>

                            <h2>
                                Support the Work We Are Building
                            </h2>

                            <p>
                                We are actively developing our projects
                                and looking for opportunities that can
                                help us build, improve and expand them.
                                If your organization supports technology,
                                creativity, digital innovation or
                                community-focused ideas, there may be
                                an opportunity to work together.
                            </p>

                            <a
                                href="#grant-form"
                                className="grant-primary-btn"
                            >
                                Talk to Us About Funding →
                            </a>

                        </div>

                    </section>


                    {/* =================================================
                        07. HOW THE PROCESS WORKS
                    ================================================= */}

                    <section className="grant-section">

                        <div className="grant-section-heading">

                            <span className="grant-kicker">
                                THE PROCESS
                            </span>

                            <h2>
                                How a Funding Opportunity Can Reach Us
                            </h2>

                            <p>
                                If you know of a suitable grant or
                                funding program, you can share it with
                                us directly through this website.
                            </p>

                        </div>


                        <div className="grant-process-grid">


                            <article className="grant-process-card">

                                <span>
                                    01
                                </span>

                                <h3>
                                    Share
                                </h3>

                                <p>
                                    Tell us about the grant, funding
                                    program or organization.
                                </p>

                            </article>


                            <article className="grant-process-card">

                                <span>
                                    02
                                </span>

                                <h3>
                                    Review
                                </h3>

                                <p>
                                    We review the opportunity and
                                    check whether it aligns with
                                    our work and requirements.
                                </p>

                            </article>


                            <article className="grant-process-card">

                                <span>
                                    03
                                </span>

                                <h3>
                                    Connect
                                </h3>

                                <p>
                                    If relevant, we connect with
                                    the funding organization or
                                    program.
                                </p>

                            </article>


                            <article className="grant-process-card">

                                <span>
                                    04
                                </span>

                                <h3>
                                    Apply
                                </h3>

                                <p>
                                    Where appropriate, we follow
                                    the funding organization's
                                    application or proposal process.
                                </p>

                            </article>


                        </div>

                    </section>


                    {/* =================================================
                        08. FUNDING FORM
                    ================================================= */}

                    <section
                        id="grant-form"
                        className="grant-section grant-form-section"
                    >

                        <div className="grant-section-heading">

                            <span className="grant-kicker">
                                FUNDING & GRANT INQUIRY
                            </span>

                            <h2>
                                Interested in Supporting Our Work?
                            </h2>

                            <p>
                                If you represent a funding organization,
                                grant program, foundation or company
                                interested in supporting our work,
                                tell us a little about the opportunity
                                and how we can connect.
                            </p>

                        </div>


                        <form
                            className="grant-form"
                            onSubmit={handleSubmit}
                        >


                            <div className="grant-form-grid">


                                <div className="grant-form-field">

                                    <label htmlFor="grant-name">
                                        Full Name
                                    </label>

                                    <input
                                        id="grant-name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                    />

                                </div>


                                <div className="grant-form-field">

                                    <label htmlFor="grant-email">
                                        Email Address
                                    </label>

                                    <input
                                        id="grant-email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                    />

                                </div>


                                <div className="grant-form-field">

                                    <label htmlFor="grant-organization">
                                        Organization / Funding Organization
                                    </label>

                                    <input
                                        id="grant-organization"
                                        name="organization"
                                        type="text"
                                        placeholder="Organization name"
                                    />

                                </div>


                                <div className="grant-form-field">

                                    <label htmlFor="grant-website">
                                        Website
                                    </label>

                                    <input
                                        id="grant-website"
                                        name="website"
                                        type="url"
                                        placeholder="https://"
                                    />

                                </div>


                            </div>


                            <div className="grant-form-field">

                                <label htmlFor="grant-opportunity">
                                    Funding / Grant Opportunity
                                </label>

                                <input
                                    id="grant-opportunity"
                                    name="opportunity"
                                    type="text"
                                    placeholder="Grant, funding program or support opportunity"
                                />

                            </div>


                            <div className="grant-form-field">

                                <label htmlFor="grant-looking">
                                    Funding Details / Link
                                </label>

                                <textarea
                                    id="grant-looking"
                                    name="lookingFor"
                                    rows="4"
                                    placeholder="Share the opportunity link or tell us where we can find more information..."
                                ></textarea>

                            </div>


                            <div className="grant-form-field">

                                <label htmlFor="grant-about">
                                    Why Do You Think It Fits GoodOneCreation?
                                </label>

                                <textarea
                                    id="grant-about"
                                    name="about"
                                    rows="4"
                                    placeholder="Tell us why you think this funding opportunity could be relevant to our work..."
                                ></textarea>

                            </div>


                            <div className="grant-form-field">

                                <label htmlFor="grant-additional">
                                    Additional Information
                                </label>

                                <textarea
                                    id="grant-additional"
                                    name="additional"
                                    rows="4"
                                    placeholder="Anything else you'd like us to know?"
                                ></textarea>

                            </div>


                            {submitMessage && (

                                <div
                                    className={`grant-submit-message ${
                                        submitSuccess
                                            ? "success"
                                            : "error"
                                    }`}
                                >
                                    {submitMessage}
                                </div>

                            )}


                            <div className="grant-form-action">

                                <button
                                    type="submit"
                                    className="grant-submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Funding Inquiry →"
                                    }
                                </button>

                            </div>


                        </form>

                    </section>


                    {/* =================================================
                        09. OTHER OPPORTUNITIES
                    ================================================= */}

                    <section className="grant-section">

                        <div className="grant-section-heading">

                            <span className="grant-kicker">
                                OTHER WAYS TO CONNECT
                            </span>

                            <h2>
                                Explore Other Opportunities
                            </h2>

                            <p>
                                Funding is one way to connect with
                                GoodOneCreation. Explore our other
                                opportunities as well.
                            </p>

                        </div>


                        <div className="grant-other-grid">


                            <a
                                href="/collaborate"
                                className="grant-other-card"
                            >

                                <span>
                                    COLLABORATION
                                </span>

                                <strong>
                                    Collaborate With Us →
                                </strong>

                            </a>


                            <a
                                href="/partner"
                                className="grant-other-card"
                            >

                                <span>
                                    PARTNERSHIP
                                </span>

                                <strong>
                                    Become a Partner →
                                </strong>

                            </a>


                            <a
                                href="/sponsor"
                                className="grant-other-card"
                            >

                                <span>
                                    SUPPORT
                                </span>

                                <strong>
                                    Become a Sponsor →
                                </strong>

                            </a>


                        </div>

                    </section>


                </div>

            </main>


            <Footer />

        </div>

    );
}


export default Grant;