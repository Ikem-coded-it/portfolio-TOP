import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  width: 150px;
  background-color: ${({bg}) => bg || "var(--bg-color)"};
  transition: transform .4s ease;
  border: none;
  color: white;
  font-size: 18px;
  border-radius: 10px;

  &:hover {
    transform: scale(1.04);
  }
`