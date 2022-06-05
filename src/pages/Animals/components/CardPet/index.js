import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'

export const CardPet = ({ pet }) => {
  return (
    <div className='grid-item'>
      <h2 className='petName'> {pet.name}</h2>
      <img className='imgPets' src={pet.image}></img>
      <h2 className='ageGroup'> {pet.age_group} </h2>
      <h2 className='petGenero'>
        {pet.gender.toLowerCase() === 'macho' ? (
          <BsGenderMale className='macho' size={30} />
        ) : (
          <BsGenderFemale className='femea' size={30} />
        )}
      </h2>
    </div>
  )
}
