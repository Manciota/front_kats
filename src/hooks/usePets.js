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

  const makeAdoption = useCallback(async (adopterInfo) => {
    try {
      const data = await AdoptersService.makeAdoption(adopterInfo)
      setPets(data)
      setStatus('iddle')
    } catch {
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    getAllPets()
  }, [getAllPets])

  return [pets, status, makeAdoption]
}
