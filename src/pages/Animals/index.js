import { GenericError } from '../../components/GenericError'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { usePets } from '../../hooks/usePets'
import { CardsList } from './components/CardsList'
import './styles.css'

export function Animals() {
  const [, status] = usePets()

  const renderByState = {
    iddle: <CardsList />,
    error: <GenericError />,
    loading: <LoadingSpinner />
  }

  return (
    <div className='geral'>
      <h1 className='h1-color'>Nossos Fofoletes</h1>
      {renderByState[status]}
    </div>
  )
}
