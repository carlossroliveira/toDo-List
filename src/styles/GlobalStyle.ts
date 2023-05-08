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
}

body, input, texarea, button {
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
}

::-webkit-scrollbar {
  width: 12px
}

::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: ${({ theme }) => theme.BLUE_SCALE.blueDark};
  border: 1px solid ${({ theme }) => theme.BLUE_SCALE.blueDark};
}

::-webkit-scrollbar-button {
  background-color: ${({ theme }) => theme.BLUE_SCALE.blue};
}
`
