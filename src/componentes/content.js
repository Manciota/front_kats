import './content.css'
import { useNavigate } from 'react-router-dom'

export default function Content() {
  const router = useNavigate()
  const handleRedirect = () => {
    router('/animais')
  }

  return (
    <>
      <article id='artigo'>
        <div className='culado'>
          <div className='branco'>
            <div>
              <img
                className='gatoTop'
                src={require('../imagens/gatoTop.png')}
              />
            </div>
            <h1 className='adotar'>Porque Adotar?</h1>
            <p id='texto'>
              {' '}
              Todos os pets merecem uma vida digna, regada com muito amor e
              proteção. Por esse motivo, ao concretizar uma adoção responsável
              você está proporcionado uma vida de mais qualidade para o pet.
              Vários estudos já mostraram o bem que um pet faz à saúde das
              pessoas. Além disso, ter um animalzinho em casa resulta em
              passeios que estimulam os exercícios, melhoram a pressão sanguínea
              e evita que o dono apresente indícios de depressão, ansiedade ou
              estresse. Ao adotar o animal de um abrigo você estará,
              automaticamente, salvando mais de uma vida, pois o espaço do seu
              novo melhor amigo será disponibilizado a outro animal de rua que
              será resgatado.
            </p>

            <div>
              <img
                className='gato-bottom'
                src={require('../imagens/gatopng.png')}
              />
            </div>
            <div className='botao'>
              <button id='botaoAdotar' onClick={handleRedirect}>
                Quero Adotar
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
