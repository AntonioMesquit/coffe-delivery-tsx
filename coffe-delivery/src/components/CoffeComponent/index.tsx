import { formatMoney } from '../../utils/formatMoney'
import { useState } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'
import Cart from '../../assets/coffees/Icon.svg'
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
  onSelectCoffe: () => void
  onRemoveCoffe: () => void
}

export function CoffeComponent({
  coffe,
  onSelectCoffe,
  onRemoveCoffe,
}: CoffeProps) {
  const precoFormatado = formatMoney(coffe.price)
  const [itens, setItens] = useState(0)

  function handleAddItens() {
    if (itens >= 99) {
      return
    }
    setItens(itens + 1)
    onSelectCoffe()
  }

  function handleRemoveItens() {
    if (itens === 0) {
      return
    }
    setItens(itens - 1)
    onRemoveCoffe()
  }

  return (
    <CoffeContainer>
      <img src={coffe.img} alt={coffe.name} />
      <div className="show">
        {coffe.tags.map((tag) => (
          <span key={tag}>{tag.toLocaleUpperCase()} </span>
        ))}
      </div>
      <p>{coffe.name}</p>
      <p>{coffe.description}</p>
      <div className="alinhar">
        <p>
          R$<span>{precoFormatado}</span>
        </p>
        <div className="inputs">
          <button onClick={handleRemoveItens}>
            <Minus size={14} color="#8047F8" />
          </button>
          <p>{itens}</p>
          <button onClick={handleAddItens}>
            <Plus size={14} color="#8047F8" />
          </button>
        </div>
        <button>
          <img src={Cart} alt="" />
        </button>
      </div>
    </CoffeContainer>
  )
}
