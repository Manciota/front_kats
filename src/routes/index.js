import { BrowserRouter, Route, Routes as Rotas } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { appRoutes } from './routes.data'

export const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Rotas>
        {appRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Rotas>
    </Layout>
  </BrowserRouter>
)
