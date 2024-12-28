import { Section, ProjectContainer } from "../styles/ProjectsSection.Styled";
import { Image } from "../styles/Image.Styled";
import {
  FlexRow,
  FlexColumn, 
  Grid 
} from "../styles/Container.Styled";
import { Context } from "../../ContextProvider/context";
import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import LoaderSpinner from "../Loader";
import { Button } from "../styles/Button.Styled";
import "./styles.css"

export default function ProjectsContainer() {
  const {projects} = useContext(Context);
  const [showAll, setShowAll] = useState(false)

  const projectsShown = showAll ? projects : projects?.slice(0, 2)
  return (
    <Section>
      <div className="title-description-container">
        <h2>Projects/Experience</h2>
        <p>
          Various projects I have built alone or contributed to using my skill set mentioned.
        </p>
      </div>
      <Grid 
        width="100%"
        columns="400px"
        rows="500px"
        mRows="400px"
        rowGap="100px">
        {
          projects.length === 0 ? (
            <LoaderSpinner />
          )
          :
          projectsShown.map(project => {
            return <Project 
              key={project.id}
              title={project.title}
              description={project.description}
              liveURL={project.liveURL}
              codeURL={project.codeURL}
              screenshotURL={project.screenshotURL}
            />
          })
        }
      </Grid>

      {
        showAll == false && (
          <div className="margin">
            <Button onClick={() => setShowAll(prev => !prev)}>
              View All
            </Button>
          </div>
        )
      }

    </Section>
  )
}

export function Project({ title, description, liveURL, codeURL, screenshotURL}) {
  
  useEffect(() => {
    // open project animation
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal')

      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 200;

        if(revealTop < windowHeight - revealPoint)
          reveal.classList.add('active')
        else
          reveal.classList.remove('active')
        
      })
    }

    window.addEventListener('scroll', () => revealOnScroll());

    return window.removeEventListener('scroll', revealOnScroll)
  }, [])

  return (
    <ProjectContainer className="reveal">
      <Image 
      height="60%" 
      width="100%" 
      src={screenshotURL} 
      loading="lazy"
      />
      <FlexColumn height="40%" width="100%" padding="15px">
        <FlexRow 
          justify="space-between"
          width="100%" 
          height="40px">
          <h3>{title}</h3>
          <FlexRow 
            justify="space-between"
            gap="20px">
            <a target="_blank"rel="noreferrer" href={codeURL}>
              <i className="devicon-github-original"></i>
            </a>
            <a target="_blank" href={liveURL} rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>
            </a>
          </FlexRow>
        </FlexRow>
        <p>
          {description}
        </p>
      </FlexColumn>
    </ProjectContainer>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  liveURL: PropTypes.string,
  codeURL: PropTypes.string,
  screenshotURL: PropTypes.string,
};