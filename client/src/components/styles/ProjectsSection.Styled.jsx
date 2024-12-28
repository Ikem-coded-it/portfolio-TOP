import styled from "styled-components";
import { FlexColumn } from "./Container.Styled";

export const Section = styled.section`
  height: fit-content;
  box-sizing: border-box;
  padding: 70px 90px;
  font-family: "Poppins";
  overflow-x: hidden;
  overflow-y: visible;
  background-color: ${({theme, bg}) => bg || theme.colors.darkBg };
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & .title-description-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    & p {
      text-align: center;
    }
  }

  & h2 {
    font-family: "Poppins";
    font-size: 30px;
    line-height: 0;
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
  box-shadow: 1px 1px 20px var(--theme-color);
  transition: transform .3s ease-in-out;
  transform: scaleX(0);
  border-radius: 20px;

  &:hover {
    transform: scale(0.98);
  }
`