import React from "react";

import {
    Header,
    InnerPageLogo,
    Footer
} from "./Home.jsx";


function PrivacyPolicy() {

    return (

        <div className="legal-page">

            <Header />

            <InnerPageLogo />

            {/*==================================================
              PRIVACY POLICY
            ==================================================*/}

            <main className="inner-page">

                <div className="inner-page-container">


                    {/* PAGE HEADER */}

                    <div className="inner-page-header">

                        <span className="inner-page-kicker">
                            LEGAL
                        </span>

                        <h1 className="inner-page-title">
                            Privacy Policy
                        </h1>

                        <p className="inner-page-subtitle">
                            This Privacy Policy explains how GoodOneCreation
                            handles information in connection with this
                            website.
                        </p>

                        <div className="inner-page-divider"></div>

                    </div>


                    <div className="inner-page-content">


                        {/* 01 */}

                        <section className="inner-page-section">

                            <h2>
                                1. About This Privacy Policy
                            </h2>

                            <p>
                                GoodOneCreation is a digital company portfolio
                                and innovation ecosystem focused on creativity,
                                technology, digital products, applications,
                                education, AI, Web3, gaming, design and
                                modern digital experiences.
                            </p>

                            <p>
                                This website is primarily intended to provide
                                information about GoodOneCreation, its projects,
                                applications, initiatives, collaborations and
                                future digital innovations.
                            </p>

                        </section>


                        {/* 02 */}

                        <section className="inner-page-section">

                            <h2>
                                2. Information We Collect
                            </h2>

                            <p>
                                GoodOneCreation does not currently require
                                visitors to create an account or provide
                                personal information simply to browse this
                                website.
                            </p>

                            <p>
                                We do not intentionally collect information
                                such as your name, phone number, address,
                                password or payment details through ordinary
                                website browsing.
                            </p>

                        </section>


                        {/* 03 */}

                        <section className="inner-page-section">

                            <h2>
                                3. Information You Voluntarily Provide
                            </h2>

                            <p>
                                If you choose to contact us, collaborate with
                                us, discuss an opportunity or communicate with
                                GoodOneCreation through an available contact
                                method, you may voluntarily provide information
                                necessary for us to respond to your request.
                            </p>

                            <p>
                                We use such information only for the relevant
                                communication or purpose for which it was
                                provided.
                            </p>

                        </section>


                        {/* 04 */}

                        <section className="inner-page-section">

                            <h2>
                                4. Technical Information
                            </h2>

                            <p>
                                Like most websites, certain basic technical
                                information may be processed automatically by
                                hosting, security, analytics or infrastructure
                                services used to operate the website.
                            </p>

                            <p>
                                This may include information such as browser
                                type, device type, general usage information,
                                IP address and similar technical information.
                            </p>

                            <p>
                                Such information may be used for website
                                security, performance, maintenance,
                                troubleshooting and improving the overall
                                user experience.
                            </p>

                        </section>


                        {/* 05 */}

                        <section className="inner-page-section">

                            <h2>
                                5. Cookies and Similar Technologies
                            </h2>

                            <p>
                                The website or third-party technologies used
                                with it may use cookies or similar technologies
                                where necessary for functionality, security,
                                performance, analytics or other legitimate
                                website purposes.
                            </p>

                            <p>
                                Third-party websites and services linked from
                                GoodOneCreation may have their own cookie and
                                privacy policies.
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
                                tools, social networks or other third-party
                                resources.
                            </p>

                            <p>
                                These third-party services operate independently
                                and may collect or process information according
                                to their own privacy policies. We are not
                                responsible for the privacy practices, security
                                or content of external websites.
                            </p>

                        </section>


                        {/* 07 */}

                        <section className="inner-page-section">

                            <h2>
                                7. How Information May Be Used
                            </h2>

                            <p>
                                Information voluntarily provided to us may be
                                used for purposes such as responding to
                                enquiries, discussing collaboration,
                                communication, partnership opportunities or
                                other legitimate requests.
                            </p>

                            <p>
                                Technical information may be used to maintain
                                website functionality, security, performance
                                and reliability.
                            </p>

                        </section>


                        {/* 08 */}

                        <section className="inner-page-section">

                            <h2>
                                8. Data Security
                            </h2>

                            <p>
                                We take reasonable measures to help protect
                                information handled through our website and
                                communications.
                            </p>

                            <p>
                                However, no method of transmission or storage
                                over the internet can be guaranteed to be
                                completely secure. Therefore, we cannot
                                guarantee absolute security of information.
                            </p>

                        </section>


                        {/* 09 */}

                        <section className="inner-page-section">

                            <h2>
                                9. Children's Privacy
                            </h2>

                            <p>
                                GoodOneCreation does not intentionally request
                                or collect personal information from children
                                through this website.
                            </p>

                        </section>


                        {/* 10 */}

                        <section className="inner-page-section">

                            <h2>
                                10. Changes to This Privacy Policy
                            </h2>

                            <p>
                                We may update this Privacy Policy from time to
                                time to reflect changes in our website,
                                technology, operations or applicable
                                requirements.
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
                                If you have any questions about this Privacy
                                Policy or the privacy practices of
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


export default PrivacyPolicy;