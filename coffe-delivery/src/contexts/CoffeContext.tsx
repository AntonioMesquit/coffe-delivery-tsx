import React, { createContext, useState, useEffect } from 'react'
import { coffees } from '../utils/data.cofe'

// Definições de tipos para Coffe, Address e Payment
interface Coffe {
  id: number
  name: string
  img: string
  description: string
  photo: string
  price: number
  tags: string[]
  quantity: number
}

interface Address {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

interface Payment {
  method: string
}

// Interface do contexto
interface CoffeContextType {
  coffes: Coffe[]
  address: Address
  payment: Payment
  handleSelectCoffe: (coffe: Coffe) => void
  handleRemoveCoffe: (coffe: Coffe) => void
  updateAddress: (address: Address) => void
  updatePayment: (payment: Payment) => void
}

// Criação do contexto
export const CoffeContext = createContext({} as CoffeContextType)

export function CoffeContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [coffes, setCoffes] = useState<Coffe[]>([])
  const [selectedCoffe, setSelectedCoffe] = useState<Coffe[]>([])
  const [address, setAddress] = useState<Address>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
  })
  const [payment, setPayment] = useState<Payment>({ method: '' })

  useEffect(() => {
    setCoffes(coffees)
  }, [])

  function handleSelectCoffe(coffe: Coffe) {
    const existingCoffeIndex = selectedCoffe.findIndex(
      (selected) => selected.id === coffe.id,
    )
    if (existingCoffeIndex !== -1) {
      const updatedSelectedCoffe = [...selectedCoffe]
      updatedSelectedCoffe[existingCoffeIndex].quantity += 1
      setSelectedCoffe(updatedSelectedCoffe)
    } else {
      setSelectedCoffe((prevSelectedCoffees) => [
        ...prevSelectedCoffees,
        { ...coffe, quantity: 1 },
      ])
    }
  }

  function handleRemoveCoffe(coffe: Coffe) {
    const existingCoffeIndex = selectedCoffe.findIndex(
      (selected) => selected.id === coffe.id,
    )
    if (existingCoffeIndex !== -1) {
      const updatedSelectedCoffe = [...selectedCoffe]
      if (updatedSelectedCoffe[existingCoffeIndex].quantity === 1) {
        updatedSelectedCoffe.splice(existingCoffeIndex, 1)
      } else {
        updatedSelectedCoffe[existingCoffeIndex].quantity -= 1
      }
      setSelectedCoffe(updatedSelectedCoffe)
      console.log('Café removido:', coffe.name)
    }
  }

  useEffect(() => {
    console.log('Cafés selecionados:', selectedCoffe)
  }, [selectedCoffe])

  function updateAddress(updatedAddress: Address) {
    setAddress(updatedAddress)
  }

  function updatePayment(updatedPayment: Payment) {
    setPayment(updatedPayment)
  }

  return (
    <CoffeContext.Provider
      value={{
        coffes: selectedCoffe,
        address,
        payment,
        handleSelectCoffe,
        handleRemoveCoffe,
        updateAddress,
        updatePayment,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
