import { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import CommonSeoTags from "../components/CommonSeoTags";
import programData from "../json/program.json";
import style from "../styles/products.module.css";
import productDataStyle from "../styles/productData.module.css";
import displayProductStyle from "../styles/DisplayProduct.module.css";
import Image from "next/legacy/image";
import Accordion from "../components/accordion";

const Layout = dynamic(() => import("../components/layout"));

const Home = ({ productDisplayData }) => {
  const productData = programData.products;
  const productSidebar = programData.sidebar;

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Layout>
        <CommonSeoTags />
        <div className={style.container}>
          <div className={style.heading}>
            <h1>{productData.heading}</h1>
          </div>
          <div className={style.subheading}>
            <p>{productData.subheading}</p>
          </div>
          <hr className={style.hr}></hr>
          <div className={style.details}>
            <p onClick={toggleSidebar} className={style.mob}>
              FILTER
            </p>
            <p className={style.web}>3425 Items</p>
            <select className={style.customDropdown}>
              {productData &&
                productData.recommend.map((data, index) => (
                  <option key={index}>{data}</option>
                ))}
            </select>
          </div>
          <hr className={style.hr}></hr>

          {/* product part */}
          <div className={`${productDataStyle.container}`}>
            <div
              className={`${productDataStyle.sidebar} ${
                !isSidebarOpen && productDataStyle.collapsed
              }`}
            >
              <input
                type="checkbox"
                id="#"
                name="custom"
                value=""
              />
              <label htmlFor="vehicle1">Customizable</label>
              <hr className={style.hrList}></hr>

              <Accordion
                title={productSidebar.head1}
                items={productSidebar.category}
              />
              <hr className={style.hrList}></hr>
              <Accordion
                title={productSidebar.head1}
                items={productSidebar.category}
              />
            </div>

            <div className={productDataStyle["main-content"]}>
              <button
                className={productDataStyle["toggle-button"]}
                onClick={toggleSidebar}
                style={{ left: isSidebarOpen ? "0%" : "20%" }}
              >
                <div className={productDataStyle.filterText}>
                  <div
                    className={
                      isSidebarOpen
                        ? productDataStyle.dropdownFilter
                        : productDataStyle.dropdownFilterClose
                    }
                  >
                    <Image
                      src={programData.navbar.dropdown}
                      objectFit="contain"
                      layout="fill"
                      alt="arrow"
                      priority={true}
                    />
                  </div>
                  {isSidebarOpen ? "HIDE" : "SHOW"} FILTER
                </div>
              </button>

              {/* display data */}
              <div className={displayProductStyle.container}>
                <div className={displayProductStyle.cardGrid}>
                  {productDisplayData &&
                    productDisplayData.map((data, index) => (
                      <div key={index} className={displayProductStyle.card}>
                        <div className={displayProductStyle.productImage}>
                          <Image
                            src={optimizeImageUrl(data.image)}
                            alt={data.title}
                            objectFit="contain"
                            layout="fill"
                            priority={true}
                          />
                        </div>
                        <p className={displayProductStyle.description}>
                          {data.title}
                        </p>
                        <p
                          className={displayProductStyle.price}
                        >{`$${data.price}`}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const productDisplayData = response.data;

    return {
      props: {
        productDisplayData,
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error.message);

    return {
      props: {
        productDisplayData: [],
      },
    };
  }
}

// Helper function to optimize image URL
function optimizeImageUrl(originalImageUrl) {
  const resizedImageUrl = `${originalImageUrl}?w=WIDTH&h=HEIGHT`;
  return resizedImageUrl;
}
