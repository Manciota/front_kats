import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { ButtonAdopt } from '../ButtonAdopt'
import { ButtonDelete } from '../ButtonDelete'

export const CardPet = ({ pet }) => (
  <div className='grid-item'>
    <header>
      <h2 className='petName'> {pet.name}</h2>
      <h2 className='ageGroup'> {pet.age_group} </h2>
    </header>

    <img
      className='imgPets'
      src={
        pet.image ??
        'https://cdn.folhape.com.br/upload/dn_arquivo/2021/12/1overall-winner-zoe-ross-whizz-pop-02.jpg'
      }
    ></img>

    {pet.birthDate && <p>{`Nasceu em: ${pet.birthDate}`}</p>}

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

    <div className='buttons-footer'>
      <ButtonAdopt pet={pet} />
      <ButtonDelete pet={pet} />
    </div>
  </div>
)
