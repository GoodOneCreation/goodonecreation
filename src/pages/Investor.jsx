import React from "react";
import emailjs from "@emailjs/browser";
import {
    Header,
    InnerPageLogo,
    Footer
} from "./Home.jsx";


function Investor() {

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

            investorType: form.investorType.value,
            opportunity: form.opportunity.value,

            lookingFor: form.lookingFor.value,

            about: form.about.value,

            additional: form.additional.value,

            // Existing EmailJS template variables
            title: "Investment Inquiry",

            partnershipType: "Investor Inquiry"

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
                "Your investment inquiry has been sent successfully."
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

        <div className="investor-page">


            <Header />

            <InnerPageLogo />


            <main className="investor-page-main">

                <div className="investor-page-container">


                    {/* =================================================
                        01. HERO
                    ================================================= */}

                    <section className="investor-hero">

                        <span className="investor-kicker">
                            INVEST IN WHAT WE'RE BUILDING
                        </span>

                        <h1 className="investor-title">
                            Be Part of the Next Stage of GoodOneCreation
                        </h1>

                        <p className="investor-subtitle">
                            GoodOneCreation is developing digital,
                            creative and technology-driven projects.
                            We are open to conversations with investors
                            and strategic organizations interested in
                            exploring long-term growth opportunities.
                        </p>


                        <div className="investor-hero-actions">

                            <a
                                href="#investor-form"
                                className="investor-primary-btn"
                            >
                                Start an Investment Conversation →
                            </a>

                        </div>

                    </section>


                    {/* =================================================
                        02. WHAT WE ARE BUILDING
                    ================================================= */}

                    <section className="investor-section">

                        <div className="investor-section-heading">

                            <span className="investor-kicker">
                                OUR ECOSYSTEM
                            </span>

                            <h2>
                                What We Are Building
                            </h2>

                            <p>
                                Our work spans multiple areas of digital
                                development, allowing us to explore
                                different products, technologies and
                                creative opportunities.
                            </p>

                        </div>


                        <div className="investor-build-grid">


                            <article className="investor-build-card">

                                <span>
                                    01
                                </span>

                                <h3>
                                    Digital Products
                                </h3>

                                <p>
                                    Websites, platforms, tools and
                                    digital experiences designed to
                                    solve real problems.
                                </p>

                            </article>


                            <article className="investor-build-card">

                                <span>
                                    02
                                </span>

                                <h3>
                                    Technology & AI
                                </h3>

                                <p>
                                    Technology-driven ideas, intelligent
                                    tools and experiments that can
                                    develop into useful products.
                                </p>

                            </article>


                            <article className="investor-build-card">

                                <span>
                                    03
                                </span>

                                <h3>
                                    Apps & Platforms
                                </h3>

                                <p>
                                    Digital applications and platforms
                                    built around practical user needs
                                    and emerging opportunities.
                                </p>

                            </article>


                            <article className="investor-build-card">

                                <span>
                                    04
                                </span>

                                <h3>
                                    Creative Ventures
                                </h3>

                                <p>
                                    Creative, design and digital media
                                    projects with potential to grow
                                    into larger ventures.
                                </p>

                            </article>


                        </div>

                    </section>


                    {/* =================================================
                        03. WHY GOODONECREATION
                    ================================================= */}

                    <section className="investor-section investor-dark-section">

                        <div className="investor-section-heading">

                            <span className="investor-kicker">
                                WHY GOODONECREATION
                            </span>

                            <h2>
                                Built With a Long-Term Vision
                            </h2>

                            <p>
                                We are building an ecosystem rather
                                than a single digital product, creating
                                room for multiple ideas and opportunities
                                to develop over time.
                            </p>

                        </div>


                        <div className="investor-vision-grid">


                            <article className="investor-vision-card">

                                <strong>
                                    Multiple Opportunities
                                </strong>

                                <p>
                                    Explore different digital,
                                    technology and creative projects
                                    within one growing ecosystem.
                                </p>

                            </article>


                            <article className="investor-vision-card">

                                <strong>
                                    Technology Driven
                                </strong>

                                <p>
                                    Use modern technologies to develop
                                    useful products and scalable digital
                                    experiences.
                                </p>

                            </article>


                            <article className="investor-vision-card">

                                <strong>
                                    Product Focus
                                </strong>

                                <p>
                                    Turn ideas and experiments into
                                    practical products and experiences
                                    with real users in mind.
                                </p>

                            </article>


                            <article className="investor-vision-card">

                                <strong>
                                    Long-Term Growth
                                </strong>

                                <p>
                                    Build a foundation for sustainable
                                    projects, ventures and opportunities
                                    over time.
                                </p>

                            </article>


                        </div>

                    </section>


                    {/* =================================================
                        04. WHAT INVESTMENT CAN HELP
                    ================================================= */}

                    <section className="investor-section">

                        <div className="investor-section-heading">

                            <span className="investor-kicker">
                                USE OF CAPITAL
                            </span>

                            <h2>
                                What Investment Can Help Us Do
                            </h2>

                            <p>
                                Investment can provide the resources
                                needed to move promising ideas from
                                development into stronger products,
                                projects and ventures.
                            </p>

                        </div>


                        <div className="investor-capital-grid">


                            <div className="investor-capital-card">

                                <span>
                                    DEVELOPMENT
                                </span>

                                <h3>
                                    Product Development
                                </h3>

                                <p>
                                    Build, test and improve digital
                                    products and technology.
                                </p>

                            </div>


                            <div className="investor-capital-card">

                                <span>
                                    TECHNOLOGY
                                </span>

                                <h3>
                                    Infrastructure & Tools
                                </h3>

                                <p>
                                    Invest in technology, infrastructure,
                                    software and development resources.
                                </p>

                            </div>


                            <div className="investor-capital-card">

                                <span>
                                    TEAM
                                </span>

                                <h3>
                                    Talent & Execution
                                </h3>

                                <p>
                                    Strengthen the capabilities needed
                                    to develop and execute projects.
                                </p>

                            </div>


                            <div className="investor-capital-card">

                                <span>
                                    GROWTH
                                </span>

                                <h3>
                                    Market & Expansion
                                </h3>

                                <p>
                                    Support product growth, audience
                                    development and market expansion.
                                </p>

                            </div>


                            <div className="investor-capital-card">

                                <span>
                                    VENTURES
                                </span>

                                <h3>
                                    New Opportunities
                                </h3>

                                <p>
                                    Explore promising ideas and new
                                    digital ventures within the ecosystem.
                                </p>

                            </div>


                        </div>

                    </section>


                    {/* =================================================
                        05. INVESTMENT INTERESTS
                    ================================================= */}

                    <section className="investor-section">

                        <div className="investor-section-heading">

                            <span className="investor-kicker">
                                INVESTMENT INTERESTS
                            </span>

                            <h2>
                                What We Are Open to Exploring
                            </h2>

                            <p>
                                Different investment approaches may make
                                sense for different projects. We are open
                                to discussing opportunities based on
                                project fit, goals and mutual expectations.
                            </p>

                        </div>


                        <div className="investor-interest-grid">


                            <div className="investor-interest-card">

                                <span>
                                    PROJECT
                                </span>

                                <strong>
                                    Project-Level Investment
                                </strong>

                            </div>


                            <div className="investor-interest-card">

                                <span>
                                    PRODUCT
                                </span>

                                <strong>
                                    Product Investment
                                </strong>

                            </div>


                            <div className="investor-interest-card">

                                <span>
                                    VENTURE
                                </span>

                                <strong>
                                    Venture Investment
                                </strong>

                            </div>


                            <div className="investor-interest-card">

                                <span>
                                    STRATEGIC
                                </span>

                                <strong>
                                    Strategic Investment
                                </strong>

                            </div>


                            <div className="investor-interest-card">

                                <span>
                                    LONG TERM
                                </span>

                                <strong>
                                    Long-Term Growth Partnerships
                                </strong>

                            </div>


                        </div>

                    </section>


                    {/* =================================================
                        06. WHAT INVESTORS CAN BRING
                    ================================================= */}

                    <section className="investor-section">

                        <div className="investor-section-heading">

                            <span className="investor-kicker">
                                BEYOND CAPITAL
                            </span>

                            <h2>
                                What Investors Can Bring
                            </h2>

                            <p>
                                The strongest relationships can involve
                                more than capital. Experience, connections
                                and strategic guidance can also help
                                projects move forward.
                            </p>

                        </div>


                        <div className="investor-contribution-grid">


                            <article className="investor-contribution-card">

                                <strong>
                                    Capital
                                </strong>

                                <p>
                                    Financial resources that support
                                    product development and growth.
                                </p>

                            </article>


                            <article className="investor-contribution-card">

                                <strong>
                                    Experience
                                </strong>

                                <p>
                                    Industry knowledge and experience
                                    that can help guide decisions.
                                </p>

                            </article>


                            <article className="investor-contribution-card">

                                <strong>
                                    Network
                                </strong>

                                <p>
                                    Connections to people, businesses,
                                    markets and useful opportunities.
                                </p>

                            </article>


                            <article className="investor-contribution-card">

                                <strong>
                                    Strategic Guidance
                                </strong>

                                <p>
                                    Perspective and guidance that can
                                    help projects grow more effectively.
                                </p>

                            </article>


                        </div>

                    </section>


                    {/* =================================================
                        07. INVESTMENT PROCESS
                    ================================================= */}

                    <section className="investor-section">

                        <div className="investor-section-heading">

                            <span className="investor-kicker">
                                THE PROCESS
                            </span>

                            <h2>
                                How an Investment Conversation Works
                            </h2>

                            <p>
                                We keep the initial process simple.
                                Detailed investment discussions happen
                                only after both sides understand the
                                opportunity and potential fit.
                            </p>

                        </div>


                        <div className="investor-process-grid">


                            <article className="investor-process-card">

                                <span>
                                    01
                                </span>

                                <h3>
                                    Connect
                                </h3>

                                <p>
                                    Share your interest and tell us
                                    a little about yourself or your
                                    organization.
                                </p>

                            </article>


                            <article className="investor-process-card">

                                <span>
                                    02
                                </span>

                                <h3>
                                    Understand
                                </h3>

                                <p>
                                    Learn more about our projects,
                                    vision and areas of development.
                                </p>

                            </article>


                            <article className="investor-process-card">

                                <span>
                                    03
                                </span>

                                <h3>
                                    Evaluate
                                </h3>

                                <p>
                                    Both sides explore the opportunity,
                                    objectives and potential fit.
                                </p>

                            </article>


                            <article className="investor-process-card">

                                <span>
                                    04
                                </span>

                                <h3>
                                    Discuss
                                </h3>

                                <p>
                                    If there is mutual interest,
                                    investment structure and next
                                    steps can be discussed.
                                </p>

                            </article>


                            <article className="investor-process-card">

                                <span>
                                    05
                                </span>

                                <h3>
                                    Proceed
                                </h3>

                                <p>
                                    Where appropriate, formal terms,
                                    documentation and agreements
                                    are handled before proceeding.
                                </p>

                            </article>


                        </div>

                    </section>


                    {/* =================================================
                        08. INVESTOR CTA
                    ================================================= */}

                    <section
                        id="investor-support"
                        className="investor-support-section"
                    >

                        <div className="investor-support-content">

                            <span className="investor-kicker">
                                LET'S TALK
                            </span>

                            <h2>
                                Interested in Investing in GoodOneCreation?
                            </h2>

                            <p>
                                If you are an investor, organization or
                                strategic partner interested in exploring
                                an investment opportunity with
                                GoodOneCreation, we'd like to hear from you.
                            </p>

                            <a
                                href="#investor-form"
                                className="investor-primary-btn"
                            >
                                Start an Investment Conversation →
                            </a>

                        </div>

                    </section>


                    {/* =================================================
                        09. INVESTOR FORM
                    ================================================= */}

                    <section
                        id="investor-form"
                        className="investor-section investor-form-section"
                    >

                        <div className="investor-section-heading">

                            <span className="investor-kicker">
                                INVESTMENT INQUIRY
                            </span>

                            <h2>
                                Start an Investment Conversation
                            </h2>

                            <p>
                                Tell us a little about yourself,
                                your organization and what interests
                                you about investing in GoodOneCreation.
                            </p>

                        </div>


                        <form
                            className="investor-form"
                            onSubmit={handleSubmit}
                        >


                            <div className="investor-form-grid">


                                <div className="investor-form-field">

                                    <label htmlFor="investor-name">
                                        Full Name
                                    </label>

                                    <input
                                        id="investor-name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                    />

                                </div>


                                <div className="investor-form-field">

                                    <label htmlFor="investor-email">
                                        Email Address
                                    </label>

                                    <input
                                        id="investor-email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                    />

                                </div>


                                <div className="investor-form-field">

                                    <label htmlFor="investor-organization">
                                        Organization / Investment Firm
                                    </label>

                                    <input
                                        id="investor-organization"
                                        name="organization"
                                        type="text"
                                        placeholder="Organization or investment firm"
                                    />

                                </div>


                                <div className="investor-form-field">

                                    <label htmlFor="investor-website">
                                        Website / Professional Profile
                                    </label>

                                    <input
                                        id="investor-website"
                                        name="website"
                                        type="url"
                                        placeholder="https://"
                                    />

                                </div>


                            </div>


                            <div className="investor-form-field">

                                <label htmlFor="investor-type">
                                    Investor Type
                                </label>

                                <select
                                    id="investor-type"
                                    name="investorType"
                                    defaultValue=""
                                    required
                                >

                                    <option
                                        value=""
                                        disabled
                                    >
                                        Select an option
                                    </option>

                                    <option value="individual">
                                        Individual Investor
                                    </option>

                                    <option value="angel">
                                        Angel Investor
                                    </option>

                                    <option value="investment-firm">
                                        Investment Firm
                                    </option>

                                    <option value="corporate">
                                        Corporate / Strategic Investor
                                    </option>

                                    <option value="other">
                                        Other
                                    </option>

                                </select>

                            </div>


                            <div className="investor-form-field">

                                <label htmlFor="investor-opportunity">
                                    Area of Investment Interest
                                </label>

                                <input
                                    id="investor-opportunity"
                                    name="opportunity"
                                    type="text"
                                    placeholder="Project, product, technology, venture or general interest"
                                />

                            </div>


                            <div className="investor-form-field">

                                <label htmlFor="investor-looking">
                                    What Are You Looking to Explore?
                                </label>

                                <textarea
                                    id="investor-looking"
                                    name="lookingFor"
                                    rows="4"
                                    placeholder="Tell us what kind of investment or strategic opportunity interests you..."
                                    required
                                ></textarea>

                            </div>


                            <div className="investor-form-field">

                                <label htmlFor="investor-about">
                                    Tell Us About Yourself
                                </label>

                                <textarea
                                    id="investor-about"
                                    name="about"
                                    rows="4"
                                    placeholder="Tell us about your background, organization or investment interests..."
                                ></textarea>

                            </div>


                            <div className="investor-form-field">

                                <label htmlFor="investor-additional">
                                    Additional Information
                                </label>

                                <textarea
                                    id="investor-additional"
                                    name="additional"
                                    rows="4"
                                    placeholder="Anything else you'd like us to know?"
                                ></textarea>

                            </div>


                            {submitMessage && (

                                <div
                                    className={`investor-submit-message ${
                                        submitSuccess
                                            ? "success"
                                            : "error"
                                    }`}
                                >
                                    {submitMessage}
                                </div>

                            )}


                            <div className="investor-form-action">

                                <button
                                    type="submit"
                                    className="investor-submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Investment Inquiry →"
                                    }
                                </button>

                            </div>


                        </form>

                    </section>


                    {/* =================================================
                        10. OTHER OPPORTUNITIES
                    ================================================= */}

                    <section className="investor-section">

                        <div className="investor-section-heading">

                            <span className="investor-kicker">
                                OTHER WAYS TO CONNECT
                            </span>

                            <h2>
                                Explore Other Opportunities
                            </h2>

                            <p>
                                Investment is one way to connect with
                                GoodOneCreation. Explore other ways
                                to work with us.
                            </p>

                        </div>


                        <div className="investor-other-grid">


                            <a
                                href="/collaborate"
                                className="investor-other-card"
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
                                className="investor-other-card"
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
                                className="investor-other-card"
                            >

                                <span>
                                    FUNDING
                                </span>

                                <strong>
                                    Grant & Funding Support →
                                </strong>

                            </a>


                            <a
                                href="/sponsor"
                                className="investor-other-card"
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


export default Investor;