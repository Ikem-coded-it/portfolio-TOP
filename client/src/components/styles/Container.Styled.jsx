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
  justify-content: flex-start;
  align-items: ${({ align }) => align || "flex-start"};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
`

export const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 400px;
  grid-gap: 30px;

  @media(max-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
  }
`