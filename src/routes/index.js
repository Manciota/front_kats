import { BrowserRouter, Route, Routes as Rotas } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { appRoutes } from './routes.data'

export const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Rotas>
        {appRoutes.map((item) => (
          <Route key={item.path} path={item.path} element={item.component} />
        ))}
      </Rotas>
    </Layout>
  </BrowserRouter>
)
