import style from "../styles/footer.module.css";
import programData from "../json/program.json";
import Image from "next/legacy/image";

const Footer = () => {
  const footerData = programData.footer;
  return (
    <>
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style.footerGrid}>
            <div className={style.contactGrid}>
              <div className={style.contactDetails}>
                <h3 className={style.contactHeading}>{footerData.heading}</h3>
                <p className={style.contactsubheading}>
                  {footerData.subheading}
                </p>

                <div className={style.subscribe}>
                  <input
                    type="text"
                    placeholder="Enter your e-mail..."
                    className={style.subscribeinpout}
                  ></input>
                  <button className={style.subscribebutton}>
                    <p>{footerData.button}</p>
                  </button>
                </div>
                <hr
                  className={style.mobile}
                  style={{
                    height: "1px",
                    color: "white",
                    background: "white",
                    width: "100%",
                    margin: "24px 0px",
                  }}
                ></hr>
              </div>

              <div className={style.contactusgrid}>
                <h4 className={style.contactus}></h4>
                {footerData.contactuslist.map((data, index) => (
                  <p className={style.phone} key={index}>
                    {data.data}
                  </p>
                ))}
                <hr
                  className={style.mobile}
                  style={{
                    height: "1px",
                    color: "white",
                    background: "white",
                    width: "100%",
                    marginTop: "24px 0px 8px 0px",
                  }}
                ></hr>
                <h4 className={style.currency}>{footerData.currency}</h4>
                <div className={style.currencyGrid}>
                  <div className={style.currencyIcon}>
                    <Image
                      src={footerData.icon}
                      alt={footerData.altcountry}
                      objectFit={"contain"}
                      layout={"fill"}
                    ></Image>
                  </div>
                  <p className={style.country}>{footerData.country}</p>
                </div>
                <hr
                  className={style.mobile}
                  style={{
                    height: "1px",
                    color: "white",
                    background: "white",
                    width: "100%",
                    margin: "24px 0px",
                  }}
                ></hr>

                <p className={style.tag}>{footerData.tag}</p>
              </div>
            </div>

            <hr
              style={{
                height: "1px",
                color: "white",
                background: "white",
                width: "100%",
              }}
            ></hr>

            <div className={style.follow}>
              <div className={style.followGrid}>
                <div className={style.mattagrid}>
                  <h6 className={style.meta}>{footerData.meta}</h6>
                  {footerData.metadata.map((data, index) => (
                    <p className={style.metalist} key={index}>
                      {data}
                    </p>
                  ))}
                </div>

                <hr
                  className={style.mobile}
                  style={{
                    height: "1px",
                    color: "white",
                    background: "white",
                    width: "100%",
                    margin: "24px 0px",
                  }}
                ></hr>

                <div className={style.mattagrid}>
                  <h6 className={style.meta}>{footerData.quicklink}</h6>
                  {footerData.quicklinkdata.map((data, index) => (
                    <p className={style.metalist} key={index}>
                      {data}
                    </p>
                  ))}
                </div>

                <hr
                  className={style.mobile}
                  style={{
                    height: "1px",
                    color: "white",
                    background: "white",
                    width: "100%",
                    margin: "24px 0px",
                  }}
                ></hr>

                <div className={style.followus}>
                  <h6 className={style.follow}>{footerData.follow}</h6>
                  <div className={style.socialmedia}>
                    {footerData.followlogos.map((data, index) => (
                      <div key={index} className={style.socialmediaicon}>
                        <Image
                          src={data.data}
                          alt={data.alt}
                          objectFit={"contain"}
                          layout={"fill"}
                        ></Image>
                      </div>
                    ))}
                  </div>
                  <hr
                    className={style.mobile}
                    style={{
                      height: "1px",
                      color: "white",
                      background: "white",
                      width: "100%",
                      margin: "24px 0px",
                    }}
                  ></hr>
                  <p className={style.payment}>
                    {footerData.payment}
                    <span className={style.accept}>{footerData.accept}</span>
                  </p>
                  <div className={style.paymentlogos}>
                    {footerData.paymentlogos.map((data, index) => (
                      <div key={index} className={style.paymentlogosdata}>
                        <Image
                          src={data.data}
                          alt={data.alt}
                          objectFit={"contain"}
                          layout={"fill"}
                        ></Image>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={style.copyright}>
              <p>{footerData.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
