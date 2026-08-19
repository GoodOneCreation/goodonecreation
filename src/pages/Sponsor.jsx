import React from "react";
import emailjs from "@emailjs/browser";
import {
    Header,
    InnerPageLogo,
    Footer
} from "./Home.jsx";


function Sponsor() {

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
            partnershipType: "Sponsorship Inquiry",
            website: form.website.value,

            about: form.about.value,

            opportunity: form.sponsorshipInterest.value,

            lookingFor: form.lookingFor.value,

            additional: form.additional.value,

            // Existing Partner EmailJS template variable
            title: "Sponsorship Inquiry"
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
                "Your sponsorship inquiry has been sent successfully."
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

        <div className="sponsor-page">

            <Header />

            <InnerPageLogo />


            <main className="sponsor-page-main">

                <div className="sponsor-page-container">


                    {/* =================================================
                        01. HERO
                    ================================================= */}

                    <section className="sponsor-hero">

                        <div className="sponsor-hero-content">

                            <span className="sponsor-kicker">
                                BECOME A SPONSOR
                            </span>

                            <h1 className="sponsor-title">
                                Support Ideas That Create Impact
                            </h1>

                            <p className="sponsor-subtitle">
                                Partner with GoodOneCreation as a sponsor
                                and support meaningful digital, creative
                                and technology-driven initiatives.
                            </p>


                            <div className="sponsor-hero-actions">

                                <a
                                    href="#sponsor-form"
                                    className="sponsor-primary-btn"
                                >
                                    Become a Sponsor →
                                </a>

                                <a
                                    href="/official-sponsors"
                                    className="sponsor-secondary-btn"
                                >
                                    Official Sponsors
                                </a>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
                        02. WHY SPONSOR
                    ================================================= */}

                    <section className="sponsor-section">

                        <div className="sponsor-section-heading">

                            <span className="sponsor-kicker">
                                WHY SPONSOR
                            </span>

                            <h2>
                                Support More Than a Project
                            </h2>

                            <p>
                                Sponsorship can help turn creative ideas,
                                digital projects and technology initiatives
                                into opportunities that reach real people.
                            </p>

                        </div>


                        <div className="sponsor-benefit-grid">


                            <article className="sponsor-benefit-card">

                                <span className="sponsor-benefit-number">
                                    01
                                </span>

                                <h3>
                                    Support Innovation
                                </h3>

                                <p>
                                    Help meaningful digital and creative
                                    ideas move from concept toward reality.
                                </p>

                            </article>


                            <article className="sponsor-benefit-card">

                                <span className="sponsor-benefit-number">
                                    02
                                </span>

                                <h3>
                                    Build Visibility
                                </h3>

                                <p>
                                    Associate your brand with projects,
                                    initiatives and experiences created
                                    through GoodOneCreation.
                                </p>

                            </article>


                            <article className="sponsor-benefit-card">

                                <span className="sponsor-benefit-number">
                                    03
                                </span>

                                <h3>
                                    Reach Communities
                                </h3>

                                <p>
                                    Support initiatives that can connect
                                    with audiences, creators and digital
                                    communities.
                                </p>

                            </article>


                            <article className="sponsor-benefit-card">

                                <span className="sponsor-benefit-number">
                                    04
                                </span>

                                <h3>
                                    Create Together
                                </h3>

                                <p>
                                    Explore sponsorship opportunities that
                                    can create value for both your brand
                                    and the initiative being supported.
                                </p>

                            </article>


                        </div>

                    </section>


                    {/* =================================================
                        03. WHAT CAN BE SPONSORED
                    ================================================= */}

                    <section className="sponsor-section sponsor-focus-section">

                        <div className="sponsor-section-heading">

                            <span className="sponsor-kicker">
                                SPONSORSHIP OPPORTUNITIES
                            </span>

                            <h2>
                                What You Can Support
                            </h2>

                            <p>
                                Sponsorship opportunities can vary depending
                                on the project, initiative and goals involved.
                            </p>

                        </div>


                        <div className="sponsor-focus-grid">


                            <article className="sponsor-focus-card">

                                <span>
                                    DIGITAL
                                </span>

                                <h3>
                                    Digital Projects
                                </h3>

                                <p>
                                    Support websites, platforms, digital
                                    experiences and other technology-driven
                                    projects.
                                </p>

                            </article>


                            <article className="sponsor-focus-card">

                                <span>
                                    CREATIVE
                                </span>

                                <h3>
                                    Creative Initiatives
                                </h3>

                                <p>
                                    Support creative work involving design,
                                    digital art, content and visual experiences.
                                </p>

                            </article>


                            <article className="sponsor-focus-card">

                                <span>
                                    COMMUNITY
                                </span>

                                <h3>
                                    Community Initiatives
                                </h3>

                                <p>
                                    Support initiatives, campaigns and
                                    community-focused digital activities.
                                </p>

                            </article>


                            <article className="sponsor-focus-card">

                                <span>
                                    TECHNOLOGY
                                </span>

                                <h3>
                                    Technology Initiatives
                                </h3>

                                <p>
                                    Support experimentation, development
                                    and technology-focused ideas.
                                </p>

                            </article>


                        </div>

                    </section>


                    {/* =================================================
                        04. SPONSOR RECOGNITION
                    ================================================= */}

                    <section className="sponsor-recognition">

                        <div className="sponsor-recognition-content">

                            <span className="sponsor-kicker">
                                SPONSOR RECOGNITION
                            </span>

                            <h2>
                                Meet the Brands Supporting GoodOneCreation
                            </h2>

                            <p>
                                Explore the brands and organizations that
                                officially support GoodOneCreation and
                                its initiatives.
                            </p>

                            <a
                                href="/official-sponsors"
                                className="sponsor-recognition-btn"
                            >
                                View Official Sponsors →
                            </a>

                        </div>

                    </section>


                    {/* =================================================
                        05. HOW IT WORKS
                    ================================================= */}

                    <section className="sponsor-section">

                        <div className="sponsor-section-heading">

                            <span className="sponsor-kicker">
                                SIMPLE PROCESS
                            </span>

                            <h2>
                                How Sponsorship Works
                            </h2>

                            <p>
                                Start with a conversation. We can understand
                                your goals and explore whether there is a
                                suitable sponsorship opportunity.
                            </p>

                        </div>


                        <div className="sponsor-process-grid">


                            <article className="sponsor-process-card">

                                <span>
                                    01
                                </span>

                                <h3>
                                    Tell Us
                                </h3>

                                <p>
                                    Share some information about yourself,
                                    your organization and what you would
                                    like to support.
                                </p>

                            </article>


                            <article className="sponsor-process-card">

                                <span>
                                    02
                                </span>

                                <h3>
                                    We Review
                                </h3>

                                <p>
                                    We review your inquiry and understand
                                    the goals behind your sponsorship.
                                </p>

                            </article>


                            <article className="sponsor-process-card">

                                <span>
                                    03
                                </span>

                                <h3>
                                    Discuss
                                </h3>

                                <p>
                                    We connect to discuss the opportunity,
                                    expectations and possible fit.
                                </p>

                            </article>


                            <article className="sponsor-process-card">

                                <span>
                                    04
                                </span>

                                <h3>
                                    Move Forward
                                </h3>

                                <p>
                                    If there is a suitable opportunity,
                                    we define the next steps together.
                                </p>

                            </article>


                        </div>

                    </section>


                    {/* =================================================
                        06. CTA
                    ================================================= */}

                    <section className="sponsor-cta">

                        <span className="sponsor-kicker">
                            SUPPORT THE JOURNEY
                        </span>

                        <h2>
                            Want to Support What We're Building?
                        </h2>

                        <p>
                            Tell us about your organization and the kind
                            of initiative you would like to support.
                        </p>

                        <a
                            href="#sponsor-form"
                            className="sponsor-primary-btn"
                        >
                            Start a Sponsorship Conversation →
                        </a>

                    </section>


                    {/* =================================================
                        07. SPONSOR FORM
                    ================================================= */}

                    <section
                        id="sponsor-form"
                        className="sponsor-section sponsor-form-section"
                    >

                        <div className="sponsor-section-heading">

                            <span className="sponsor-kicker">
                                BECOME A SPONSOR
                            </span>

                            <h2>
                                Start a Sponsorship Conversation
                            </h2>

                            <p>
                                Share a few details about yourself,
                                your organization and what you would
                                like to support.
                            </p>

                        </div>


                        <form
                            className="sponsor-form"
                            onSubmit={handleSubmit}
                        >


                            <div className="sponsor-form-grid">


                                <div className="sponsor-form-field">

                                    <label htmlFor="sponsor-name">
                                        Full Name
                                    </label>

                                    <input
                                        id="sponsor-name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                    />

                                </div>


                                <div className="sponsor-form-field">

                                    <label htmlFor="sponsor-email">
                                        Email Address
                                    </label>

                                    <input
                                        id="sponsor-email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                    />

                                </div>


                                <div className="sponsor-form-field">

                                    <label htmlFor="sponsor-organization">
                                        Organization / Brand
                                    </label>

                                    <input
                                        id="sponsor-organization"
                                        name="organization"
                                        type="text"
                                        placeholder="Your organization or brand"
                                        required
                                    />

                                </div>


                                <div className="sponsor-form-field">

                                    <label htmlFor="sponsor-website">
                                        Website / Social Link
                                    </label>

                                    <input
                                        id="sponsor-website"
                                        name="website"
                                        type="url"
                                        placeholder="https://"
                                    />

                                </div>


                            </div>


                            <div className="sponsor-form-field">

                                <label htmlFor="sponsor-about">
                                    Tell Us About You
                                </label>

                                <textarea
                                    id="sponsor-about"
                                    name="about"
                                    rows="4"
                                    placeholder="Tell us about yourself, your organization or your brand..."
                                    required
                                ></textarea>

                            </div>


                            <div className="sponsor-form-field">

                                <label htmlFor="sponsor-interest">
                                    What Would You Like to Support?
                                </label>

                                <textarea
                                    id="sponsor-interest"
                                    name="sponsorshipInterest"
                                    rows="4"
                                    placeholder="Tell us about the project, initiative or area you are interested in supporting..."
                                    required
                                ></textarea>

                            </div>


                            <div className="sponsor-form-field">

                                <label htmlFor="sponsor-looking">
                                    What Are You Looking For?
                                </label>

                                <input
                                    id="sponsor-looking"
                                    name="lookingFor"
                                    type="text"
                                    placeholder="Tell us what you would like to achieve through the sponsorship..."
                                />

                            </div>


                            <div className="sponsor-form-field">

                                <label htmlFor="sponsor-additional">
                                    Additional Information
                                </label>

                                <textarea
                                    id="sponsor-additional"
                                    name="additional"
                                    rows="4"
                                    placeholder="Anything else you'd like us to know?"
                                ></textarea>

                            </div>


                            {submitMessage && (

                                <div
                                    className={`sponsor-submit-message ${
                                        submitSuccess
                                            ? "success"
                                            : "error"
                                    }`}
                                >
                                    {submitMessage}
                                </div>

                            )}


                            <div className="sponsor-form-action">

                                <button
                                    type="submit"
                                    className="sponsor-submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Submit Sponsorship Inquiry →"
                                    }
                                </button>

                            </div>


                        </form>

                    </section>


                    {/* =================================================
                        08. OTHER OPPORTUNITIES
                    ================================================= */}

                    <section className="sponsor-section">

                        <div className="sponsor-section-heading">

                            <span className="sponsor-kicker">
                                EXPLORE OTHER OPPORTUNITIES
                            </span>

                            <h2>
                                Looking for Another Way to Connect?
                            </h2>

                            <p>
                                Explore other ways to work with
                                GoodOneCreation.
                            </p>

                        </div>


                        <div className="sponsor-other-grid">


                            <a
                                href="/collaborate"
                                className="sponsor-other-card"
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
                                className="sponsor-other-card"
                            >

                                <span>
                                    PARTNERSHIP
                                </span>

                                <strong>
                                    Become a Partner →
                                </strong>

                            </a>


                            <a
                                href="/grant"
                                className="sponsor-other-card"
                            >

                                <span>
                                    FUNDING
                                </span>

                                <strong>
                                    Grant Opportunities →
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


export default Sponsor;