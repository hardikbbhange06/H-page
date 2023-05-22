import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <footer className="footer     ">
      <div className="foo">
        <div className="roww pt-5 pb-5">
          <div className="com-md-3">
            <img
              className="iiii"
              src="https://www.burlycare.com/static/media/logo.4d9ce206.svg"
              alt=""
            />
            <p>
              Get full medical assistance and consultation for <br />
              diseases Hassle-free experience throughout your <br />
              treatment
            </p>
          </div>
          <div className="com-md-3">
            <h5>Quick Link</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Our Treatments
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Our Doctors
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Teams & Conditions
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="com-md-3">
            <h5>Our Procedures</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Lase Piles
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Phimosis
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Gynaecomastia
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Gallstone
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Online Consultation
                </a>
              </li>
            </ul>
          </div>
          <div className="com-md-3">
            <h5>Follow Us</h5>
            <div>
              <InstagramIcon />
              &nbsp;&nbsp;
              <LinkedInIcon />
              &nbsp;&nbsp;
              <TwitterIcon />
              &nbsp;&nbsp;
              <YouTubeIcon />
              &nbsp;&nbsp;
              <FacebookIcon />
            </div>
            <br />
            <div>
              <CallIcon />
              &nbsp;&nbsp;1800 &nbsp;102&nbsp;6601
            </div>
            <div>
              <EmailIcon />
              &nbsp;&nbsp; support@burlycare.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
