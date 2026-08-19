import React from "react";
import emailjs from "@emailjs/browser";
import {
    Header,
    InnerPageLogo,
    Footer
} from "./Home.jsx";


function Collaborate() {

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitMessage, setSubmitMessage] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("SUBMIT BUTTON CLICKED");

        setIsSubmitting(true);
        setSubmitMessage("");

        const form = e.currentTarget;

        const formData = {
            name: form.name.value,
            email: form.email.value,
            organization: form.organization.value,
            collaborationType: form.collaborationType.value,
            project: form.project.value,
            message: form.message.value,
            link: form.link.value,
            lookingFor: form.lookingFor.value,
            additional: form.additional.value,

            // EmailJS template variables
            title: form.collaborationType.value,
            website: form.link.value,
            additionalInformation: form.additional.value
        };

        try {
            await emailjs.send(
                "service_0su3tkm",
                "template_9yooxkm",
                formData,
                { publicKey: "wGJTXozm1sja9LEVv" }
            );

            setSubmitMessage(
                "Your collaboration request has been sent successfully."
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

        <div className="collaborate-page">

            <Header />

            <InnerPageLogo />


            {/*==================================================
              COLLABORATE
            ==================================================*/}

            <main className="collaborate-page-main">

                <div className="collaborate-page-container">


                    {/*==================================================
                      01. PAGE INTRO / HERO
                    ==================================================*/}

                    <section className="collaborate-page-intro">

                        <span className="collaborate-page-kicker">
                            COLLABORATE WITH US
                        </span>

                        <h1 className="collaborate-page-title">
                            Let's Build Something Meaningful Together
                        </h1>

                        <p className="collaborate-page-subtitle">
                            Have an idea, project, creative concept or
                            technology opportunity? Tell us what you're
                            building and let's explore how we can work
                            together.
                        </p>

                        <div className="collaborate-page-divider"></div>


                        <div className="collaborate-page-intro-actions">

                            <a
                                href="#collaboration-form"
                                className="collaborate-primary-btn"
                            >
                                Share Your Idea →
                            </a>

                        </div>

                    </section>


                    {/*==================================================
                      02. WHAT WE COLLABORATE ON
                    ==================================================*/}

                    <section className="collaborate-page-section">

                        <div className="collaborate-section-header">

                            <span className="collaborate-section-kicker">
                                POSSIBILITIES
                            </span>

                            <h2>
                                What We Collaborate On
                            </h2>

                            <p>
                                From early ideas to digital products,
                                we explore different kinds of creative
                                and technology-driven opportunities.
                            </p>

                        </div>


                        <div className="collaborate-focus-grid">


                            <article className="collaborate-focus-card">

                                <span className="collaborate-focus-icon">
                                    💡
                                </span>

                                <strong>
                                    Ideas &amp; Concepts
                                </strong>

                                <p>
                                    Explore and develop new ideas,
                                    concepts and creative possibilities.
                                </p>

                            </article>


                            <article className="collaborate-focus-card">

                                <span className="collaborate-focus-icon">
                                    💻
                                </span>

                                <strong>
                                    Technology &amp; Development
                                </strong>

                                <p>
                                    Websites, digital platforms,
                                    tools and development-focused projects.
                                </p>

                            </article>


                            <article className="collaborate-focus-card">

                                <span className="collaborate-focus-icon">
                                    🎨
                                </span>

                                <strong>
                                    Creative Projects
                                </strong>

                                <p>
                                    Design, digital art, visual concepts
                                    and creative experiences.
                                </p>

                            </article>


                            <article className="collaborate-focus-card">

                                <span className="collaborate-focus-icon">
                                    🌐
                                </span>

                                <strong>
                                    Digital Products
                                </strong>

                                <p>
                                    Turn useful ideas into meaningful
                                    digital products and experiences.
                                </p>

                            </article>


                            <article className="collaborate-focus-card">

                                <span className="collaborate-focus-icon">
                                    📱
                                </span>

                                <strong>
                                    Content &amp; Media
                                </strong>

                                <p>
                                    Creative content, digital media
                                    and storytelling opportunities.
                                </p>

                            </article>


                            <article className="collaborate-focus-card">

                                <span className="collaborate-focus-icon">
                                    🚀
                                </span>

                                <strong>
                                    New Ventures
                                </strong>

                                <p>
                                    Explore early-stage ideas and
                                    new digital ventures together.
                                </p>

                            </article>

                        </div>

                    </section>


                    {/*==================================================
                      03. HOW WE CAN COLLABORATE
                    ==================================================*/}

                    <section className="collaborate-page-section">

                        <div className="collaborate-section-header">

                            <span className="collaborate-section-kicker">
                                WAYS TO WORK TOGETHER
                            </span>

                            <h2>
                                How We Can Collaborate
                            </h2>

                            <p>
                                Every project is different. We can explore
                                the collaboration model that best fits
                                your idea and goals.
                            </p>

                        </div>


                        <div className="collaborate-model-grid">


                            <article className="collaborate-model-card">

                                <span className="collaborate-model-number">
                                    01
                                </span>

                                <h3>
                                    Build Together
                                </h3>

                                <p>
                                    Have an idea but need technology,
                                    creative direction or execution?
                                    Let's explore how we can build it together.
                                </p>

                            </article>


                            <article className="collaborate-model-card">

                                <span className="collaborate-model-number">
                                    02
                                </span>

                                <h3>
                                    Creative Collaboration
                                </h3>

                                <p>
                                    Work together on design, digital art,
                                    content, visual concepts and creative
                                    experiences.
                                </p>

                            </article>


                            <article className="collaborate-model-card">

                                <span className="collaborate-model-number">
                                    03
                                </span>

                                <h3>
                                    Technology Collaboration
                                </h3>

                                <p>
                                    Explore websites, digital platforms,
                                    tools and development-focused
                                    collaborations.
                                </p>

                            </article>


                            <article className="collaborate-model-card">

                                <span className="collaborate-model-number">
                                    04
                                </span>

                                <h3>
                                    Project Partnership
                                </h3>

                                <p>
                                    Explore longer-term or mutually
                                    beneficial opportunities around
                                    a shared project.
                                </p>

                            </article>

                        </div>

                    </section>


                    {/*==================================================
                      04. WHAT WE BRING
                    ==================================================*/}

                    <section className="collaborate-page-section">

                        <div className="collaborate-section-header">

                            <span className="collaborate-section-kicker">
                                OUR STRENGTHS
                            </span>

                            <h2>
                                What We Bring
                            </h2>

                            <p>
                                GoodOneCreation combines technology,
                                creativity and digital thinking to
                                turn ideas into meaningful experiences.
                            </p>

                        </div>


                        <div className="collaborate-strength-grid">


                            <div className="collaborate-strength-card">

                                <span>
                                    TECHNOLOGY
                                </span>

                                <h3>
                                    Technology &amp; Development
                                </h3>

                                <p>
                                    Development, websites, digital
                                    platforms and technical execution.
                                </p>

                            </div>


                            <div className="collaborate-strength-card">

                                <span>
                                    CREATIVE
                                </span>

                                <h3>
                                    Creative Direction
                                </h3>

                                <p>
                                    Design, visual identity, digital art
                                    and creative concepts.
                                </p>

                            </div>


                            <div className="collaborate-strength-card">

                                <span>
                                    CONTENT
                                </span>

                                <h3>
                                    Content &amp; Media
                                </h3>

                                <p>
                                    Digital content, social presence
                                    and creative storytelling.
                                </p>

                            </div>


                            <div className="collaborate-strength-card">

                                <span>
                                    PRODUCT
                                </span>

                                <h3>
                                    Product Thinking
                                </h3>

                                <p>
                                    Turning ideas into useful digital
                                    products and experiences.
                                </p>

                            </div>

                        </div>

                    </section>


                    {/*==================================================
                      05. WHO CAN COLLABORATE
                    ==================================================*/}

                    <section className="collaborate-page-section">

                        <div className="collaborate-section-header">

                            <span className="collaborate-section-kicker">
                                WHO CAN COLLABORATE
                            </span>

                            <h2>
                                You Don't Have to Be a Large Company
                            </h2>

                            <p>
                                Good ideas can come from anywhere. We are
                                open to exploring meaningful opportunities
                                with independent creators, builders and
                                organizations at different stages.
                            </p>

                        </div>


                        <div className="collaborate-audience-grid">


                            <span>
                                Independent Creators
                            </span>

                            <span>
                                Developers
                            </span>

                            <span>
                                Businesses
                            </span>

                            <span>
                                Startups
                            </span>

                            <span>
                                Content Creators
                            </span>

                            <span>
                                Organizations
                            </span>

                            <span>
                                Students &amp; Early Builders
                            </span>

                            <span>
                                Creative Communities
                            </span>

                        </div>

                    </section>


                    {/*==================================================
                      06. COLLABORATION PROCESS
                    ==================================================*/}

                    <section className="collaborate-page-section">

                        <div className="collaborate-section-header">

                            <span className="collaborate-section-kicker">
                                SIMPLE PROCESS
                            </span>

                            <h2>
                                How Collaboration Works
                            </h2>

                            <p>
                                A simple process helps us understand your
                                idea before deciding how we can move forward.
                            </p>

                        </div>


                        <div className="collaborate-process-grid">


                            <article className="collaborate-process-card">

                                <span>
                                    01
                                </span>

                                <h3>
                                    Share
                                </h3>

                                <p>
                                    Tell us about your idea, project or
                                    opportunity.
                                </p>

                            </article>


                            <article className="collaborate-process-card">

                                <span>
                                    02
                                </span>

                                <h3>
                                    Review
                                </h3>

                                <p>
                                    We review your concept, requirements
                                    and possible direction.
                                </p>

                            </article>


                            <article className="collaborate-process-card">

                                <span>
                                    03
                                </span>

                                <h3>
                                    Discuss
                                </h3>

                                <p>
                                    We connect and explore whether there
                                    is a good fit for collaboration.
                                </p>

                            </article>


                            <article className="collaborate-process-card">

                                <span>
                                    04
                                </span>

                                <h3>
                                    Build
                                </h3>

                                <p>
                                    If there is a fit, we move forward
                                    and start building together.
                                </p>

                            </article>

                        </div>

                    </section>


                    {/*==================================================
                      07. COLLABORATION MODELS
                    ==================================================*/}

                    <section className="collaborate-page-section">

                        <div className="collaborate-section-header">

                            <span className="collaborate-section-kicker">
                                COLLABORATION MODELS
                            </span>

                            <h2>
                                Different Ways to Work Together
                            </h2>

                            <p>
                                Depending on the project, collaboration may
                                take different forms.
                            </p>

                        </div>


                        <div className="collaborate-type-grid">


                            <article className="collaborate-type-card">

                                <h3>
                                    Project Collaboration
                                </h3>

                                <p>
                                    Work together on a specific digital,
                                    creative or technology project.
                                </p>

                            </article>


                            <article className="collaborate-type-card">

                                <h3>
                                    Creative Partnership
                                </h3>

                                <p>
                                    Collaborate on creative content,
                                    visual work and digital experiences.
                                </p>

                            </article>


                            <article className="collaborate-type-card">

                                <h3>
                                    Technology Partnership
                                </h3>

                                <p>
                                    Explore development, platforms,
                                    tools and technology-focused work.
                                </p>

                            </article>


                            <article className="collaborate-type-card">

                                <h3>
                                    Strategic Collaboration
                                </h3>

                                <p>
                                    Explore long-term opportunities
                                    built around shared goals.
                                </p>

                            </article>


                            <article className="collaborate-type-card">

                                <h3>
                                    Community Collaboration
                                </h3>

                                <p>
                                    Work together on initiatives,
                                    campaigns, events or communities.
                                </p>

                            </article>

                            <article className="collaborate-type-card">

                               <h3>
                                 Brand Partnership
                               </h3>

                               <p>
                                 Build meaningful partnerships with brands,
                                 platforms and businesses around shared goals,
                                 visibility and digital opportunities.
                                </p>

                            </article>

                        </div>

                    </section>


                    {/*==================================================
                      08. IDEA CTA
                    ==================================================*/}

                    <section className="collaborate-page-idea">

                        <span className="collaborate-page-kicker">
                            HAVE SOMETHING IN MIND?
                        </span>

                        <h2>
                            Your Idea Could Be the Beginning of Something Great.
                        </h2>

                        <p>
                            It doesn't need to be fully planned. Share what
                            you're imagining and let's see where the
                            conversation takes us.
                        </p>

                        <a
                            href="#collaboration-form"
                            className="collaborate-primary-btn"
                        >
                            Share Your Idea →
                        </a>

                    </section>


                    {/*==================================================
                      09. COLLABORATION FORM
                    ==================================================*/}

                    <section
                        id="collaboration-form"
                        className="collaborate-page-section collaborate-form-section"
                    >

                        <div className="collaborate-section-header">

                            <span className="collaborate-section-kicker">
                                START A CONVERSATION
                            </span>

                            <h2>
                                Tell Us About Your Idea
                            </h2>

                            <p>
                                Give us a little information about what
                                you're working on. You don't need to have
                                everything figured out yet.
                            </p>

                        </div>

                        <form className="collaborate-form"
                          onSubmit={handleSubmit}>


                            <div className="collaborate-form-grid">


                                <div className="collaborate-form-field">

                                    <label htmlFor="collaborate-name">
                                        Full Name
                                    </label>

                                    <input
                                        id="collaborate-name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                    />

                                </div>


                                <div className="collaborate-form-field">

                                    <label htmlFor="collaborate-email">
                                        Email Address
                                    </label>

                                    <input
                                        id="collaborate-email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                    />

                                </div>


                                <div className="collaborate-form-field">

                                    <label htmlFor="collaborate-organization">
                                        Organization / Brand
                                    </label>

                                    <input
                                        id="collaborate-organization"
                                        name="organization"
                                        type="text"
                                        placeholder="Optional"
                                    />

                                </div>


                                <div className="collaborate-form-field">

                                    <label htmlFor="collaborate-type">
                                        Collaboration Type
                                    </label>

                                    <select
                                        id="collaborate-type"
                                        name="collaborationType"
                                        defaultValue=""
                                    >

                                        <option
                                            value=""
                                            disabled
                                        >
                                            Select an option
                                        </option>

                                        <option value="project">
                                            Project Collaboration
                                        </option>

                                        <option value="creative">
                                            Creative Partnership
                                        </option>

                                        <option value="technology">
                                            Technology Partnership
                                        </option>

                                        <option value="strategic">
                                            Strategic Collaboration
                                        </option>

                                        <option value="community">
                                            Community Collaboration
                                        </option>

                                        <option value="other">
                                            Other
                                        </option>

                                    </select>

                                </div>


                            </div>


                            <div className="collaborate-form-field">

                                <label htmlFor="collaborate-project">
                                    Project / Idea Name
                                </label>

                                <input
                                    id="collaborate-project"
                                    name="project"
                                    type="text"
                                    placeholder="What are you working on?"
                                />

                            </div>


                            <div className="collaborate-form-field">

                                <label htmlFor="collaborate-message">
                                    Tell Us About Your Idea
                                </label>

                                <textarea
                                    id="collaborate-message"
                                    name="message"
                                    rows="6"
                                    placeholder="Tell us about your idea, project, goals or what you'd like to build together..."
                                ></textarea>

                            </div>


                            <div className="collaborate-form-grid">


                                <div className="collaborate-form-field">

                                    <label htmlFor="collaborate-link">
                                        Website / Social Link
                                    </label>

                                    <input
                                        id="collaborate-link"
                                        name="link"
                                        type="url"
                                        placeholder="https://"
                                    />

                                </div>


                                <div className="collaborate-form-field">

                                    <label htmlFor="collaborate-looking">
                                        What Are You Looking For?
                                    </label>

                                    <input
                                        id="collaborate-looking"
                                        name="lookingFor"
                                        type="text"
                                        placeholder="How can we help?"
                                    />

                                </div>


                            </div>


                            <div className="collaborate-form-field">

                                <label htmlFor="collaborate-additional">
                                    Additional Information
                                </label>

                                <textarea
                                    id="collaborate-additional"
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


                            <div className="collaborate-form-action">

                                <button
                                    type="submit"
                                    className="collaborate-primary-btn"
                                >
                                    Submit Collaboration Request →
                                </button>

                            </div>

                        </form>

                    </section>


                    {/*==================================================
                      10. OTHER OPPORTUNITIES
                    ==================================================*/}

                    <section className="collaborate-page-section collaborate-other-section">

                        <div className="collaborate-section-header">

                            <span className="collaborate-section-kicker">
                                EXPLORE OTHER OPPORTUNITIES
                            </span>

                            <h2>
                                Looking for Something Specific?
                            </h2>

                            <p>
                                Explore other ways to connect with
                                GoodOneCreation.
                            </p>

                        </div>


                        <div className="collaborate-other-grid">


                            <a
                                href="/partner"
                                className="collaborate-other-card"
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
                                className="collaborate-other-card"
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
                                className="collaborate-other-card"
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


export default Collaborate;