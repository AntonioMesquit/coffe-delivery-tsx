import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 448px;
  height: 140px;
  padding: 40px;
  align-items: flex-start;
  gap: 24px;
  background-color: ${({ theme }) => theme['brown-200']};

  > .n {
    display: flex;
    gap: 20px;
    width: 100%;
    > img {
      width: 64px;
      height: 64px;
    }
    > .alinhar {
      display: flex;
      flex-direction: column;
      padding-bottom: 30px;
      > .top {
        display: flex;
        align-items: center;
        justify-content: center;
        > button {
          text-transform: uppercase;
          background-color: ${({ theme }) => theme['brown-400']};
          display: flex;
          gap: 5px;
          margin-left: 10px;
          padding: 6px 10px;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          text-transform: uppercase;
        }
        > .inputs {
          margin-top: 5px;
          display: flex;
          background-color: ${({ theme }) => theme['brown-400']};
          padding: 8px;
          width: 64px;
          gap: 6px;
          border-radius: 6px;
          > button {
            background-color: ${({ theme }) => theme['brown-400']};
            border: none;
          }
        }
      }
    }
  }
`
