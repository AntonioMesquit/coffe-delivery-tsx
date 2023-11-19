import { formatMoney } from '../../utils/formatMoney'
import { CoffeContainer } from './styles'
interface Coffe {
  id: number
  name: string
  img: string
  description: string
  photo: string
  price: number
  tags: string[]
}
interface CoffeProps {
  coffe: Coffe
}
export function CoffeComponent({ coffe }: CoffeProps) {
  const precoFormatado = formatMoney(coffe.price)
  return (
    <CoffeContainer>
      <img src={coffe.img} />
      <p>{coffe.name}</p>
      <p>{precoFormatado}</p>
    </CoffeContainer>
  )
}
