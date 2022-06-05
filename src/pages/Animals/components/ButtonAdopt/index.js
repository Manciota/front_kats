import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../../../components/Button'
import { Modal } from '../../../../components/Modal'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './adoption.schema'
import './styles.css'

export const ButtonAdopt = ({ petId }) => {
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

  const onSubmit = (data) => {
    handleToggleModal()
    console.log(data)
  }

  const handleToggleModal = () => {
    setModalOpen((prevState) => !prevState)
  }

  return (
    <>
      <Button title='Adotar' onClick={handleToggleModal} />

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

          <Button
            title='Confirmar'
            type='submit'
            disabled={!isValid || !isDirty}
          />
        </form>
      </Modal>
    </>
  )
}
