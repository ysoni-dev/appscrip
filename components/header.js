import React, { useState } from "react";
import style from "../styles/header.module.css";
import Image from "next/legacy/image";
import programData from "../json/program.json";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.headergrid}>
          <div className={style.logos}>
            <div className={style.burgerIcon} onClick={toggleSidebar}>
              <Image
                src={programData.navbar.burgermenu}
                objectFit="contain"
                layout="fill"
                priority={true}
                alt={programData.navbar.altlogo}
              ></Image>
            </div>
            <div className={style.headerlogo}>
              <Image
                src={programData.navbar.logo}
                objectFit="contain"
                layout="fill"
                priority={true}
                alt={programData.navbar.altlogo}
              ></Image>
            </div>
          </div>

          <div>
            <h1 className={style.headerBrand}>{programData.navbar.brand}</h1>
          </div>
          <div className={style.headerIconsGrid}>
            {programData.navbar.icons.map((data, index) => (
              <div key={index} className={style.headerIcons}>
                <Image
                  src={data.data}
                  objectFit="contain"
                  layout="fill"
                  alt={data.alt}
                  priority={true}
                />
              </div>
            ))}
            <div className={style.mob}>
              <div className={style.language}>
                <p className={style.lang}>{programData.navbar.lan}</p>
                <div className={style.dropdown}>
                  <Image
                    src={programData.navbar.dropdown}
                    objectFit={"contain"}
                    layout={"fill"}
                    alt="arrow"
                    priority={true}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* menu-itemd */}
        <div>
          {/* Burger icon for mobile */}

          {/* Sidebar or regular grid based on screen size */}
          <div
            className={`${style.menuContainer} ${
              isSidebarOpen ? style.menuOpen : ""
            }`}
          >
            <div className={style.menuItemGrid}>
              {programData.navbar.menuItems.map((data, index) => (
                <h3 key={index}>{data.data}</h3>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          height: "0px",
          color: "#F1F1F1",
          background: "#F1F1F1",
          width: "100%",
          margin: "0px 0px 0px 0px",
        }}
      ></hr>
    </>
  );
};

export default Header;
