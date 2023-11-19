import imageIcon from '../../assets/icon.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Container } from './styles'
export function Header() {
  return (
    <Container>
      <a href="/">
        <img src={imageIcon} alt="" />
      </a>

      <div className="right">
        <a href="#">
          <MapPin /> Fortaleza, CE
        </a>
        <a href="/carrinho">
          <ShoppingCart color="#C47F17" size={24} />
          <span>1</span>
        </a>
      </div>
    </Container>
  )
}
