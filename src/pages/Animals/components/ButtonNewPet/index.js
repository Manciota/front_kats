import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../../../components/Button'
import { Modal } from '../../../../components/Modal'
import { yupResolver } from '@hookform/resolvers/yup'
import './styles.css'
import { MdPets } from 'react-icons/md'
import { schema } from './newPet.schema'
import { usePets } from '../../../../context/usePets'

export const ButtonNewPet = () => {
  const { status, createPet } = usePets()
  const [modalOpen, setModalOpen] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isDirty }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    reValidateMode: 'onChange'
  })
  const [picture, setPicture] = useState({})
  const imageWatcher = watch('image')

  const isDisabled = !isValid || !isDirty || status.loading

  const onSubmit = (data) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })
    formData.append('image', picture)
    handleToggleModal()
    createPet(formData)
  }

  const handleToggleModal = () => {
    reset()
    setModalOpen((prevState) => !prevState)
  }

  useEffect(() => {
    setPicture(imageWatcher?.[0])
  }, [imageWatcher])

  return (
    <>
      <Button title='Novo PET' icon={<MdPets />} onClick={handleToggleModal} />

      <Modal
        open={modalOpen}
        toggleOpen={handleToggleModal}
        title='Crie um animal!'
      >
        <form onSubmit={handleSubmit(onSubmit)} className='create-form'>
          <div>
            <label>Nome (*)</label>
            <input {...register('name')} />
            <p>{errors.name?.message}</p>
          </div>

          <div>
            <label>Raça (*)</label>
            <input {...register('breed')} maxLength={11} />
            <p>{errors.breed?.message}</p>
          </div>

          <div>
            <label>Genero (*)</label>
            <select {...register('gender')}>
              <option value=''>-</option>
              <option value='macho'>Macho</option>
              <option value='femea'>Femea</option>
            </select>
            <p>{errors.gender?.message}</p>
          </div>

          <div>
            <label>Data de nascimento</label>
            <input {...register('birth_date')} type='date' />
            <p>{errors.birth_date?.message}</p>
          </div>

          <div>
            <label>Faixa de idade (*)</label>
            <input {...register('age_group')} />
            <p>{errors.age_group?.message}</p>
          </div>

          <div>
            <label>Foto do bixano</label>
            <label htmlFor='file-upload' className='custom-file-upload'>
              {picture ? picture.name : 'Insira uma imagem'}
              <input id='file-upload' {...register('image')} type='file' />
            </label>
          </div>

          <Button title='Confirmar' type='submit' disabled={isDisabled} />
        </form>
      </Modal>
    </>
  )
}
