import './styles.css'
import { FaPaw } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <Link className='logo2' to='/'>
        <div className='logo'>
          Mia Khats <FaPaw />
        </div>
      </Link>
      <nav id='menu2'>
        <Link className='li' to='/'>
          Página Inicial
        </Link>
        <Link className='li' to='/animais'>
          Escolha um Animal
        </Link>
        <Link className='li' to='/sobre'>
          Sobre Nós
        </Link>
      </nav>
    </header>
  )
}
