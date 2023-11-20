import { useContext, useEffect, useState } from 'react';
import { CoffeContext } from '../../contexts/CoffeContext';
import { Container, CoffeList } from './styles';
import { CoffeComponent } from './components/CoffeComponent';
import { Hero } from './components/Hero';
import { coffees } from '../../utils/data.cofe';

export function Home() {
  const {
    coffes: contextCoffes,
    handleSelectCoffe,
    handleRemoveCoffe,
  } = useContext(CoffeContext);
  const [coffes, setCoffes] = useState([]);

  useEffect(() => {
    setCoffes(contextCoffes || []);
  }, [contextCoffes]);

  return (
    <Container>
      <Hero />
      <h1>Nossos cafés</h1>
      <CoffeList>
        {coffees.map((coffe) => (
          <CoffeComponent
            key={coffe.id}
            coffe={coffe}
            onSelectCoffe={() => handleSelectCoffe(coffe)}
            onRemoveCoffe={() => handleRemoveCoffe(coffe)}
          />
        ))}
      </CoffeList>
    </Container>
  );
}
