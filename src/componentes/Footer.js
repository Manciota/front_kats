import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <footer>
          <div id='emails'>
            <p id='Mancio'>gamancio22@gmail.com</p>
            <p id='Law'> lauracecilia.net@gmail.com</p>
            <p id='Rod'>rodrigovictor81@gmail.com</p>
            <p id='Nat'>natanael.vitorino@facens.br</p>
          </div>
          <img
            className='gatoFooter'
            src={require('../imagens/footerpng.png')}
          />
          <div id='copy'>
            <p id='copyright'>Mia Khats© - Todos os Direitos Reservados</p>
          </div>
        </footer>
      </div>
    </>
  )
}
