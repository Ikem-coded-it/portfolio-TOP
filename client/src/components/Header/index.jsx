/* eslint-disable react/no-unescaped-entities */
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
          <p>
            I am a passionate software developer with a love for crafting innovative projects using JavaScript. Embracing a constant quest for knowledge and growth, I find joy in exploring new concepts. Beyond coding, I indulge in reading captivating books, enjoying anime, and diving into YouTube's fascinating content in my leisure time.
          </p>
          <div className="link-icons-container">
            <a rel="noreferrer" target="_blank" href="https://github.com/ikem-coded-it">
              <i className="devicon-github-original colored"></i>
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