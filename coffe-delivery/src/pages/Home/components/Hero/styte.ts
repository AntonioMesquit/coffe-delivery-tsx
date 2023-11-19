import styled from 'styled-components'
import background from '../../../../assets/background-home.png'

export const CoffeInfos = styled.section`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 700px;
  padding-bottom: 150px;
  padding-inline: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 50px;
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
      gap: 50px;

      > .sectionLeft {
        display: flex;
        flex-direction: column;
        gap: 20px;

        > .item1 {
          display: flex;
          gap: 10px;
          align-items: center;

          > img {
            background-color: ${({ theme }) => theme['yellow-dark']};
            padding: 8px;
            border-radius: 50%;
          }
        }
        > .item2 {
          display: flex;
          gap: 10px;
          align-items: center;

          > img {
            background-color: ${({ theme }) => theme.yellow};
            padding: 8px;
            border-radius: 50%;
          }
        }
      }
      > .sectionRight {
        display: flex;
        flex-direction: column;
        gap: 20px;
        > .item3 {
          display: flex;
          gap: 10px;
          align-items: center;

          > img {
            background-color: ${({ theme }) => theme['yellow-dark']};
            padding: 8px;
            border-radius: 50%;
          }
        }
        > .item4 {
          display: flex;
          gap: 10px;
          align-items: center;

          > img {
            background-color: ${({ theme }) => theme.yellow};
            padding: 8px;
            border-radius: 50%;
          }
        }
      }
    }
  }
`
