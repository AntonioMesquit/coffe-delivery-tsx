import styled from 'styled-components'

export const Container = styled.header`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 4px 2px #e8e7e6;

  > .right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    > a:nth-child(1) {
      background-color: ${({ theme }) => theme['purple-light']};
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 12px 15px;
      border-radius: 6px;
      font-weight: 400;
    }

    > a:nth-child(2) {
      color: white;
      background-color: ${({ theme }) => theme['yellow-light']};
      border-radius: 5px;
      padding: 8px 12px;
      position: relative;
      > span {
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: ${({ theme }) => theme['yellow-dark']};
        padding: 4px 8px;
        text-decoration: none;
        font-size: 12px;
        border-radius: 50%;
      }
    }
  }
`
