// Packages
import { Moon, Sun } from 'phosphor-react'

// COntext
import { useTheme } from '../../contexts/themes/useTheme'

// Imagens
import logo from '../../assets/Logo.svg'

// Styles
import { ButtonSC, ContainerSC } from './headerStyles'

export const Header = () => {
  const { handleThemes, themes } = useTheme()

  return (
    <ContainerSC>
      <img src={logo} alt="Logo de um foguete" />

      <ButtonSC type="button" onClick={() => handleThemes()}>
        {themes.title === 'light' ? <Sun size={20} /> : <Moon size={20} />}
      </ButtonSC>
    </ContainerSC>
  )
}
