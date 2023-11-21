import React, { useContext } from 'react'
import { formatMoney } from '../../../../utils/formatMoney'
import { Minus, Plus } from '@phosphor-icons/react'
import Cart from '../../../../assets/coffees/Icon.svg'
import { CoffeContainer } from './styles'
import { CoffeContext } from '../../../../contexts/CoffeContext'

interface CoffeProps {
  coffe: Coffe
}

export function CoffeComponent({ coffe }: CoffeProps) {
  const precoFormatado = formatMoney(coffe.price)
  const { handleSelectCoffe, handleRemoveCoffe, coffes } =
    useContext(CoffeContext)

  const selectedCoffe = coffes.find((item) => item.id === coffe.id)

  function handleAddItens() {
    handleSelectCoffe(coffe)
  }

  function handleRemoveItens() {
    handleRemoveCoffe(coffe)
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
          <p>{selectedCoffe?.quantity || 0}</p>
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
