/* eslint-disable no-constant-condition */
import { usePets } from '../../../../context/usePets'
import { CardPet } from '../CardPet'
import logo from '../../../../img/cat-error.svg'

export const CardsList = () => {
  const { pets } = usePets()

  return (
    <div className='grid-container'>
      {pets.length ? (
        <>
          {pets.map((pet) => (
            <CardPet key={pet.id} pet={pet} />
          ))}
        </>
      ) : (
        <img src={logo} alt='Wilston, we have a problem!' />
      )}
    </div>
  )
}
