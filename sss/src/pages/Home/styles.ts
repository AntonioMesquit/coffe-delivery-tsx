import styled from 'styled-components'
import background from '../../assets/background-home.png'
export const Container = styled.main`
  height: calc(100vh - 120px);
  width: 100%;
`
export const CoffeInfos = styled.section`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 600px;
  padding-inline: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  > .left {
    max-width: 600px;

    > h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 40px;
      line-height: 100%;
      margin-bottom: 20px;
      font-weight: 800;
    }
    > p {
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      margin-bottom: 30px;
    }
    > .card-icons {
      display: flex;
      gap: 30px;

      > .sectionLeft,
      .sectionRight {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }
      .sectionLeft {
        img{
          width: 20px;
        }
      }
    }
  }
`
