// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Layout } from '../components/Layout'
import { Content } from '../components/Content'
import { Error } from '../components/Error'

export const DefaultRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Content />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
