import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  width: 130px;
  background-color: ${({bg}) => bg || "var(--theme-color)"};
  transition: all .4s ease;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 10px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`