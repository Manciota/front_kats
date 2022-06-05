import { usePets } from '../../../../hooks/usePets'
import { CardPet } from '../CardPet'

export const CardsList = () => {
  const [pets] = usePets([])
  return (
    <div className='grid-container'>
      {pets.map((pet) => (
        <CardPet key={pet.id} pet={pet} />
      ))}
    </div>
  )
}
