import React, { useEffect } from "react";
import "./about-us.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [t] = useTranslation("common");
  useEffect(() => {
    document.title = "About Us";
  });
  return (
    <div className="about_Us">
      <img src="/images/about_us.png" alt="about/img" />
      <div className="divider"></div>
      <h1>{t("About us.title")}</h1>
      <div className="middle_items">
        <div className="box_paragraph_about_us">
          <div className="key_wrapper">
            <img src="/images/key_icon.png" alt="key/png" />
          </div>
          <p className="third_paragraph">
            {t("Safety as a goal.title")} <br />
          </p>
          <p className="fourth_paragraph">
            {t("design as a.title")} <span>{t("Matter.title")}</span>
          </p>
        </div>
        <p>
          {t(
            "Since 2001 we have been developing high-quality protective clothing for motorcycling in Germany that offers optimal safety, is extremely comfortable to wear and looks like urban street wear. The result: functional high-tech clothing that stands out from conventional motorcycle clothing in terms of comfort and aesthetics. Our products have to be able to do much more than just look good and fit perfectly. Before a prototype becomes part of the collection, it goes through dozens of development steps..title"
          )}
        </p>
      </div>
      <div className="bottom_section">
        <div className="jonathan_section">
          <div className="description_box">
            <h1>Jonathan Djalo</h1>
            <div className="vision_box">
              <p>{t("The Vision.title")}</p>
            </div>
            <div className="text_box">
              <p className="long-text">{t("We are providing full.title")}</p>
              <p className="long-text">{t("transparency of user.title")}</p>
              <p className="long-text">{t("profiles and listed.title")}</p>
              <p className="long-text">{t("rooms/apartments so that.title")}</p>
              <p className="long-text">
                {t("you can feel safe all the time..title")}
              </p>
            </div>
          </div>
          <div className="image_box">
            <img src="/images/jonathan.png" alt="img" />
          </div>
        </div>
        <div className="lukas_section">
          <div className="lukas_image_box">
            <img src="/images/lukas.png" alt="img" />
          </div>
          <div className="lukas_description_box">
            <h1>Lukas Krawczyk</h1>
            <div className="lukas_vision_box">
              <p>{t("The Brand.title")}</p>
            </div>
            <div className="lukas_text_box">
              <p className="long-text">{t("We are providing full.title")}</p>
              <p className="long-text">{t("transparency of user.title")}</p>
              <p className="long-text">{t("profiles and listed.title")}</p>
              <p className="long-text">{t("rooms/apartments so that.title")}</p>
              <p className="long-text">
                {t("you can feel safe all the time..title")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="finalist_image_box">
        <p>We are finalist of the Danish national accelerator program</p>
        <img src="/images/logo.png.webp" alt="beyond" />
      </div>
    </div>
  );
};

export default AboutUs;
