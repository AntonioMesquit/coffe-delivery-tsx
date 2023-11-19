import americanexpress from '../assets/coffees/american-express.png'
import expressotradicional from '../assets/coffees/tradicional-express.png'
import expressocremoso from '../assets/coffees/creamy-express.png'
import cafecomleite from '../assets/coffees/coffee-with-milk.png'
import late from '../assets/coffees/latte.png'
import capuccino from '../assets/coffees/capuccino.png'
import macchiato from '../assets/coffees/macchiato.png'
import mocaccino from '../assets/coffees/mocaccino.png'
import chocolatequente from '../assets/coffees/hot-chocolate.png'
import cubano from '../assets/coffees/cuban-coffee.png'
import havaiano from '../assets/coffees/hawaiian-coffee.png'
import arabe from '../assets/coffees/arabian-coffee.png'
import irish from '../assets/coffees/irish-coffee.png'

export const coffees = [
  {
    id: 1,
    tags: ['tradicional'],
    img: `${expressotradicional}`,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    photo: 'tradicional.png',
    price: 11.9,
  },
  {
    id: 2,
    tags: ['tradicional'],
    img: `${americanexpress}`,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    photo: 'americano.png',
    price: 9.9,
  },
  {
    id: 3,
    tags: ['tradicional'],
    img: `${americanexpress}`,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    photo: 'cremoso.png',
    price: 9.9,
  },
  {
    id: 4,
    tags: ['tradicional', 'gelado'],
    img: `${expressocremoso}`,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    photo: 'gelado.png',
    price: 9.9,
  },
  {
    id: 5,
    tags: ['tradicional', 'com leite'],
    img: `${cafecomleite}`,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    photo: 'leite.png',
    price: 9.9,
  },
  {
    id: 6,
    tags: ['tradicional', 'com leite'],
    img: `${late}`,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    photo: 'latte.png',
    price: 9.9,
  },
  {
    id: 7,
    tags: ['tradicional', 'com leite'],
    img: `${capuccino}`,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    photo: 'capuccino.png',
    price: 9.9,
  },
  {
    id: 8,
    tags: ['tradicional', 'com leite'],
    img: `${macchiato}`,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    photo: 'macchiato.png',
    price: 9.9,
  },
  {
    id: 9,
    tags: ['tradicional', 'com leite'],
    img: `${mocaccino}`,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    photo: 'mocaccino.png',
    price: 9.9,
  },
  {
    id: 10,
    tags: ['especial', 'com leite'],
    img: `${chocolatequente}`,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    photo: 'chocolate.png',
    price: 9.9,
  },
  {
    id: 11,
    tags: ['especial', 'alcoólico', 'gelado'],
    img: `${cubano}`,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    photo: 'cubano.png',
    price: 9.9,
  },
  {
    id: 12,
    tags: ['especial'],
    img: `${havaiano}`,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    photo: 'havaiano.png',
    price: 9.9,
  },
  {
    id: 13,
    tags: ['especial'],
    img: `${arabe}`,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    photo: 'arabe.png',
    price: 9.9,
  },
  {
    id: 14,
    tags: ['especial', 'alcoólico'],
    img: `${irish}`,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    photo: 'irlandes.png',
    price: 9.9,
  },
]
