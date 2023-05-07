import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

:focus {
 outline: transparent;
 box-shadow: 0 0 0 2px ${({ theme }) => theme.GREEN_SCALE[500]};
}

body, input, texarea, button {
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.GREY_SCALE[300]};
  background-color: ${({ theme }) => theme.GREY_SCALE[900]};
}
`
