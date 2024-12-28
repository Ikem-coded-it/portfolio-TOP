import { FlexRow, FlexColumn } from "../styles/Container.Styled"
import styled from "styled-components"
import { FaEnvelope } from "react-icons/fa6";
import SocialIcons from "../SocialIcons";
import { Section } from "../styles/ProjectsSection.Styled";

const ContactsContainer = styled(FlexRow)`
  background-color: #4a044e;
  color: white;
  font-family: "Poppins";

  & h1 {
    height: fit-content;
  }

  & p {
    width: 60%;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 50px 20px;
    gap: 20px;

    & h1 {
      width: 100%;
      text-align: center;
    }

    & p {
      width: 100%;
      font-size: 22px;
    }

    & img {
      width: 300px;
    }
  }
`

const EmailPhoneContainer = styled(FlexRow)`
  & svg {
    height: 30px;
    width: 30px;
    fill: white;
  }
`

const IconContainer = styled(FlexRow)`
  & i {
    color: black;
    font-size: 30px;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    width: 100%;
  }
`

export default function Contacts () {
  return (
    <ContactsContainer>
      <Section bg="#4a044e">
        <div className="title-description-container">
          <h2>Reach Out To Me</h2>
          <p>
          Let’s build something amazing together—get in touch today!
          </p>
        </div>

        <FlexColumn gap="10px">
            <EmailPhoneContainer
              height="40px"
              gap="15px">
              <FaEnvelope size="24px"/>
              <h4>ikemworks@gmail.com</h4>
            </EmailPhoneContainer>
          <SocialIcons/>
        </FlexColumn>
      </Section>
    </ContactsContainer>
  )
}