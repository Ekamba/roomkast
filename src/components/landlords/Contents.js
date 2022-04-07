import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
export const Relevant = () => {
  const [t] = useTranslation("common");
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);
  return (
    <>
      <div className="left">
        <div data-aos="fade-right">
          <h2 className="title">{t("One platform.title")}</h2>
        </div>
        <img src="/images/relevantInfo.png" alt="mobile" className="mobile" />
      </div>
      <div className="landlords_right">
        <div data-aos="fade-left">
          <div className="many-possibilities-box">
            <h2 className="title2">{t("Many possibilities.title")}</h2>
          </div>
        </div>
        <div className="relevant-info-box">
          <h3>{t("Get relevant info.title")}</h3>
          <div className="long-text-box">
            <p className="long-text">{t("We are providing full.title")}</p>
            <p className="long-text">{t("transparency of user.title")}</p>
            <p className="long-text">{t("profiles and listed.title")}</p>
            <p className="long-text">{t("rooms/apartments so that.title")}</p>
            <p className="long-text">
              {t("you can feel safe all the time.title.")}
            </p>
          </div>
        </div>
        <div className="landlords_apps-link">
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://apps.apple.com/app/roomkast/id1591616526"
          >
            <img src="/images/apple.png" alt="apple/png" />
          </a>
        </div>
      </div>
    </>
  );
};

export const SearchByAreas = () => {
  const [t] = useTranslation("common");
  return (
    <>
      <div className="left">
        <h2 className="title">{t("One platform.title")}</h2>
        <img src="/images/searchByArea.png" alt="mobile" className="mobile1" />
      </div>
      <div className="landlords_right">
        <div className="many-possibilities-box">
          <h2 className="title2">{t("Many possibilities.title")}</h2>
        </div>
        <div className="relevant-info-box">
          <h3>{t("Search by areas.title")}</h3>
          <div className="long-text-box">
            <p className="long-text">{t("We are providing full.title")}</p>
            <p className="long-text">{t("transparency of user.title")}</p>
            <p className="long-text">{t("profiles and listed.title")}</p>
            <p className="long-text">{t("rooms/apartments so that.title")}</p>
            <p className="long-text">
              {t("you can feel safe all the time.title.")}
            </p>
          </div>
        </div>
        <div className="landlords_apps-link">
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://apps.apple.com/app/roomkast/id1591616526"
          >
            <img src="/images/apple.png" alt="apple/png" />
          </a>
        </div>
      </div>
    </>
  );
};
export const FindAPlaceToLive = () => {
  const [t] = useTranslation("common");
  return (
    <>
      <div className="landlords_left">
        <h2 className="title">{t("One platform.title")}</h2>
        <img src="/images/findAPlace.png" alt="mobile" className="mobile1" />
      </div>
      <div className="landlords_right">
        <div className="many-possibilities-box">
          <h2 className="title2">{t("Many possibilities.title")}</h2>
        </div>
        <div className="relevant-info-box">
          <h3>{t("Find a place to live.title")}</h3>
          <div className="long-text-box">
            <p className="long-text">{t("We are providing full.title")}</p>
            <p className="long-text">{t("transparency of user.title")}</p>
            <p className="long-text">{t("profiles and listed.title")}</p>
            <p className="long-text">{t("rooms/apartments so that.title")}</p>
            <p className="long-text">
              {t("you can feel safe all the time.title.")}
            </p>
          </div>
        </div>
        <div className="landlords_apps-link">
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://apps.apple.com/app/roomkast/id1591616526"
          >
            <img src="/images/apple.png" alt="apple/png" />
          </a>
        </div>
      </div>
    </>
  );
};
export const FindTheRightRoomie = () => {
  const [t] = useTranslation("common");
  return (
    <>
      <div className="landlords_left">
        <h2 className="title">{t("One platform.title")}</h2>
        <img src="/images/rightRoommate.png" alt="mobile" className="mobile1" />
      </div>
      <div className="landlords_right">
        <div className="many-possibilities-box">
          <h2 className="title2">{t("Many possibilities.title")}</h2>
        </div>
        <div className="relevant-info-box">
          <h3>{t("Find the right roommate.title")}</h3>
          <div className="long-text-box">
            <p className="long-text">{t("We are providing full.title")}</p>
            <p className="long-text">{t("transparency of user.title")}</p>
            <p className="long-text">{t("profiles and listed.title")}</p>
            <p className="long-text">{t("rooms/apartments so that.title")}</p>
            <p className="long-text">
              {t("you can feel safe all the time.title.")}
            </p>
          </div>
        </div>
        <div className="landlords_apps-link">
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://apps.apple.com/app/roomkast/id1591616526"
          >
            <img src="/images/apple.png" alt="apple/png" />
          </a>
        </div>
      </div>
    </>
  );
};
export const Pricing = () => {
  const [t] = useTranslation("common");
  return (
    <div className="landlords_pricing">
      <div className="landlords_left-price">
        <h2 className="landlords_price-title">{t("Pricing.title")}</h2>
        <div className="pay-box">
          <h2 className="succeed">{t("Pay if you succeed.title")}</h2>
        </div>
        <div className="long-text-box-price">
          <p className="long-text-price">{t("We are providing full.title")}</p>
          <p className="long-text-price">{t("transparency of user.title")}</p>
          <p className="long-text-price">{t("profiles and listed.title")}</p>
          <p className="long-text-price">
            {t("rooms/apartments so that.title")}
          </p>
          <p className="long-text-price">
            {t("you can feel safe all the time..title")}
          </p>
        </div>
        <div className="landlords_apps-link">
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://apps.apple.com/app/roomkast/id1591616526"
          >
            <img src="/images/apple.png" alt="apple/png" />
          </a>
        </div>
      </div>
      <div className="landlords_right-price"></div>
    </div>
  );
};

export const TopSection = () => {
  const inViewport = (entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };

  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {};

  const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
  ELs_inViewport.forEach((EL) => {
    Obs.observe(EL, obsOptions);
  });
  return (
    <div>
      <div className="paragraphContainer">
        <p className="first-paragraph">Old Rental Portals are</p>
        <p className="second-paragraph">
          build for <span>the past</span>
        </p>
      </div>
      <div className="box-paragraph">
        <p className="third-paragraph">Roomkast is designed</p>
        <p className="fourth-paragraph">
          for <span>The future</span>
        </p>
        <div className="app-link">
          <div className="space"></div>
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://apps.apple.com/app/roomkast/id1591616526"
          >
            <img src="/images/apple.png" alt="apple/png" />
          </a>
        </div>
      </div>
    </div>
  );
};
