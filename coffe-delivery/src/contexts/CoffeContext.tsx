import { createContext, useEffect, useState } from 'react';
import { coffees } from '../utils/data.cofe';

interface Coffe {
  id: number;
  name: string;
  img: string;
  description: string;
  photo: string;
  price: number;
  tags: string[];
  quantity: number;
}

interface CoffeContextType {
  coffes: Coffe[];
  handleSelectCoffe: (coffe: Coffe) => void;
  handleRemoveCoffe: (coffe: Coffe) => void;
}

export const CoffeContext = createContext({} as CoffeContextType);

export function CoffeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [coffes, setCoffes] = useState<Coffe[]>([]);
  const [selectedCoffe, setSelectedCoffe] = useState<Coffe[]>([]);

  useEffect(() => {
    setCoffes(coffees);
  }, []);

  function handleSelectCoffe(coffe: Coffe) {
    const existingCoffeIndex = selectedCoffe.findIndex(
      (selected) => selected.id === coffe.id
    );
    if (existingCoffeIndex !== -1) {
      const updatedSelectedCoffe = [...selectedCoffe];
      updatedSelectedCoffe[existingCoffeIndex].quantity += 1;
      setSelectedCoffe(updatedSelectedCoffe);
    } else {
      setSelectedCoffe((prevSelectedCoffees) => [
        ...prevSelectedCoffees,
        { ...coffe, quantity: 1 },
      ]);
    }
  }

  function handleRemoveCoffe(coffe: Coffe) {
    const existingCoffeIndex = selectedCoffe.findIndex(
      (selected) => selected.id === coffe.id
    );
    if (existingCoffeIndex !== -1) {
      const updatedSelectedCoffe = [...selectedCoffe];
      if (updatedSelectedCoffe[existingCoffeIndex].quantity === 1) {
        updatedSelectedCoffe.splice(existingCoffeIndex, 1);
      } else {
        updatedSelectedCoffe[existingCoffeIndex].quantity -= 1;
      }
      setSelectedCoffe(updatedSelectedCoffe);
      console.log('Café removido:', coffe.name);
    }
  }

  useEffect(() => {
    console.log('Cafés selecionados:', selectedCoffe);
  }, [selectedCoffe]);

  return (
    <CoffeContext.Provider
      value={{ coffes: selectedCoffe, handleSelectCoffe, handleRemoveCoffe }}
    >
      {children}
    </CoffeContext.Provider>
  );
}
