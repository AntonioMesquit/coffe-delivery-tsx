import { CoffeComponent } from '../../components/CoffeComponent'
import { coffees } from '../../utils/data.cofe'
console.log(coffees)

export function Home() {
  return (
    <div>
      {coffees.map((coffe) => (
        <CoffeComponent key={coffe.id} coffe={coffe} />
      ))}
    </div>
  )
}
