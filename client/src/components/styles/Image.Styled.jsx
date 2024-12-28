import styled from "styled-components";


export const Image = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 20px;
  object-position: center;

  // @media(max-width: ${({ theme }) => theme.mobile}) {
  //   height: 50%;
  // }
`

export const Picture = styled.picture`
  height: ${props => props.height};
  width: ${props => props.width};

  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
  }
`