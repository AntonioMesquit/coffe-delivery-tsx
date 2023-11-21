import React, { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeContext'
import { formatMoney } from '../../utils/formatMoney'

export function Checkout() {
  const { coffes: contextCoffes } = useContext(CoffeContext)
  return (
    <div className="div">
      <h1>Carrinho</h1>
      {contextCoffes.map((coffee) => (
        
        <div key={coffee.id}>
          <p>Nome: {coffee.name}</p>
          <p>Quantidade: {coffee.quantity}</p>
          <p>Preco: {formatMoney(coffee.price * coffee.quantity)}</p>
        </div>
      ))}
    </div>
  )
}
