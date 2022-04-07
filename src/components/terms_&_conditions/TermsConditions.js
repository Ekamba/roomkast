import React, { useState, useEffect, useRef } from "react";
import "./termsConditions.css";
import { ChevronDownIcon } from "@heroicons/react/outline";

const TermsConditions = (props) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [width, setWidth] = useState("0px");
  const [rotate, setRotate] = useState("accordion_icon");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setWidth(active === "active" ? "0px" : `${content.current.scrollWidth}px`);
    setRotate(active === "active" ? "accordion_icon" : "accordion_icon rotate");
  };
  useEffect(() => {
    document.title = "Terms & Conditions";
  });

  return (
    <div className="item">
      <div className={`btn_text_box ${active}`}>
        <p>{props.title}</p>
        <ChevronDownIcon
          className={`${rotate}`}
          width={10}
          onClick={toggleAccordion}
        />
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}`, maxWidth: `${width}` }}
        className="content"
      >
        <div className="text">
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: props.text }}
          />
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
