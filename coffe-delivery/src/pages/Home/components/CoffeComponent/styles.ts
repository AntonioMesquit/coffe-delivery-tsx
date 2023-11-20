import styled from 'styled-components'

export const CoffeContainer = styled.div`
  background-color: ${({ theme }) => theme['brown-200']};
  width: 260px;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  padding-inline: 20px;

  > img {
    width: 120px;
    margin-top: -40px;
  }
  > .show {
    display: flex;
    margin-block: 15px;

    > span {
      background-color: ${({ theme }) => theme['yellow-light']};
      color: ${({ theme }) => theme['yellow-dark']};
      padding: 4px 8px;
      font-weight: 600;
      font-size: 11px;
      margin-right: 10px;
      border-radius: 10px;
    }
  }
  > p:nth-child(3) {
    font-family: 'Baloo 2', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${({ theme }) => theme['brown-800']};
  }
  > p:nth-child(4) {
    text-align: center;
    margin-top: 8px;
    margin-bottom: 30px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${({ theme }) => theme['brown-600']};
  }
  > .alinhar {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
    align-items: center;
    > button {
      border: none;
      margin-left: 10px;
      background-color: ${({ theme }) => theme['purple-dark']};
      border-radius: 8px;

      > img {
        width: 45px;
        padding: 10px;
        border-radius: 8px;
      }
    }
    > p {
      color: ${({ theme }) => theme['brown-700']};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      margin-right: 20px;

      > span {
        font-size: 24px;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
      }
    }
    > .inputs {
      display: flex;
      background-color: ${({ theme }) => theme['brown-400']};
      padding: 12px;
      gap: 4px;
      font-size: 20px;
      align-items: center;
      justify-content: center;

      > button {
        border: none;
        background-color: transparent;

        &:active {
          outline: none;
          border: none;
        }
      }
    }
  }
`
