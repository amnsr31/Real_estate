import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsChatDotsFill, BsFillChatDotsFill } from "react-icons/bs";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="c-left">
          <span className="primaryText">
            <br />
            Contact us
          </span>
          <span className="secondaryText">
            <br />
            We are always ready to help by providing the best services. <br />
            We believe a good place to live can make your life better.
          </span>
          <div className="flexColStart contactModes">
            {/* first and second modes */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+91 1234567890</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsChatDotsFill size={25} />
                  </div>
                  {/* Add missing closing tag here */}
                </div>
              </div>

              {/* third and fourth modes */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                  </div>
                </div>

                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <HiOutlineChatAlt2 size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Message</span>
                      <span className="secondaryText">+91 1234567890</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Message Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
