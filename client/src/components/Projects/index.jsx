import { ProjectsSection, ProjectContainer } from "../styles/ProjectsSection.Styled";
import { Image } from "../styles/Image.Styled";
import {
  FlexRow,
  FlexColumn, 
  Grid 
} from "../styles/Container.Styled";

export default function ProjectsContainer() {
  return (
    <ProjectsSection>
      <h2>My Work</h2>
      <Grid width="100%" height="fit-content">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </Grid>
    </ProjectsSection>
  )
}

export function Project() {
  return (
    <ProjectContainer>
      <Image height="60%" width="100%" />
      <FlexColumn height="40%" width="100%" padding="15px">
        <FlexRow 
          justify="space-between"
          width="100%" 
          height="40px">
          <h3>Project</h3>
          <FlexRow 
            justify="space-between"
            gap="20px">
            <a target="_blank">
              <i className="devicon-github-original colored"></i>
            </a>
            <a target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>
            </a>
          </FlexRow>
        </FlexRow>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sint perspiciatis eveniet recusandae assumenda. Harum consequuntur.
        </p>
      </FlexColumn>
    </ProjectContainer>
  )
}