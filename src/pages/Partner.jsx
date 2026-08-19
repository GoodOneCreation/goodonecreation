import React from "react";
import emailjs from "@emailjs/browser";
import {
    Header,
    InnerPageLogo,
    Footer
} from "./Home.jsx";


function Partner() {

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitMessage, setSubmitMessage] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("PARTNER SUBMIT BUTTON CLICKED");

        setIsSubmitting(true);
        setSubmitMessage("");

        const form = e.currentTarget;

        const formData = {
            name: form.name.value,
            email: form.email.value,
            organization: form.organization.value,
            partnershipType: form.partnershipType.value,
            website: form.website.value,
            about: form.about.value,
            opportunity: form.opportunity.value,
            lookingFor: form.lookingFor.value,
            additional: form.additional.value,

            // EmailJS template variables
            title: form.partnershipType.value
        };

        try {
            await emailjs.send(
                "service_0su3tkm",
                "template_do87ha8",
                formData,
                { publicKey: "wGJTXozm1sja9LEVv" }
            );

            setSubmitMessage(
                "Your partnership request has been sent successfully."
            );

            form.reset();

        } catch (error) {
            console.error("EmailJS Error:", error);

            setSubmitMessage(
                "Something went wrong. Please try again."
            );

        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <div className="partner-page">

            <Header />

            <InnerPageLogo />

            <main className="partner-page-main">

                <div className="partner-page-container">

                    {/* 01. HERO */}

                    <section className="partner-page-intro">

                        <span className="partner-page-kicker">
                            BECOME A PARTNER
                        </span>

                        <h1 className="partner-page-title">
                            Build With GoodOneCreation
                        </h1>

                        <p className="partner-page-subtitle">
                            Join us in creating meaningful digital,
                            creative and technology-driven opportunities.
                            We are open to partnerships that bring
                            complementary skills, ideas and value together.
                        </p>

                        <div className="partner-page-divider"></div>

                        <div className="partner-page-intro-actions">

                            <a
                                href="#partner-form"
                                className="partner-primary-btn"
                            >
                                Become a Partner →
                            </a>

                        </div>

                    </section>


                    {/* 02. WHY PARTNER */}

                    <section className="partner-page-section">

                        <div className="partner-section-header">

                            <span className="partner-section-kicker">
                                WHY PARTNER
                            </span>

                            <h2>
                                Create More Together
                            </h2>

                            <p>
                                The right partnership can combine
                                different strengths and create
                                opportunities that are difficult
                                to build alone.
                            </p>

                        </div>

                        <div className="partner-benefit-grid">

                            <article className="partner-benefit-card">
                                <span className="partner-benefit-icon">
                                    🤝
                                </span>

                                <strong>
                                    Shared Opportunities
                                </strong>

                                <p>
                                    Explore projects and opportunities
                                    where both sides can contribute
                                    meaningful value.
                                </p>
                            </article>


                            <article className="partner-benefit-card">
                                <span className="partner-benefit-icon">
                                    🚀
                                </span>

                                <strong>
                                    Grow Together
                                </strong>

                                <p>
                                    Combine resources, skills and
                                    ideas to create stronger outcomes.
                                </p>
                            </article>


                            <article className="partner-benefit-card">
                                <span className="partner-benefit-icon">
                                    🌐
                                </span>

                                <strong>
                                    Expand Reach
                                </strong>

                                <p>
                                    Connect with new audiences,
                                    communities and digital opportunities.
                                </p>
                            </article>


                            <article className="partner-benefit-card">
                                <span className="partner-benefit-icon">
                                    💡
                                </span>

                                <strong>
                                    Build New Ideas
                                </strong>

                                <p>
                                    Turn complementary ideas and
                                    capabilities into new possibilities.
                                </p>
                            </article>

                        </div>

                    </section>


                    {/* 03. WHO CAN PARTNER */}

                    <section className="partner-page-section">

                        <div className="partner-section-header">

                            <span className="partner-section-kicker">
                                WHO CAN PARTNER
                            </span>

                            <h2>
                                Partnerships Can Start Anywhere
                            </h2>

                            <p>
                                We are open to exploring partnerships
                                with individuals, creators, businesses,
                                organizations and teams.
                            </p>

                        </div>

                        <div className="partner-audience-grid">

                            <span>Developers</span>
                            <span>Creators</span>
                            <span>Businesses</span>
                            <span>Startups</span>
                            <span>Agencies</span>
                            <span>Technology Teams</span>
                            <span>Communities</span>
                            <span>Organizations</span>

                        </div>

                    </section>


                    {/* 04. PARTNERSHIP OPPORTUNITIES */}

                    <section className="partner-page-section">

                        <div className="partner-section-header">

                            <span className="partner-section-kicker">
                                OPPORTUNITIES
                            </span>

                            <h2>
                                Ways We Can Partner
                            </h2>

                            <p>
                                Partnerships can take different forms
                                depending on the goals, capabilities
                                and opportunities involved.
                            </p>

                        </div>

                        <div className="partner-opportunity-grid">

                            <article className="partner-opportunity-card">
                                <span>01</span>

                                <h3>
                                    Project Partnerships
                                </h3>

                                <p>
                                    Work together on specific digital,
                                    creative or technology projects.
                                </p>
                            </article>


                            <article className="partner-opportunity-card">
                                <span>02</span>

                                <h3>
                                    Technology Partnerships
                                </h3>

                                <p>
                                    Collaborate around platforms,
                                    tools, development and technology.
                                </p>
                            </article>


                            <article className="partner-opportunity-card">
                                <span>03</span>

                                <h3>
                                    Creative Partnerships
                                </h3>

                                <p>
                                    Combine creative skills across
                                    design, content, media and digital art.
                                </p>
                            </article>


                            <article className="partner-opportunity-card">
                                <span>04</span>

                                <h3>
                                    Community Partnerships
                                </h3>

                                <p>
                                    Build initiatives, campaigns,
                                    events and community-driven projects.
                                </p>
                            </article>


                            <article className="partner-opportunity-card">
                                <span>05</span>

                                <h3>
                                    Strategic Partnerships
                                </h3>

                                <p>
                                    Explore longer-term opportunities
                                    built around shared goals.
                                </p>
                            </article>


                            <article className="partner-opportunity-card">
                                <span>06</span>

                                <h3>
                                    Brand Partnerships
                                </h3>

                                <p>
                                    Explore mutually beneficial
                                    opportunities between brands and
                                    digital projects.
                                </p>
                            </article>

                        </div>

                    </section>


                    {/* 05. WHAT WE BRING */}

                    <section className="partner-page-section">

                        <div className="partner-section-header">

                            <span className="partner-section-kicker">
                                OUR SIDE
                            </span>

                            <h2>
                                What GoodOneCreation Brings
                            </h2>

                            <p>
                                We bring technology, creativity,
                                digital thinking and project execution.
                            </p>

                        </div>

                        <div className="partner-strength-grid">

                            <div className="partner-strength-card">

                                <span>
                                    TECHNOLOGY
                                </span>

                                <h3>
                                    Digital Development
                                </h3>

                                <p>
                                    Websites, digital platforms,
                                    tools and technical execution.
                                </p>

                            </div>


                            <div className="partner-strength-card">

                                <span>
                                    CREATIVE
                                </span>

                                <h3>
                                    Creative Direction
                                </h3>

                                <p>
                                    Visual concepts, digital art,
                                    design and creative experiences.
                                </p>

                            </div>


                            <div className="partner-strength-card">

                                <span>
                                    DIGITAL
                                </span>

                                <h3>
                                    Digital Presence
                                </h3>

                                <p>
                                    Digital products, online presence
                                    and audience-facing experiences.
                                </p>

                            </div>


                            <div className="partner-strength-card">

                                <span>
                                    PRODUCT
                                </span>

                                <h3>
                                    Product Thinking
                                </h3>

                                <p>
                                    Turning ideas and opportunities
                                    into useful digital experiences.
                                </p>

                            </div>

                        </div>

                    </section>


                    {/* 06. PROCESS */}

                    <section className="partner-page-section">

                        <div className="partner-section-header">

                            <span className="partner-section-kicker">
                                SIMPLE PROCESS
                            </span>

                            <h2>
                                How Partnership Works
                            </h2>

                            <p>
                                We keep the initial process simple
                                so both sides can understand the
                                opportunity before moving forward.
                            </p>

                        </div>

                        <div className="partner-process-grid">

                            <article className="partner-process-card">
                                <span>01</span>

                                <h3>
                                    Apply
                                </h3>

                                <p>
                                    Tell us about yourself, your
                                    organization and the partnership
                                    you have in mind.
                                </p>
                            </article>


                            <article className="partner-process-card">
                                <span>02</span>

                                <h3>
                                    Review
                                </h3>

                                <p>
                                    We review the information and
                                    understand the potential fit.
                                </p>
                            </article>


                            <article className="partner-process-card">
                                <span>03</span>

                                <h3>
                                    Connect
                                </h3>

                                <p>
                                    We discuss goals, expectations
                                    and possible opportunities.
                                </p>
                            </article>


                            <article className="partner-process-card">
                                <span>04</span>

                                <h3>
                                    Partner
                                </h3>

                                <p>
                                    If there is a strong fit,
                                    we define the next steps together.
                                </p>
                            </article>

                        </div>

                    </section>


                    {/* 07. CTA */}

                    <section className="partner-page-idea">

                        <span className="partner-page-kicker">
                            LET'S WORK TOGETHER
                        </span>

                        <h2>
                            Have a Partnership Idea?
                        </h2>

                        <p>
                            Tell us what you have in mind.
                            It doesn't need to be fully planned.
                            We can explore the possibilities together.
                        </p>

                        <a
                            href="#partner-form"
                            className="partner-primary-btn"
                        >
                            Start a Partnership Conversation →
                        </a>

                    </section>


                    {/* 08. PARTNER FORM */}

                    <section
                        id="partner-form"
                        className="partner-page-section partner-form-section"
                    >

                        <div className="partner-section-header">

                            <span className="partner-section-kicker">
                                BECOME A PARTNER
                            </span>

                            <h2>
                                Tell Us About Your Partnership
                            </h2>

                            <p>
                                Share some information about yourself,
                                your organization and the opportunity
                                you would like to explore.
                            </p>

                        </div>


                        <form className="partner-form" onSubmit={handleSubmit}>

                            <div className="partner-form-grid">

                                <div className="partner-form-field">

                                    <label htmlFor="partner-name">
                                        Full Name
                                    </label>

                                    <input
                                        id="partner-name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                    />

                                </div>


                                <div className="partner-form-field">

                                    <label htmlFor="partner-email">
                                        Email Address
                                    </label>

                                    <input
                                        id="partner-email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                    />

                                </div>


                                <div className="partner-form-field">

                                    <label htmlFor="partner-organization">
                                        Organization / Brand
                                    </label>

                                    <input
                                        id="partner-organization"
                                        name="organization"
                                        type="text"
                                        placeholder="Your organization or brand"
                                    />

                                </div>


                                <div className="partner-form-field">

                                    <label htmlFor="partner-type">
                                        Partnership Type
                                    </label>

                                    <select
                                        id="partner-type"
                                        name="partnershipType"
                                        defaultValue=""
                                    >

                                        <option
                                            value=""
                                            disabled
                                        >
                                            Select an option
                                        </option>

                                        <option value="project">
                                            Project Partnership
                                        </option>

                                        <option value="technology">
                                            Technology Partnership
                                        </option>

                                        <option value="creative">
                                            Creative Partnership
                                        </option>

                                        <option value="community">
                                            Community Partnership
                                        </option>

                                        <option value="strategic">
                                            Strategic Partnership
                                        </option>

                                        <option value="brand">
                                            Brand Partnership
                                        </option>

                                        <option value="other">
                                            Other
                                        </option>

                                    </select>

                                </div>

                            </div>


                            <div className="partner-form-field">

                                <label htmlFor="partner-website">
                                    Website / Social Link
                                </label>

                                <input
                                    id="partner-website"
                                    name="website"
                                    type="url"
                                    placeholder="https://"
                                />

                            </div>


                            <div className="partner-form-field">

                                <label htmlFor="partner-about">
                                    Tell Us About You
                                </label>

                                <textarea
                                    id="partner-about"
                                    name="about"
                                    rows="5"
                                    placeholder="Tell us about yourself, your organization, work or community..."
                                ></textarea>

                            </div>


                            <div className="partner-form-field">

                                <label htmlFor="partner-opportunity">
                                    Partnership Opportunity
                                </label>

                                <textarea
                                    id="partner-opportunity"
                                    name="opportunity"
                                    rows="5"
                                    placeholder="What would you like to explore together?"
                                ></textarea>

                            </div>


                            <div className="partner-form-field">

                                <label htmlFor="partner-looking">
                                    What Are You Looking For?
                                </label>

                                <input
                                    id="partner-looking"
                                    name="lookingFor"
                                    type="text"
                                    placeholder="How would you like us to contribute?"
                                />

                            </div>


                            <div className="partner-form-field">

                                <label htmlFor="partner-additional">
                                    Additional Information
                                </label>

                                <textarea
                                    id="partner-additional"
                                    name="additional"
                                    rows="4"
                                    placeholder="Anything else you'd like us to know?"
                                ></textarea>

                            </div>

                            {submitMessage && (
                          <div
                           style={{
                            marginBottom: "20px",
                            padding: "15px",
                            color: "white",
                            background: "green",
                            fontSize: "18px",
                            fontWeight: "bold",
                            textAlign: "center",
                            borderRadius: "8px"
                            }}
                            >
                           {submitMessage}
                           </div>
                           )}


                            <div className="partner-form-action">

                                <button
                                    type="submit"
                                    className="partner-primary-btn"
                                >
                                    Submit Partnership Request →
                                </button>

                            </div>

                        </form>

                    </section>


                    {/* 09. OTHER OPPORTUNITIES */}

                    <section className="partner-page-section">

                        <div className="partner-section-header">

                            <span className="partner-section-kicker">
                                EXPLORE OTHER OPPORTUNITIES
                            </span>

                            <h2>
                                Looking for Something Else?
                            </h2>

                            <p>
                                Explore other ways to connect with
                                GoodOneCreation.
                            </p>

                        </div>


                        <div className="partner-other-grid">

                            <a
                                href="/collaborate"
                                className="partner-other-card"
                            >

                                <span>
                                    COLLABORATION
                                </span>

                                <strong>
                                    Collaborate With Us →
                                </strong>

                            </a>


                            <a
                                href="/sponsor"
                                className="partner-other-card"
                            >

                                <span>
                                    SUPPORT
                                </span>

                                <strong>
                                    Become a Sponsor →
                                </strong>

                            </a>


                            <a
                                href="/grant"
                                className="partner-other-card"
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


export default Partner;