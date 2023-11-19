import { CoffeComponent } from '../../components/CoffeComponent'
import { coffees } from '../../utils/data.cofe'

import coffeHero from '../../assets/hero-image.png'
import { CoffeInfos, Container } from './styles'
import Cart from '../../assets/coffees/Icon.svg'
import Packege from '../../assets/Icon (1).svg'
import Timer from '../../assets/Icon (2).svg'
import x from '../../assets/Icon (3).svg'

export function Home() {
  return (
    <Container>
      <CoffeInfos>
        <div className="left">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="card-icons">
            <div className="sectionLeft">
              <div className="item1">
                <img src={Cart} alt="" />
                <p>Compra simples e segura.</p>
              </div>
              <div className="item2">
                <img src={Timer} alt="" />
                <p>Entrega rápida e rastreada.</p>
              </div>
            </div>
            <div className="sectionRight">
              <div className="item3">
                <img src={Packege} alt="" />
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div className="item4">
               <img src={x} alt="" />
                <p>O café chega fresquinho até você.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={coffeHero} alt="" />
        </div>
      </CoffeInfos>
    </Container>
  )
}
