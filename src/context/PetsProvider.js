import { useCallback, useState, createContext } from 'react'
import AdoptersService from '../services/AdoptersService'
import PetsService from '../services/PetsService'

export const PetsContext = createContext()

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([])
  const [status, setStatus] = useState('loading')

  const getAllPets = useCallback(async () => {
    try {
      const data = await PetsService.getAllPets()
      const formattedData = data.map((pet) => ({
        ...pet,
        birthDate:
          pet.birth_date &&
          new Intl.DateTimeFormat('pt-BR').format(new Date(pet.birth_date))
      }))
      setPets(formattedData)
      setStatus('iddle')
    } catch {
      setStatus('error')
    }
  }, [])

  const makeAdoption = useCallback(
    async (adopterInfo) => {
      try {
        setStatus('loading')
        await AdoptersService.makeAdoption(adopterInfo)
        await getAllPets()
      } catch {
        setStatus('error')
      }
    },
    [getAllPets]
  )

  const createPet = useCallback(
    async (petInfo) => {
      try {
        setStatus('loading')
        await PetsService.createPet(petInfo)
        await getAllPets()
      } catch {
        setStatus('error')
      }
    },
    [getAllPets]
  )

  const deletePet = useCallback(
    async (petId) => {
      try {
        setStatus('loading')
        await PetsService.deletePet(petId)
        const newPets = pets.filter((pet) => pet.id !== petId)
        setPets(newPets)
        setStatus('iddle')
      } catch {
        setStatus('error')
      }
    },
    [pets]
  )

  return (
    <PetsContext.Provider
      value={{ pets, status, getAllPets, makeAdoption, createPet, deletePet }}
    >
      {children}
    </PetsContext.Provider>
  )
}
