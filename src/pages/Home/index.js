import './styles.css'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const router = useNavigate()

  const handleRedirect = () => {
    router('/animais')
  }

  return (
    <main className='home'>
      <section>
        <img className='gatoTop' src={require('../../img/gatoTop.png')} />
        <article>
          <h1 className='adotar'>Porque Adotar?</h1>
          <p id='texto'>
            Todos os pets merecem uma vida digna, regada com muito amor e
            proteção. Por esse motivo, ao concretizar uma adoção responsável
            você está proporcionado uma vida de mais qualidade para o pet.
            Vários estudos já mostraram o bem que um pet faz à saúde das
            pessoas. Além disso, ter um animalzinho em casa resulta em passeios
            que estimulam os exercícios, melhoram a pressão sanguínea e evita
            que o dono apresente indícios de depressão, ansiedade ou estresse.
            Ao adotar o animal de um abrigo você estará, automaticamente,
            salvando mais de uma vida, pois o espaço do seu novo melhor amigo
            será disponibilizado a outro animal de rua que será resgatado.
          </p>
        </article>
      </section>

      <button id='botao-adotar' onClick={handleRedirect}>
        Quero Adotar
      </button>
    </main>
  )
}
