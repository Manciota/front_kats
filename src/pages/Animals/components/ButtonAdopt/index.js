import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../../../components/Button'
import { Modal } from '../../../../components/Modal'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './adoption.schema'
import './styles.css'
import { usePets } from '../../../../hooks/usePets'

export const ButtonAdopt = ({ pet }) => {
  const [, status, makeAdoption] = usePets()
  const [modalOpen, setModalOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    reValidateMode: 'onChange'
  })

  const isDisabled = !isValid || !isDirty || status.loading
  const isAdopted = pet.adopter_id

  const onSubmit = (data) => {
    handleToggleModal()
    makeAdoption({ ...data, pet_id: pet.id })
  }

  const handleToggleModal = () => {
    setModalOpen((prevState) => !prevState)
  }

  return (
    <>
      <Button
        title={isAdopted ? 'Adotado' : 'Adotar'}
        onClick={handleToggleModal}
        disabled={isAdopted}
      />

      <Modal open={modalOpen} setOpen={setModalOpen} title='Adote seu animal!'>
        <form onSubmit={handleSubmit(onSubmit)} className='adopt-form'>
          <div>
            <label>Nome</label>
            <input {...register('name')} />
            <p>{errors.name?.message}</p>
          </div>

          <div>
            <label>Telefone</label>
            <input {...register('phone')} />
            <p>{errors.phone?.message}</p>
          </div>

          <div>
            <label>CPF</label>
            <input {...register('cpf')} />
            <p>{errors.cpf?.message}</p>
          </div>

          <div>
            <label>Endereço</label>
            <input {...register('address')} />
            <p>{errors.address?.message}</p>
          </div>

          <Button title='Confirmar' type='submit' disabled={isDisabled} />
        </form>
      </Modal>
    </>
  )
}
