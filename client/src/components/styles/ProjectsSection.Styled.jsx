import styled from "styled-components";
import { FlexColumn } from "./Container.Styled";

export const Section = styled.section`
  min-height: 200px;
  max-height: fit-content;
  box-sizing: border-box;
  padding: 70px 90px;
  font-family: "Playfair Display";
  overflow-x: hidden;
  background-color: ${({theme}) => theme.colors.lightBg };

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

export const ProjectContainer = styled(FlexColumn)`
  box-shadow: 1px 1px 10px #64748b;
  transition: transform .3s ease;

  &:hover {
    transform: scale(0.98);
  }
`