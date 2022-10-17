import React from "react";
import facebook from "../images/facebook_icon.svg";
import instagram from "../images/instagram_icon.svg";
import twitter from "../images/twitter_icon.svg";
import linkedin from "../images/linkedin_icon.svg";

import "../styles/general.css";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex" style={{ gap: "40px", marginBottom: "30px" }}>
        <a href="#">CONTACT</a>
        <a href="#">TERMS OF SERVICES</a>
        <a href="#">SHIPPING AND RETURNS</a>
      </div>
      <div className="flex" style={{ gap: "10px" }}>
        <p className="m-right-auto">
          &copy; 2022 Raczkiewicz. Terms of use and privacy policy.
        </p>
        <img src={linkedin} alt="linkedin" className="icon" />
        <img src={facebook} alt="facebook" className="icon" />
        <img src={instagram} alt="instagram" className="icon" />
        <img src={twitter} alt="twitter" className="icon" />
      </div>
    </div>
  );
};

export default Footer;
