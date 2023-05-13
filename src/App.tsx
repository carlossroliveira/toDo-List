// Packages
import GithubCorner from 'react-github-corner'

// Context
import { useTheme } from './contexts/themes/useTheme'

// Router
import { DefaultRouter } from './Router'

// Styles
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  const { themes } = useTheme()

  return (
    <ThemeProvider theme={themes}>
      <DefaultRouter />

      <GithubCorner
        bannerColor="#1E6F9F"
        href="https://github.com/carlossroliveira"
      />
      <GlobalStyle />
    </ThemeProvider>
  )
}
