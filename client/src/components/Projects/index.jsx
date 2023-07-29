import { Section, ProjectContainer } from "../styles/ProjectsSection.Styled";
import { Image } from "../styles/Image.Styled";
import {
  FlexRow,
  FlexColumn, 
  Grid 
} from "../styles/Container.Styled";
import { Context } from "../../ContextProvider/context";
import { useContext } from "react";
import PropTypes from "prop-types";
import LoaderSpinner from "../Loader";

export default function ProjectsContainer() {
  const context = useContext(Context);
  return (
    <Section>
      <h2>My Work</h2>
      <Grid 
        width="100%" 
        height="fit-content"
        columns="300px"
        rows="400px">
        {
          context.projects.length == 0 || context.projects.length == [] ?
          <LoaderSpinner />
          :
          context.projects.map(project => {
            return <Project 
              key={project._id}
              title={project.title}
              description={project.description}
              liveURL={project.liveURL}
              codeURL={project.codeURL}
              screenshotURL={project.screenshotURL}
            />
          })
        }
      </Grid>
    </Section>
  )
}

export function Project({ title, description, liveURL, codeURL, screenshotURL}) {
  return (
    <ProjectContainer>
      <Image height="60%" width="100%" src={screenshotURL}/>
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
              <i className="devicon-github-original colored"></i>
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