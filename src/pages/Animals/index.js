import { GenericError } from '../../components/GenericError'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { usePets } from '../../hooks/usePets'
import { CardsList } from './components/CardsList'
import './styles.css'
import { ButtonNewPet } from './components/ButtonNewPet'

export function Animals() {
  const [, status] = usePets()

  const renderByState = {
    iddle: <CardsList />,
    error: <GenericError />,
    loading: <LoadingSpinner />
  }

  return (
    <main className='geral'>
      <header>
        <div />
        <h1 className='h1-color'>Nossos Fofoletes</h1>
        <ButtonNewPet />
      </header>
      {renderByState[status]}
    </main>
  )
}
