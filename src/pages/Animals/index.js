import { useState, useEffect } from 'react'
import './styles.css'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs'

export function Animals() {
  const [pets, setPets] = useState([])
  const fetchPets = async () => {
    try {
      const response = await fetch('https://miakhats.herokuapp.com/pets/')
      const json = await response.json()

      setPets(json)
    } catch {}
  }
  useEffect(() => {
    fetchPets()
  }, [])

  return (
    <>
      <div className='geral'>
        <h1 className='h1-color'>Nossos Fofoletes</h1>
        <div className='grid-container'>
          {pets.map((pet) => (
            <div className='grid-item' key={pet.id}>
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
          ))}
        </div>
      </div>
    </>
  )
}
