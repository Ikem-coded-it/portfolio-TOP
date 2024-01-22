/* eslint-disable react/no-unescaped-entities */
import ResumeDownloadButton from "../ResumeDownlaod";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="background"></div>
      <div className="pic-about-container">
        <div className="profile-pic">
          <h2 className="my-name">Ikemefuna Onubogu</h2>
        </div>
        <div className="about">
          <h1>About Me</h1>
          <ResumeDownloadButton />
          <p>
            Yo what's up!, I'm a software engineer that loves to code in javascript. Having skills in both frontend and backend web development, my true passiom lies in developing full stack web applications that makes life easier for its users.
          </p>
          <div className="link-icons-container">
            <a rel="noreferrer" target="_blank" href="https://github.com/ikem-coded-it">
              <i className="devicon-github-original"></i>
            </a>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/IkemO06934594">
              <i className="devicon-twitter-original colored"></i>
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ikemefuna-onubogu-84914323a">
              <i className="devicon-linkedin-plain colored"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}