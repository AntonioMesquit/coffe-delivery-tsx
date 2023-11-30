import React, { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeContext'
import { formatMoney } from '../../utils/formatMoney'
import { Container, Separator } from './styles'
import { CoffeInputs } from './components/CoffeInputs'
import noCafe from '../../assets/empty-cart-290a716a.svg'
import { useNavigate } from 'react-router-dom'
import { CoffeComponent } from './components/CoffeComponent'

export function Checkout() {
  const {
    coffes: contextCoffes,
    handleRemoveCoffe,
    handleSelectCoffe,
    address,
    payment,
    updateAddress,
    updatePayment,
  } = useContext(CoffeContext)

  const precoTotal = formatMoney(
    contextCoffes.reduce((total, coffee) => {
      return total + coffee.price * (coffee.quantity || 0)
    }, 0),
  )

  const precoNumerico = parseFloat(
    precoTotal.replace('R$ ', '').replace(',', '.'),
  )
  const comFrete = formatMoney(precoNumerico + 3.5)
  const navigate = useNavigate()

  function handleHome() {
    navigate('/')
  }

  function confirmarPedido() {
    if (!address.cep) {
      return alert('Coloque o CEP')
    }
    if (!address.rua) {
      return alert('Coloque a Rua')
    }
    if (!address.numero) {
      return alert('Coloque o Numero')
    }

    if (!address.complemento) {
      return alert('Coloque o complemento')
    }
    if (!address.bairro) {
      return alert('Coloque o bairro')
    }
    if (!address.cidade) {
      return alert('Coloque a cidade')
    }
    if (!address.uf) {
      return alert('Coloque o UF')
    }
    console.log('Endereço:', address)
    console.log('Método de Pagamento:', payment)
    navigate('/sucesso')
  }

  return (
    <Container>
      <Separator>
        <h1>Complete seu pedido</h1>
        <h1>Cafés selecionados</h1>
      </Separator>
      <div className="show">
        <CoffeInputs />
        <div className="coffes">
          {contextCoffes.length > 0 ? (
            <>
              {contextCoffes.map((coffe) => (
                <CoffeComponent
                  key={coffe.id}
                  coffe={coffe}
                  onSelectCoffe={() => handleSelectCoffe(coffe)}
                  onRemoveCoffe={() => handleRemoveCoffe(coffe)}
                />
              ))}
              <div className="tlt">
                <p>Total de itens</p>
                <p>R$ {precoTotal}</p>
              </div>
              <div className="tlt">
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </div>
              <div className="tlt">
                <p>Total</p>
                <p>{comFrete}</p>
              </div>
              <button onClick={confirmarPedido}>CONFIRMAR PEDIDO</button>
            </>
          ) : (
            <div className="notCaffe">
              <p>Carrinho vazio</p>
              <img src={noCafe} alt="" />
              <button onClick={handleHome}>SELECIONAR CAFES</button>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}
