import { useContext } from 'react'
import { PetsContext } from './PetsProvider'

export const usePets = () => {
  const context = useContext(PetsContext)

  return context
}
