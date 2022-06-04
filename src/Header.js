import './header.css'
import { FaPaw } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className='back'>
        <header>
          <div id='cabecalho'>
            <Link className='logo2' to='/'>
              <div className='logo'>
                {' '}
                Mia Khats <FaPaw />
              </div>{' '}
            </Link>
          </div>
          <div id='menu1'>
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
          </div>
        </header>

        <div>
          <img className='gatao' src={require('./imagens/gato2.png')} />
        </div>
      </div>
    </>
  )
}
