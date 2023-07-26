import styled from "styled-components";


export const Image = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
`

export const Picture = styled.picture`
  height: ${props => props.height};
  width: ${props => props.width};

  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
  }
`