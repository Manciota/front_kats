import { useEffect } from 'react'
import { GenericError } from '../../components/GenericError'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { CardsList } from './components/CardsList'
import './styles.css'
import { ButtonNewPet } from './components/ButtonNewPet'
import { usePets } from '../../context/usePets'

export function Animals() {
  const { status, getAllPets } = usePets()

  const renderByState = {
    iddle: <CardsList />,
    error: <GenericError />,
    loading: <LoadingSpinner />
  }

  useEffect(() => {
    getAllPets()
  }, [])

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
