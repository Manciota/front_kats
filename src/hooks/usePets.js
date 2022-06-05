import { useCallback, useEffect, useState } from 'react'
import AdoptersService from '../services/AdoptersService'
import PetsService from '../services/PetsService'

export const usePets = () => {
  const [pets, setPets] = useState([])
  const [status, setStatus] = useState('loading')

  const getAllPets = useCallback(async () => {
    try {
      const data = await PetsService.getAllPets()
      setPets(data)
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

  useEffect(() => {
    getAllPets()
  }, [getAllPets])

  return [pets, status, makeAdoption, createPet]
}
