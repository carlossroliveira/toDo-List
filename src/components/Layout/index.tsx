// Packages
import { Outlet } from 'react-router-dom'

// Components
import { Header } from '../Header'

// Styles
import { ContainerSC } from './layoutStyles'

export const Layout = () => {
  return (
    <ContainerSC>
      <Header />

      <Outlet />
    </ContainerSC>
  )
}
