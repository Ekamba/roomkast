import React, { useEffect } from "react";
import "./tipsTrics.css";
import { useTranslation } from "react-i18next";

const TipsTricks = () => {
  const [t] = useTranslation("common");
  useEffect(() => {
    document.title = "Tips & tricks";
  });
  return (
    <div className="tips_tricks">
      <div className="image_wrapper">
        <img className="image" src="/images/tips&tricks.png" alt="img" />
      </div>
      <div className="tips_tricks_title">
        <p>Tips & Tricks</p>
      </div>
      <div className="find-home-steps">
        <div className="step_box">
          <div className="steps">
            <img src="/images/step.png" alt="img" />
          </div>
          <p>{t("First steps.title")}</p>
        </div>
        <div className="step_box">
          <div className="steps2">
            <img src="/images/paperwork.png" alt="img" />
          </div>
          <p>{t("Paper work.title")}</p>
        </div>
        <div className="step_box">
          <div className="steps3">
            <img src="/images/legal.png" alt="img" />
          </div>
          <p>{t("Legal Advice.title")}</p>
        </div>
        <div className="step_box">
          <div className="steps4">
            <img src="/images/Danish_words.png" alt="img" />
          </div>
          <p>{t("Danish Words.title")}</p>
        </div>
      </div>
      <div className="red_line_box">
        <span className="red_line"></span>
      </div>
      <div className="featured_areas">
        <p>Featured Areas</p>
      </div>
      <div className="grid_items">
        <div className="grid_box">
          <div className="grid"></div>
          <p>{t("Frederiksberg.title")}</p>
        </div>
        <div className="grid_box2">
          <div className="grid"></div>
          <p>{t("Nørrebro.title")}</p>
        </div>
        <div className="grid_box3">
          <div className="grid"></div>
          <p>{t("Vesterbro.title")}</p>
        </div>
        <div className="grid_box4">
          <div className="grid"></div>
          <p>{t("Østerbro.title")}</p>
        </div>
        <div className="grid_box5">
          <div className="grid"></div>
          <p>{t("Valby.title")}</p>
        </div>
        <div className="grid_box6">
          <div className="grid"></div>
          <p>{t("Amager.title")}</p>
        </div>
      </div>
    </div>
  );
};

export default TipsTricks;
