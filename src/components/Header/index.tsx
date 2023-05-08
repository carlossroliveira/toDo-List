// Imagens
import logo from '../../assets/Logo.svg'

// Styles
import { ContainerSC } from './headerStyles'

export const Header = () => {
  return (
    <ContainerSC>
      <img src={logo} alt="Logo de um foguete" />
    </ContainerSC>
  )
}
