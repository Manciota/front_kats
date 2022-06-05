import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'

export const CardPet = ({ pet }) => {
  return (
    <div className='grid-item'>
      <header>
        <h2 className='petName'> {pet.name}</h2>
        <h2 className='ageGroup'> {pet.age_group} </h2>
      </header>
      <img className='imgPets' src={pet.image}></img>
      <footer>
        <h2 className='ageGroup'> {pet.breed} </h2>
        <h2 className='petGenero'>
          {pet.gender.toLowerCase() === 'macho' ? (
            <BsGenderMale className='macho' size={30} />
          ) : (
            <BsGenderFemale className='femea' size={30} />
          )}
        </h2>
      </footer>
      <button>Adotar</button>
    </div>
  )
}
