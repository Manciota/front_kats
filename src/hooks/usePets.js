import { useCallback, useEffect, useState } from 'react'
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

  useEffect(() => {
    getAllPets()
  }, [getAllPets])

  return [pets, status]
}
