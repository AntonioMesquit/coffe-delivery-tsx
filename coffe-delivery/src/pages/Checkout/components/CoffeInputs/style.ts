import styled from 'styled-components'

export const Container = styled.main`
  width: 650px;
  overflow-y: auto;
`
export const InputOne = styled.div`
  width: 630px;
  padding: 30px;
  background-color: ${({ theme }) => theme['brown-200']};
  border-radius: 8px;
  margin-top: 20px;

  > .top-header {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    > .hd {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
  }
`
export const InputsArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input {
    padding: 12px;
    border: 1px solid #e6e5e5;
    background-color: ${({ theme }) => theme['brown-300']};
    margin-bottom: 10px;
    margin-right: 10px;
  }
  > input:nth-child(1) {
    width: 40%;
  }
  > .alinhar {
    display: flex;
    > input:nth-child(2) {
      flex: 1;
    }
  }
  > .alinhar2 {
    display: flex;

    > input:nth-child(1) {
      width: 40%;
    }
    > input:nth-child(2) {
      width: 50%;
    }
    > input:nth-child(3) {
      width: 12%;
    }
  }
`

export const ChoseArea = styled.div`
  width: 630px;
  padding: 30px;
  background-color: ${({ theme }) => theme['brown-200']};
  border-radius: 8px;
  margin-top: 20px;

  > .top-header {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    > .hd {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
  }
  > .mark-itens {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 20px;

    > .cc {
      cursor: pointer;
      display: flex;
      gap: 12px;
      background-color: #e6e5e5;
      padding: 16px;
      height: 50px;

      > p {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;

        text-transform: uppercase;
      }
      &.selected {
        border: 1px solid purple;
      }
    }
  }
`
