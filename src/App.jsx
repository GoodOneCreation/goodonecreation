import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Apps from "./pages/Apps.jsx";
import AffiliateBrands from "./pages/AffiliateBrands.jsx";
import AffiliateBrandsList from "./pages/AffiliateBrandsList.jsx";
import Founders from "./pages/Founders.jsx";
import Collaborate from "./pages/Collaborate.jsx";
import Investor from "./pages/Investor.jsx";
import Partner from "./pages/Partner.jsx";
import Grant from "./pages/Grant.jsx";
import Sponsor from "./pages/Sponsor.jsx";
import OfficialSponsors from "./pages/OfficialSponsors.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import MenuPage from "./pages/MenuPage.jsx";


function App(){

    return(

        <BrowserRouter>

            <Routes>

                {/*==================================================
                  HOME
                ==================================================*/}

                <Route
                    path="/"
                    element={<Home />}
                />


                {/*==================================================
                  MAIN PAGES
                ==================================================*/}

                <Route
                    path="/projects"
                    element={<Projects />}
                />

                <Route
                    path="/apps"
                    element={<Apps />}
                />

                <Route
                    path="/affiliate-brands"
                    element={<AffiliateBrands />}
                />

                <Route
                    path="/affiliate-brands-list"
                    element={<AffiliateBrandsList />}
                />

                <Route
                    path="/founders"
                    element={<Founders />}
                />


                {/*==================================================
                  COLLABORATION & FUNDING
                ==================================================*/}

                <Route
                    path="/collaborate"
                    element={<Collaborate />}
                />

                <Route
                    path="/investor"
                    element={<Investor />}
                />

                <Route
                    path="/partner"
                    element={<Partner />}
                />

                <Route
                    path="/grant"
                    element={<Grant />}
                />

                <Route
                    path="/sponsor"
                    element={<Sponsor />}
                />

                <Route
                    path="/official-sponsors"
                    element={<OfficialSponsors />}
                />


                {/*==================================================
                  LEGAL
                ==================================================*/}

                <Route
                    path="/privacy-policy"
                    element={<PrivacyPolicy />}
                />

                <Route
                    path="/terms-conditions"
                    element={<TermsConditions />}
                />

                <Route
                    path="/disclaimer"
                    element={<Disclaimer />}
                />

                <Route
                    path="/menu"
                    element={<MenuPage />}
                />

                {/*==================================================
                  CONTACT
                ==================================================*/}

                <Route
                    path="/contact-us"
                    element={<ContactUs />}
                />

            </Routes>

        </BrowserRouter>

    );

}


export default App;