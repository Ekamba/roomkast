import React, { useCallback, useEffect, useRef } from "react";
import "./landlords.css";
import {
  Relevant,
  SearchByAreas,
  FindAPlaceToLive,
  FindTheRightRoomie,
  Pricing,
} from "./Contents";
import Carousel from "react-elastic-carousel";
import { useTranslation } from "react-i18next";

const LandLords = () => {
  const [t] = useTranslation("common");

  useEffect(() => {
    document.title = "LandLords";
  });

  const wheeling = useRef(false);
  const wheelingTimeout = useRef(false);
  const slider = useRef(null);
  const sliderContainer = useRef(null);
  const currentIndex = useRef(0);
  const IMAGES_LENGTH = 4;

  const getNextCurrentIndex = (index) => {
    if (index === IMAGES_LENGTH) {
      return index;
    }

    return index + 1;
  };

  const getPrevCurrentIndex = (index) => {
    if (index === 0) {
      return index;
    }

    return index - 1;
  };

  const shouldPreventDefault = useCallback(({ isNext }) => {
    if (!isNext && currentIndex.current > 0) {
      return true;
    }

    if (isNext && currentIndex.current < 4) {
      return true;
    }

    return false;
  }, []);

  const scroll = useCallback(
    (e) => {
      const isNext = e.wheelDelta > 0;
      if (shouldPreventDefault({ isNext })) {
        e.preventDefault();
      }
      if (slider === null) return null;

      clearTimeout(wheelingTimeout.current);
      wheelingTimeout.current = setTimeout(function () {
        wheeling.current = false;
      }, 100);

      if (wheeling.current === true) {
        return null;
      }

      if (isNext) {
        slider.current.slideNext();
        currentIndex.current = getNextCurrentIndex(currentIndex.current);
      } else {
        slider.current.slidePrev();
        currentIndex.current = getPrevCurrentIndex(currentIndex.current);
      }
      wheeling.current = true;
    },
    [slider, shouldPreventDefault]
  );

  const stopWheeling = useCallback(() => {
    wheeling.current = false;
  }, []);

  useEffect(() => {
    if (!sliderContainer.current) {
      return null;
    }
    const sliderContainerCurrent = sliderContainer.current;
    sliderContainerCurrent.addEventListener("wheel", scroll, true);

    return () => {
      sliderContainerCurrent.removeEventListener("wheel", scroll, false);
    };
  }, [scroll, stopWheeling]);

  return (
    <div className="container">
      <img src="/images/bgImg.png" alt="bg/img" />
      <div className="divider"></div>
      <div className="paragraphContainer">
        <p className="first-paragraph">{t("Old rental portals are.title")}</p>
        <p className="second-paragraph">
          {t("build for.title")} <span>{t("the past.title")}</span>
        </p>
      </div>
      <div className="landlords_video_future_wrapper">
        <div className="landlords_video_wrapper">
          <div className="landlords_video">
            <img src="/images/play.png" alt="video" />
          </div>
        </div>
        <div className="landlords_future_wrapper">
          <div className="box-paragraph">
            <div className="key-wrapper">
              <img src="/images/key_icon.png" alt="key/png" />
            </div>
            <p className="third-paragraph">
              {t("Roomkast is.title")} <br />
              {t("designed.title")}
            </p>
            <p className="fourth-paragraph">
              {t("for.title")} <span>{t("the future.title")}</span>
            </p>
            <div className="landlords_app-link">
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
      </div>
      <div ref={sliderContainer} className="landlords_middle">
        <Carousel
          onScroll={scroll}
          verticalMode
          itemsToShow={1}
          enableSwipe={true}
          ref={slider}
        >
          <Relevant />
          <SearchByAreas />
          <FindAPlaceToLive />
          <FindTheRightRoomie />
        </Carousel>
      </div>
      <div className="find-home">
        <p className="find-home-text">
          {t("The easiest way the find a home.title", { framework: "React" })}
        </p>
        <div className="find-home-steps">
          <div className="step_box">
            <div className="steps"></div>
            <p>{t("Pay deposits in the app.title")}</p>
          </div>
          <div className="step_box">
            <div className="steps"></div>
            <p>{t("Sign contracts.title")}</p>
          </div>
          <div className="step_box">
            <div className="steps"></div>
            <p>{t("Filtering.title")}</p>
          </div>
          <div className="step_box">
            <div className="steps"></div>
            <p>{t("Inbox.title")}</p>
          </div>
        </div>
        <div className="landlords_app-link">
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
        <div>
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default LandLords;
