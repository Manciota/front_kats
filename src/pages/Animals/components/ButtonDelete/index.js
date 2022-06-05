import { useState } from 'react'
import { Button } from '../../../../components/Button'
import { Modal } from '../../../../components/Modal'
import './styles.css'
import { usePets } from '../../../../context/usePets'
import { BsTrash } from 'react-icons/bs'

export const ButtonDelete = ({ pet }) => {
  const { deletePet } = usePets()
  const [modalOpen, setModalOpen] = useState(false)

  const onConfirm = () => {
    handleToggleModal()
    deletePet(pet.id)
  }

  const handleToggleModal = () => {
    setModalOpen((prevState) => !prevState)
  }

  return (
    <>
      <Button icon={<BsTrash />} onClick={handleToggleModal} />

      <Modal
        open={modalOpen}
        toggleOpen={handleToggleModal}
        title='Excluir animal'
      >
        <h2>Tem certeza que deseja apagar {pet.name}?</h2>
        <div className='button-exclude__container'>
          <Button title='Cancelar' onClick={handleToggleModal} />
          <Button title='Excluir' onClick={onConfirm} />
        </div>
      </Modal>
    </>
  )
}
