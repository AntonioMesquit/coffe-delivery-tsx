import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 120px);
  margin-top: 80px;
  margin-inline: 280px;

  > h1 {
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme['yellow-dark']};
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
  > p {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 40px;
  }
  > .alinhar {
    display: flex;
    gap: 200px;
  }
`
export const BordaColorida = styled.div`
  border: 1px solid ${({ theme }) => theme['yellow-dark']};
  max-width: 450px;
  border-radius: 6px 36px;
  overflow: hidden;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  > .info {
    display: flex;
    align-items: center;
    gap: 12px;

    > img {
      background-color: ${({ theme }) => theme['purple-dark']};
      padding: 10px;
      border-radius: 50%;
      width: 40px;
    }
  }
  > .info:nth-child(2) {
    > img {
      background-color: ${({ theme }) => theme.yellow};
    }
  }
  > .info:nth-child(3) {
    > img {
      background-color: ${({ theme }) => theme['yellow-dark']};
    }
    >  p {
        > strong {
            text-transform: capitalize;
        }
    }
  }
`
