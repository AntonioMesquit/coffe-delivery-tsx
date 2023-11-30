import styled from 'styled-components'

export const Container = styled.main`
  height: calc(100vh - 120px);
  width: 100%;
  padding-inline: 200px;

  > .show {
    display: flex;
    gap: 100px;

    > .coffes {
      display: flex;
      flex-direction: column;
      gap: 0;
      margin-top: 20px;
      background-color: ${({ theme }) => theme['brown-200']};
      height: max-content;
      > .notCaffe {
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        > p {
          font-family: 'Baloo 2', sans-serif;
          font-size: 24px;
          margin-top: 30px;
        }

        > img {
          width: 180px;
          margin-top: 30px;
          margin-bottom: 30px;
        }
        > button {
          margin-bottom: 30px;
          background-color: ${({ theme }) => theme.yellow};
          border: none;
          color: white;
          padding: 14px 18px;
          border-radius: 8px;
          font-weight: 500;
        }
      }

      > .tlt {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-inline: 40px;
        margin-bottom: 15px;
        > p:nth-child(1) {
          color: ${({ theme }) => theme['brown-700']};
          text-align: right;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
        }
        > p:nth-child(2) {
          color: ${({ theme }) => theme['brown-700']};
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
        }
      }
      > button {
        margin-inline: 40px;
        padding: 12px 12px;
        font-size: 14px;
        color: white;
        background-color: ${({ theme }) => theme.yellow};
        border: none;
        border-radius: 6px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        text-transform: uppercase;
        margin-bottom: 30px;
      }
    }
  }
`
export const Separator = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  > h1 {
    font-family: 'Baloo 2', 'sans-serif';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
  > h1:nth-child(2) {
    padding-right: 600px;
  }
`
