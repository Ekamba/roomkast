import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_dk from "./translations/dk/common.json";
import common_en from "./translations/en/common.json";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    dk: {
      common: common_dk,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
