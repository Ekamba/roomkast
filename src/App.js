import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Tenants from "./components/tenants/Tenants";
import LandLords from "./components/landlords/LandLords";
import Support from "./components/support/Support";
import TipsTricks from "./components/tips_&_tricks/TipsTricks";
import TermsConditions from "./components/terms_&_conditions/Collapse";
import AboutUs from "./components/about_us/AboutUs";
import NotFound from "./components/404/NotFound";

const App = () => {
  return (
    <div>
      <Suspense fallback="loading">
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Tenants />} />
          <Route path="landLords" element={<LandLords />} />
          <Route path="support" element={<Support />} />
          <Route path="tipsTricks" element={<TipsTricks />} />
          <Route path="termsConditions" element={<TermsConditions />} />
          <Route path="aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
