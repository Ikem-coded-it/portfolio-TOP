import styled from "styled-components";
import { FlexColumn } from "./Container.Styled";

export const Section = styled.section`
  // min-height: 200px;
  height: fit-content;
  // max-height: fit-content;
  box-sizing: border-box;
  padding: 70px 90px;
  font-family: "Playfair Display";
  overflow-x: hidden;
  overflow-y: visible;
  background-color: ${({theme}) => theme.colors.darkBg };

  & h2 {
    font-family: "Playfair display";
    font-size: 30px;
  }

  & h3 {
    font-family: Roboto;
    font-size: 25px;
    font-weight: 700;
  }

  & a {
    cursor: pointer;
  }

  & svg {
    height: 30px;
    width: 30px;
    fill: white;
  }

  & i {
    font-size: 30px;
    color: white;
  }

  & p {
    font-size: 18px;
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

    & h3 {
      font-size: 20px;
    }

    & p {
      font-size: 15px;
    }
  }
`

export const ProjectContainer = styled(FlexColumn)`
  box-shadow: 1px 1px 20px #a21caf;
  transition: transform .3s ease-in-out;
  transform: scaleX(0);

  &:hover {
    transform: scale(0.98);
  }
`