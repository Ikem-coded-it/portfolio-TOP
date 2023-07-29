import styled from "styled-components";

const LoaderContainer = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  min-height: fit-content;
  min-width: fit-content;
  margin: 0 auto;

  & div {
    width: 40px;
    height: 40px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid ${({theme}) => theme.colors.blueBg};
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`

export const SkillsLoaderContainer = styled(LoaderContainer)`
  position: absolute;
  left: 160px;

  @media(max-width: ${({ theme }) => theme.tablet}) {
    left: 140px;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    left: 130px;
  }
`

export default LoaderContainer;