import styled from 'styled-components'
export const Container = styled.main`
  height: calc(100vh - 120px);
  width: 100%;

  > h1 {
    font-family: 'Baloo 2', sans-serif;
    margin-left: 250px;
    margin-bottom: 80px;
  }
`
export const CoffeList = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-inline: 250px;
`
