import { useEffect, useState } from 'react'
import { Hero } from './components/Hero'
import { CoffeComponent } from '../../components/CoffeComponent'
import { coffees } from '../../utils/data.cofe'
import { Container, CoffeList } from './styles'

interface Coffe {
  id: number
  name: string
  img: string
  description: string
  photo: string
  price: number
  tags: string[]
}

export function Home() {
  const [coffes, setCoffes] = useState<Coffe[]>([])
  const [selectedCoffe, setSelectedCoffe] = useState<Coffe[]>([])

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
    setCoffes(coffees)
  }, [])

  useEffect(() => {
    console.log(selectedCoffe)
  }, [selectedCoffe])

  return (
    <Container>
      <Hero />
      <h1>Nossos cafés</h1>
      <CoffeList>
        {coffes.map((coffe) => (
          <CoffeComponent
            key={coffe.id}
            coffe={coffe}
            onSelectCoffe={() => handleSelectCoffe(coffe)}
            onRemoveCoffe={() => handleRemoveCoffe(coffe)}
          />
        ))}
      </CoffeList>
    </Container>
  )
}
