import React, { useCallback, useEffect, useRef } from "react";
import "./tenants.css";
import {
  Relevant,
  SearchByAreas,
  FindAPlaceToLive,
  FindTheRightRoomie,
  Pricing,
} from "./Contents";
import "aos/dist/aos.css";
import Carousel from "react-elastic-carousel";
import { useTranslation } from "react-i18next";

const Tenants = () => {
  const [t] = useTranslation("common");

  useEffect(() => {
    document.title = "Tenants";
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
    <div className="tenants-container">
      <img src="/images/bgImg.png" alt="bg/img" />
      <div className="divider"></div>
      <div className="paragraph_container">
        <p className="first_paragraph">
          {t("Old rental portals are.title", { framework: "React" })}
        </p>
        <p className="second_paragraph">
          {t("build for.title", { framework: "React" })}{" "}
          <span>{t("the past.title", { framework: "React" })}</span>
        </p>
      </div>
      <div className="video_future_wrapper">
        <div className="furure_wrapper">
          <div className="box_paragraph">
            <div className="key-wrapper">
              <img src="/images/key_icon.png" alt="key/png" />
            </div>
            <p className="third_paragraph">
              {t("Roomkast is.title")} <br />
              {t("designed.title")}
            </p>
            <p className="fourth_paragraph">
              {t("for.title")} <span>{t("the future.title")}</span>
            </p>
            <div className="app_link">
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
        <div className="video_wrapper">
          <div className="video">
            <img src="/images/play.png" alt="video" />
          </div>
        </div>
      </div>
      <div ref={sliderContainer} className="tenants-middle">
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
      <div className="find_home">
        <p className="find_home-text">
          {t("The easiest way the find a home.title", { framework: "React" })}
        </p>
        <div className="find_home-steps">
          <div className="step_box">
            <div className="steps">
              <img src="/images/deposit.png" alt="deposit" />
            </div>
            <p>{t("Pay deposits in the app.title")}</p>
          </div>
          <div className="step_box">
            <div className="steps">
              <img src="/images/contract.png" alt="contract" />
            </div>
            <p>{t("Sign contracts.title")}</p>
          </div>
          <div className="step_box">
            <div className="steps">
              <img src="/images/filtering.png" alt="filtering" />
            </div>
            <p>{t("Filtering.title")}</p>
          </div>
          <div className="step_box">
            <div className="steps">
              <img src="/images/inbox.png" alt="inbox" />
            </div>
            <p>{t("Inbox.title")}</p>
          </div>
        </div>
        <div className="app_link">
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

export default Tenants;
// import React, { useEffect, useRef } from "react";
// import "./tenants.css";
// import {
//   Relevant,
//   SearchByAreas,
//   FindAPlaceToLive,
//   FindTheRightRoomie,
//   Pricing,
// } from "./Contents";
// import "aos/dist/aos.css";
// import Carousel from "react-elastic-carousel";
// import { useTranslation } from "react-i18next";

// const Tenants = () => {
//   const [t] = useTranslation("common");

//   useEffect(() => {
//     document.title = "Tenants";
//   });

//   const prevItemObject = "prev";
//   const nextItemObject = "next";

//   const slider = useRef(null);

//   function scroll(e) {
//     if (slider === null) return 0;

//     e.wheelDelta > 0
//       ? slider.current.onNextStart(prevItemObject, nextItemObject)
//       : slider.current.onPrevStart();
//   }

//   useEffect(() => {
//     window.addEventListener("wheel", scroll, true);

//     return () => {
//       window.removeEventListener("wheel", scroll, false);
//     };
//   }, []);

//   return (
//     <div className="tenants-container">
//       <img src="/images/bgImg.png" alt="bg/img" />
//       <div className="paragraph_container">
//         <p className="first_paragraph">
//           {t("Old rental portals are.title", { framework: "React" })}
//         </p>
//         <p className="second_paragraph">
//           {t("build for.title", { framework: "React" })}{" "}
//           <span>{t("the past.title", { framework: "React" })}</span>
//         </p>
//       </div>
//       <div className="video_future_wrapper">
//         <div className="furure_wrapper">
//           <div className="box_paragraph">
//             <div className="key-wrapper">
//               <img src="/images/key_icon.png" alt="key/png" />
//             </div>
//             <p className="third_paragraph">
//               {t("Roomkast is.title")} <br />
//               {t("designed.title")}
//             </p>
//             <p className="fourth_paragraph">
//               {t("for.title")} <span>{t("the future.title")}</span>
//             </p>
//             <div className="app_link">
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://play.google.com/store/apps/details?id=com.roomkast.roomers&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1%27"
//               >
//                 <img src="/images/google.png" alt="google/png" />
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href="https://apps.apple.com/app/roomkast/id1591616526"
//               >
//                 <img
//                   src="/images/apple.png"
//                   alt="apple/png"
//                   className="apple"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="video_wrapper">
//           <div className="video">
//             <img src="/images/play.png" alt="video" />
//           </div>
//         </div>
//       </div>
//       <div className="tenants-middle">
//         <Carousel
//           onScroll={scroll}
//           verticalMode
//           itemsToShow={1}
//           enableSwipe={true}
//           ref={slider}
//         >
//           <Relevant />
//           <SearchByAreas />
//           <FindAPlaceToLive />
//           <FindTheRightRoomie />
//         </Carousel>
//       </div>
//       <div className="find_home">
//         <p className="find_home-text">
//           {t("The easiest way the find a home.title", { framework: "React" })}
//         </p>
//         <div className="find_home-steps">
//           <div className="step_box">
//             <div className="steps"></div>
//             <p>{t("Pay deposits in the app.title")}</p>
//           </div>
//           <div className="step_box">
//             <div className="steps"></div>
//             <p>{t("Sign contracts.title")}</p>
//           </div>
//           <div className="step_box">
//             <div className="steps"></div>
//             <p>{t("Filtering.title")}</p>
//           </div>
//           <div className="step_box">
//             <div className="steps"></div>
//             <p>{t("Inbox.title")}</p>
//           </div>
//         </div>
//         <div className="app_link">
//           <a
//             target="_blank"
//             rel="noreferrer"
//             href="https://play.google.com/store/apps/details?id=com.roomkast.roomers&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1%27"
//           >
//             <img src="/images/google.png" alt="google/png" />
//           </a>
//           <a
//             target="_blank"
//             rel="noreferrer"
//             href="https://apps.apple.com/app/roomkast/id1591616526"
//           >
//             <img src="/images/apple.png" alt="apple/png" className="apple" />
//           </a>
//         </div>
//         <div className="tenants-pricing">
//           <Pricing />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tenants;
