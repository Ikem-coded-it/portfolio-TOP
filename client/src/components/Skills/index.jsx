import { FlexColumn, Grid, FlexRow } from "../styles/Container.Styled";
import { Section } from "../styles/ProjectsSection.Styled";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Context } from "../../ContextProvider/context";
import { useContext } from "react";
import { SkillsLoader } from "../Loader";

const SkillContainer = styled(FlexRow)`
  background-color: #f1f5f9;
  height: fit-content;
  padding: 5px 10px;
  border-radius: 20px;
  color: ${({theme}) => theme.colors.darkFont};

  & svg {
    height: 30px;
    width: 30px;
  }

  & i {
    font-size: 30px;
  }

  & div {
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 600;
  }
`

const SkillsGrid = styled(FlexRow)`
  position: relative;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  @media (max-width: 680px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export default function Skills() {
  const context = useContext(Context)
  return (
    <Section>
      <div className="title-description-container">
        <h2>My Skills</h2>
        <p>
          Technologies I have worked with throughout my years of experience in building software.
        </p>
      </div>
      <SkillsGrid
        columns="100px"
        rows="100px">
        {
          context.skills.length === 0 ? (
            <SkillsLoader />
          )
          :
          context.skills.map(skill => {
            return <Skill 
              key={skill.id}
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