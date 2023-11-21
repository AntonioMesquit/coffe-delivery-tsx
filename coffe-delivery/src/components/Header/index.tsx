import imageIcon from '../../assets/icon.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeContext'

export function Header() {
  const { coffes: contextCoffes } = useContext(CoffeContext)

  return (
    <Container>
      <Link to="/">
        <img src={imageIcon} alt="" />
      </Link>

      <div className="right">
        <a href="#">
          <MapPin /> Fortaleza, CE
        </a>
        <Link to="/carrinho">
          <ShoppingCart color="#C47F17" size={24} />
          {contextCoffes.length !== 0 ? (
            <span>{contextCoffes.length}</span>
          ) : (
            <span style={{ display: 'none' }}></span>
          )}
        </Link>
      </div>
    </Container>
  )
}
