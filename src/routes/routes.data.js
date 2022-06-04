import { AboutUs } from '../pages/AboutUs'
import { Animals } from '../pages/Animals'
import { Home } from '../pages/Home'

export const appRoutes = [
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/animais',
    component: <Animals />
  },
  {
    path: '/sobre',
    component: <AboutUs />
  }
]
