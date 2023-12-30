import React, { useState } from "react";
import Image from "next/legacy/image";
import productDataStyle from "../styles/accordion.module.css";
import dropdownArrow from "../json/program.json";
const Accordion = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${productDataStyle.accordion} ${
        isOpen && productDataStyle.open
      }`}
    >
      <div
        className={productDataStyle.accordionHeader}
        onClick={toggleAccordion}
      >
        {title}
        <span
          className={`${productDataStyle.arrow} ${
            isOpen && productDataStyle.open
          }`}
        >
          {isOpen ? (
            <div className={productDataStyle.dropdown}>
              <Image
                src={dropdownArrow.navbar.dropdown}
                objectFit={"contain"}
                layout={"fill"}
                alt="arrow"
                priority={true}
              ></Image>
            </div>
          ) : (
            <div className={productDataStyle.dropdownOpen}>
              <Image
                src={dropdownArrow.navbar.dropdown}
                objectFit={"contain"}
                layout={"fill"}
                alt="arrow"
                priority={true}
              ></Image>
            </div>
          )}
        </span>
      </div>
      {isOpen && (
        <div className={productDataStyle.accordionContent}>
          {items.map((data, index) => (
            <label
              style={{ marginRight: "8px" }}
              key={index}
              className={productDataStyle["checkbox-label"]}
            >
              <input type="checkbox" value={data} />
              {data}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
