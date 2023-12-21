import { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import CommonSeoTags from "../components/CommonSeoTags";
import programData from "../json/program.json";
import style from "../styles/products.module.css";
import productDataStyle from "../styles/productData.module.css";
import displayProductStyle from "../styles/DisplayProduct.module.css";
import Image from "next/legacy/image";

const Layout = dynamic(() => import("../components/layout"));

const Home = ({ productDisplayData }) => {
  const productData = programData.products;
  const productSidebar = programData.sidebar;

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
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

          {/* product part */}
          <div className={`${productDataStyle.container}`}>
            <div
              className={`${productDataStyle.sidebar} ${
                !isSidebarOpen && productDataStyle.collapsed
              }`}
            >
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label htmlFor="vehicle1">Customizable</label>
              <hr
                style={{
                  height: "1px",
                  color: "gray",
                  background: "gray",
                  width: "100%",
                }}
              ></hr>

              <div
                className={`${productDataStyle.dropdown} ${
                  isDropdownOpen && productDataStyle.open
                }`}
              >
                <span onClick={toggleDropdown}>
                  {productSidebar.head1}
                  <span
                    className={`${productDataStyle.arrow} ${
                      isDropdownOpen ? productDataStyle.open : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </span>
                <div className={productDataStyle["dropdown-content"]}>
                  <p className={productDataStyle["checkbox-label"]}>ALL</p>
                  {productSidebar.category.map((data, index) => (
                    <label
                      key={index}
                      className={productDataStyle["checkbox-label"]}
                    >
                      <input type="checkbox" value="Women's" />
                      {data}
                    </label>
                  ))}
                  {/* Add more categories as needed */}
                </div>
              </div>
            </div>

            <div className={productDataStyle["main-content"]}>
              <button
                className={productDataStyle["toggle-button"]}
                onClick={toggleSidebar}
              >
                {isSidebarOpen ? "HIDE FILTER" : "SHOW FILTER"}
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
