import { FlexColumn, Grid } from "../styles/Container.Styled";
import { Section } from "../styles/ProjectsSection.Styled";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Context } from "../../ContextProvider/context";
import { useContext } from "react";
import { SkillsLoader } from "../Loader";

const SkillContainer = styled(FlexColumn)`
  background-color: #f1f5f9;
  border-radius: 5px;

  & svg {
    height: 50px;
    width: 50px;
  }

  & i {
    font-size: 50px;
  }

  & div {
    font-family: Roboto;
    font-size: 12px;
  }
`

const SkillsGrid = styled(Grid)`
  position: relative;

 @media(max-width: ${({theme}) => theme.tablet}) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default function Skills() {
  const context = useContext(Context)
  return (
    <Section>
      <h2>My Skills</h2>
      <SkillsGrid
        columns="100px"
        rows="100px">
        {
          context.skills.length === 0 ?
          <SkillsLoader />
          :
          context.skills.map(skill => {
            return <Skill 
              key={skill._id}
              name={skill.name}
              iconClassName={skill.iconClassName}
            />
          })
        }
      </SkillsGrid>
    </Section>
  )
}

export function Skill({ iconClassName, name }) {
  return (
    <SkillContainer 
      gap="10px"
      justify="center"
      align="center"
    >
      <i className={iconClassName}></i>
      <div>{name}</div>
    </SkillContainer>
  )
}

Skill.propTypes = {
  iconClassName: PropTypes.string,
  name: PropTypes.string,
}