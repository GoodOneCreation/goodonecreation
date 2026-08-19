import React from "react";

import {
    Header,
    InnerPageLogo,
    Footer
} from "./Home.jsx";


function Disclaimer() {

    return (

        <div className="legal-page">

            <Header />

            <InnerPageLogo />

            {/*==================================================
              DISCLAIMER
            ==================================================*/}

            <main className="inner-page">

                <div className="inner-page-container">

                    {/* PAGE HEADER */}

                    <div className="inner-page-header">

                        <span className="inner-page-kicker">
                            DISCLAIMER
                        </span>

                        <h1 className="inner-page-title">
                            Disclaimer
                        </h1>

                        <p className="inner-page-subtitle">
                            This Disclaimer explains the nature and limitations
                            of the information provided through GoodOneCreation.
                        </p>

                        <div className="inner-page-divider"></div>

                    </div>


                    <div className="inner-page-content">


                        {/* 01 */}

                        <section className="inner-page-section">

                            <h2>
                                1. About This Disclaimer
                            </h2>

                            <p>
                                GoodOneCreation is a digital company portfolio
                                and innovation ecosystem focused on creativity,
                                technology, digital products, applications,
                                education, AI, Web3, gaming, design and modern
                                digital experiences.
                            </p>

                            <p>
                                The information available on this website is
                                provided primarily for general informational,
                                educational and presentation purposes.
                            </p>

                        </section>


                        {/* 02 */}

                        <section className="inner-page-section">

                            <h2>
                                2. Accuracy and Completeness
                            </h2>

                            <p>
                                We make reasonable efforts to keep the
                                information published on GoodOneCreation
                                accurate, useful and up to date.
                            </p>

                            <p>
                                However, we do not guarantee that all
                                information is completely accurate, complete,
                                current, reliable or free from errors.
                                Information may change over time without prior
                                notice.
                            </p>

                        </section>


                        {/* 03 */}

                        <section className="inner-page-section">

                            <h2>
                                3. No Professional Advice
                            </h2>

                            <p>
                                Information published on this website should
                                not be considered legal, financial, investment,
                                medical, technical or other professional
                                advice.
                            </p>

                            <p>
                                Users should independently verify important
                                information and, where appropriate, consult a
                                qualified professional before making decisions
                                based on website content.
                            </p>

                        </section>


                        {/* 04 */}

                        <section className="inner-page-section">

                            <h2>
                                4. Projects, Products and Future Plans
                            </h2>

                            <p>
                                Information about projects, applications,
                                products, services, concepts and future
                                innovations may represent current work,
                                planned initiatives or future possibilities.
                            </p>

                            <p>
                                References to upcoming, planned or future
                                projects do not constitute a guarantee of
                                launch, availability, features, pricing,
                                performance or completion.
                            </p>

                        </section>


                        {/* 05 */}

                        <section className="inner-page-section">

                            <h2>
                                5. Affiliate and Promotional Disclosure
                            </h2>

                            <p>
                                GoodOneCreation may feature or link to products,
                                services, tools, brands and platforms through
                                affiliate or promotional relationships.
                            </p>

                            <p>
                                Where applicable, we may receive a commission
                                or other compensation when a visitor purchases
                                a product or takes an eligible action through
                                an affiliate link. This does not normally
                                result in an additional cost to the user.
                            </p>

                            <p>
                                An affiliate or promotional relationship does
                                not mean that GoodOneCreation guarantees the
                                quality, availability, pricing, security or
                                performance of the third-party product or
                                service.
                            </p>

                        </section>


                        {/* 06 */}

                        <section className="inner-page-section">

                            <h2>
                                6. Third-Party Websites and Services
                            </h2>

                            <p>
                                GoodOneCreation may provide links to external
                                websites, applications, platforms, brands,
                                tools, social networks and other third-party
                                resources.
                            </p>

                            <p>
                                These third-party services operate independently
                                and may have their own terms, policies, prices,
                                security practices and content.
                            </p>

                            <p>
                                We do not control or guarantee the availability,
                                accuracy, security, quality or reliability of
                                external websites and services. Visiting or
                                using any third-party service is subject to its
                                own terms and policies.
                            </p>

                        </section>


                        {/* 07 */}

                        <section className="inner-page-section">

                            <h2>
                                7. Limitation of Liability
                            </h2>

                            <p>
                                To the extent permitted by applicable law,
                                GoodOneCreation shall not be responsible for
                                any direct, indirect, incidental, consequential
                                or other loss or damage arising from the use
                                of, or reliance upon, information available
                                through this website.
                            </p>

                            <p>
                                Users are responsible for evaluating information
                                and making their own decisions based on their
                                individual circumstances.
                            </p>

                        </section>


                        {/* 08 */}

                        <section className="inner-page-section">

                            <h2>
                                8. External Content and Availability
                            </h2>

                            <p>
                                Website content, links, features and services
                                may occasionally become unavailable,
                                outdated, changed or temporarily inaccessible.
                            </p>

                            <p>
                                We do not guarantee uninterrupted availability
                                of every page, feature, external resource or
                                linked service at all times.
                            </p>

                        </section>


                        {/* 09 */}

                        <section className="inner-page-section">

                            <h2>
                                9. User Responsibility
                            </h2>

                            <p>
                                Users are responsible for independently
                                evaluating any information, recommendation,
                                product, service or external resource before
                                relying on it.
                            </p>

                            <p>
                                GoodOneCreation should not be considered a
                                substitute for independent research,
                                professional guidance or direct information
                                from the relevant provider.
                            </p>

                        </section>


                        {/* 10 */}

                        <section className="inner-page-section">

                            <h2>
                                10. Changes to This Disclaimer
                            </h2>

                            <p>
                                We may update this Disclaimer from time to
                                time to reflect changes in our website,
                                technology, projects, services, business
                                operations or applicable requirements.
                            </p>

                            <p>
                                Any updated version will be published on this
                                page along with a revised Last Updated date.
                            </p>

                        </section>


                        {/* 11 */}

                        <section className="inner-page-section">

                            <h2>
                                11. Contact Us
                            </h2>

                            <p>
                                If you have any questions regarding this
                                Disclaimer or the information presented on
                                GoodOneCreation, you can contact us through
                                our Contact Us page.
                            </p>

                            <a
                                href="/contact-us"
                                className="inner-page-action"
                            >
                                Contact Us →
                            </a>

                        </section>


                        {/* LAST UPDATED */}

                        <div className="inner-page-updated">

                            <span>
                                Last Updated:
                            </span>

                            <strong>
                                August 2026
                            </strong>

                        </div>


                    </div>

                </div>

            </main>


            <Footer />

        </div>

    );

}


export default Disclaimer;