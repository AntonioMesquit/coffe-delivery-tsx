import { CoffeComponent } from '../../components/CoffeComponent'
import { coffees } from '../../utils/data.cofe'
import { Hero } from './components/Hero'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Hero />
      {coffees.map((coffe) => (
        <CoffeComponent key={coffe.id} coffe={coffe} />
      ))}
    </Container>
  )
}
