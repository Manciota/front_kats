import { Footer } from '../Footer'
import { Header } from '../Header'
import './styles.css'

export const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
