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
  position: fixed;
  top: 50vh;
  left: 50vw;

  & div {
    width: 40px;
    height: 40px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #383636;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`

export default LoaderContainer;