import { useContext } from 'react'
import { CoffeContext } from '../../../../contexts/CoffeContext'
import { Container } from './style'
import { formatMoney } from '../../../../utils/formatMoney'
import { Minus, Plus } from '@phosphor-icons/react'
import trash from '../../../../assets/trash.svg'
interface CoffeProps {
  coffe: Coffe
}

export function CoffeComponent({ coffe }: CoffeProps) {
  const { coffes: contextCoffes } = useContext(CoffeContext)
  const { handleSelectCoffe, handleRemoveCoffe, coffes } =
    useContext(CoffeContext)
  const selectedCoffe = coffes.find((item) => item.id === coffe.id)
  const precoFormatado = formatMoney(coffe.price * selectedCoffe?.quantity)
  function handleAddItens() {
    if (selectedCoffe?.quantity >= 99) {
      return
    }
    handleSelectCoffe(coffe)
  }

  function handleRemoveItens() {
    if (selectedCoffe?.quantity == 1) {
      return
    }
    handleRemoveCoffe(coffe)
  }

  function handleRemove() {
    handleRemoveCoffe(coffe)
  }

  return (
    <Container>
      <div className="n">
        <img src={coffe.img} alt={coffe.name} />
        <div className="alinhar">
          <p>{coffe.name}</p>
          <div className="top">
            <div className="inputs">
              <button onClick={handleRemoveItens}>
                <Minus size={14} color="#8047F8" />
              </button>
              <p>{selectedCoffe?.quantity || 0}</p>
              <button onClick={handleAddItens}>
                <Plus size={14} color="#8047F8" />
              </button>
            </div>
            <button onClick={handleRemove}>
              {' '}
              <img src={trash} alt="" /> remover
            </button>
          </div>
        </div>
      </div>
      <p>
        R$<span>{precoFormatado}</span>
      </p>
    </Container>
  )
}
