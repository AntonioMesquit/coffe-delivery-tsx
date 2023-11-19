import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`


/*font-family: 'Baloo 2', sans-serif;
font-family: 'Roboto', sans-serif;*/
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;


}
body{
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    -webkit-font-smoothing: antialiased;


}
:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
}
body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

}
a{
    text-decoration: none;
}

`
