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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi delectus iusto perferendis voluptate eius nesciunt exercitationem velit placeat eum consequatur, sit architecto similique illum fugit quisquam magnam? Facere sapiente beatae nemo sed a nihil possimus cum error explicabo numquam est deserunt velit, veritatis impedit. Atque error vel fuga eius iste?
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