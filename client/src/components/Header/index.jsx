/* eslint-disable react/no-unescaped-entities */
import ResumeDownloadButton from "../ResumeDownlaod";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import SocialIcons from "../SocialIcons";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <ResumeDownloadButton/>
      <div className="heading-and-description-container">
        <h1 className="poppins-extrabold heading">
          Ikem <span className="highlight">Coded</span>-It
        </h1>
        <h1 className="poppins-medium sub-heading">
          Fullstack Software Developer
        </h1>

        <p className="poppins-regular description">
        Turning ideas into functional and impactful web and mobile applications
        </p>

        <SocialIcons/>
      </div>

      <img
      src="/images/IMG_20230305_080744_514~2.jpg"
      className="profile-pic"
      alt="Ikemefuna"
      />
    </header>
  )
}