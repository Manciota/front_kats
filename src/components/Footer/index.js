import './styles.css'

export function Footer() {
  return (
    <footer>
      <div id='emails'>
        <p>rodrigovictor81@gmail.com</p>
        <p>gamancio22@gmail.com</p>
        <p>lauracecilia.net@gmail.com</p>
        <p>natanael.vitorino@facens.br</p>
      </div>
      <img src={require('../../img/footerpng.png')} />
      <p id='copyright'>Mia Khats© - Todos os Direitos Reservados</p>
    </footer>
  )
}
