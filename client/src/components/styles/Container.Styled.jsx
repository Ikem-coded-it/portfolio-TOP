import styled from "styled-components"

export const Container = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  box-sizing: border-box;
`

export const FlexRow = styled(Container)`
  display: flex;
  gap: ${({ gap }) => gap};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  padding: ${({ padding }) => padding};
`

export const FlexColumn = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
`

export const Grid = styled(Container)`
  min-height: 100px;
  min-width: 100%;
  max-width: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${({columns}) => columns}, 1fr));
  grid-auto-rows: ${({rows}) => rows};
  grid-gap: 30px;

  @media(max-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
  }
`