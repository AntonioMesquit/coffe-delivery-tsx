import foto from '../../../../assets/locate.svg'
import money from '../../../../assets/money.svg'
import cc from '../../../../assets/cartao.svg'
import debito from '../../../../assets/debito.svg'
import din from '../../../../assets/dinheiro.svg'
import { useContext, useState } from 'react'
import { CoffeContext } from '../../../../contexts/CoffeContext'
import { Container, InputOne, InputsArea, ChoseArea } from './style'
import { useForm } from 'react-hook-form'

export function CoffeInputs() {
  const { updateAddress, updatePayment } = useContext(CoffeContext)
  const [selectedPayment, setSelectedPayment] = useState('')

  const handleAddressChange = (event) => {
    const { name, value } = event.target
    updateAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }))
  }

  const handlePaymentChange = (method) => {
    updatePayment({ method })
    setSelectedPayment(method)
  }

  return (
    <Container>
      <InputOne>
        <div className="top-header">
          <img src={foto} alt="" />
          <div className="hd">
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>
        <InputsArea>
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            onChange={handleAddressChange}
          />
          <input
            type="text"
            name="rua"
            placeholder="Rua"
            onChange={handleAddressChange}
          />
          <div className="alinhar">
            <input
              type="text"
              name="numero"
              placeholder="Numero"
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="complemento"
              placeholder="Complemento"
              onChange={handleAddressChange}
            />
          </div>
          <div className="alinhar2">
            <input
              type="text"
              name="bairro"
              placeholder="Bairro"
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="uf"
              placeholder="UF"
              onChange={handleAddressChange}
            />
          </div>
        </InputsArea>
      </InputOne>
      <ChoseArea>
        <div className="top-header">
          <img src={money} alt="" />
          <div className="cc">
            <p>Pagamento</p>
            <p>Escolha o método de pagamento</p>
          </div>
        </div>
        <div className="mark-itens">
          <div
            className={`cc ${
              selectedPayment === 'cartao de crédito' ? 'selected' : ''
            }`}
            onClick={() => handlePaymentChange('cartao de crédito')}
          >
            <img src={cc} alt="" />
            <p>Cartão de crédito</p>
          </div>
          <div
            className={`cc ${
              selectedPayment === 'cartão de débito' ? 'selected' : ''
            }`}
            onClick={() => handlePaymentChange('cartão de débito')}
          >
            <img src={debito} alt="" />
            <p>Cartão de débito</p>
          </div>
          <div
            className={`cc ${selectedPayment === 'dinheiro' ? 'selected' : ''}`}
            onClick={() => handlePaymentChange('dinheiro')}
          >
            <img src={din} alt="" />
            <p>Dinheiro</p>
          </div>
        </div>
      </ChoseArea>
    </Container>
  )
}
