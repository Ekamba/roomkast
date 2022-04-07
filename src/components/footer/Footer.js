import React from "react";
import "./styles.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RedFooter = () => {
  const [t] = useTranslation("common");

  return (
    <div className="footer">
      <div className="leftFooter">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://apps.apple.com/app/roomkast/id1591616526"
        >
          <img src="/images/apple.png" alt="apple/png" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://play.google.com/store/apps/details?id=com.roomkast.roomers&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1%27"
        >
          <img
            className="google_link"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="google/png"
          />
        </a>
      </div>
      <div className="iconsContainer">
        <p className="textFooter">
          {t("Designed in.title")} <span>{t("Denmark.title")}</span>
        </p>
        <div>
          <FaInstagram className="icons" />
          <FaTwitter className="icons" />
          <FaFacebookF className="icons" />
        </div>
      </div>
      <div className="rightFooter">
        <div className="text-box">
          <Link to="termsConditions">{t("Terms & Conditions.title")}</Link>
          <Link to="tipsTricks">{t("Tips & Tricks.title")}</Link>
          <Link to="aboutUs">{t("About us.title")}</Link>
          <p>
            <Link to="support" className="support">
              {t("Support.title")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedFooter;
