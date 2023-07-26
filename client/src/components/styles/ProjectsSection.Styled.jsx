import styled from "styled-components";

export const ProjectsSection = styled.section`
  min-height: 500px;
  max-height: fit-content;
  box-sizing: border-box;
  padding: 70px 90px;
  font-family: "Playfair Display";
  overflow-x: hidden;

  & h2 {
    font-family: "Playfair display";
    font-size: 30px;
  }

  & h3 {
    font-family: Roboto;
  }

  & a {
    cursor: pointer;
  }

  & svg {
    height: 30px;
    width: 30px;
  }

  & i {
    font-size: 30px;
  }

  & p {
    font-size: 13px;
    font-family: Roboto;
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 70px;
    padding: 40px 20px;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    padding: 40px 20px;

    & h2 {
      text-align: center;
    }
  }
`

export const Image = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
`