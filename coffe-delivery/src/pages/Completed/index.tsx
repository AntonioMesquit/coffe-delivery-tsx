import { Container, BordaColorida } from './styles'
import loca from '../../assets/coffees/location.svg'
import timer from '../../assets/coffees/timer.svg'
import din from '../../assets/coffees/mone.svg'
import hero from '../../assets/Illustration.svg'

import { useContext, useEffect } from 'react'
import { CoffeContext } from '../../contexts/CoffeContext'
import { useNavigate } from 'react-router-dom'

export function Completed() {
  const { address, payment } = useContext(CoffeContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!address.bairro) {

      navigate('/')
    }
  }, [address, payment, navigate])
  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div className="alinhar">
        <BordaColorida>
          <div className="info">
            <img src={loca} alt="" />
            <p>
              Entrega em{' '}
              <strong>
                {address.rua}, {address.numero}
              </strong>{' '}
              <br /> {address.bairro} - {address.cidade}, {address.uf}
            </p>
          </div>
          <div className="info">
            <img src={timer} alt="" />
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min </strong>
            </p>
          </div>
          <div className="info">
            <img src={din} alt="" />
            <p>
              Pagamento na entrega <br /> <strong>{payment.method}</strong>
            </p>
          </div>
        </BordaColorida>
        <img src={hero} alt="" />
      </div>
    </Container>
  )
}
