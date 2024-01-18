import { FlexRow, FlexColumn } from "../styles/Container.Styled"
import { Image } from "../styles/Image.Styled"
import { Picture } from "../styles/Image.Styled"
import styled from "styled-components"
import myPic from "../../assets/images/IMG_20230305_080744_514~2.jpg"
import myPic2 from "../../assets/images/IMG_20230305_080744_514~3.jpg"
import myPic3 from "../../assets/images/IMG_20230305_080744_514~4.jpg"

const ContactsContainer = styled(FlexRow)`
  background-color: #4a044e;
  color: white;
  font-family: Roboto;

  & h1 {
    height: fit-content;
  }

  & p {
    width: 60%;
  }

  & .devicon-github-original {
    color: white;
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    & img {
      width: 350px;
    }
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
    <ContactsContainer
      justify="space-between"
      padding="50px 90px"
      >
      <FlexColumn gap="20px">
        <h1>Contact Me</h1>
        <p>
          Please get in touch if you think our work could be mutually beneficial!
        </p>
        <FlexColumn gap="10px">
          <EmailPhoneContainer
            height="40px"
            gap="15px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
            <h4>+234 81 2633 4933</h4>
          </EmailPhoneContainer>
          <EmailPhoneContainer
            height="40px"
            gap="15px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-arrow-right-outline</title><path d="M13 19C13 18.66 13.04 18.33 13.09 18H4V8L12 13L20 8V13.09C20.72 13.21 21.39 13.46 22 13.81V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19M20 6L12 11L4 6H20M20 22V20H16V18H20V16L23 19L20 22Z" /></svg>
            <h4>ikemworks@gmail.com</h4>
          </EmailPhoneContainer>
        </FlexColumn>
        <IconContainer 
          gap="20px"
          justify="flex-start">
          <a rel="noreferrer" target="_blank" href="https://github.com/ikem-coded-it">
            <i className="devicon-github-original"></i>
          </a>
          <a rel="noreferrer" target="_blank" href="https://twitter.com/IkemO06934594">
            <i className="devicon-twitter-original colored"></i>
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ikemefuna-onubogu-84914323a">
            <i className="devicon-linkedin-plain colored"></i>
          </a>
        </IconContainer>
      </FlexColumn>
      <Picture >
        <source media="(min-width: 950px)" srcSet={myPic} />
        <source media="(min-width: 500px)" srcSet={myPic2} />
        <Image src={myPic3} alt="Ikem" width="600px" height="auto" loading="lazy"  />
      </Picture>
    </ContactsContainer>
  )
}