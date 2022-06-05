import * as yup from 'yup'

const validation = {
  string: 'O campo deve ser um texto!',
  required: 'Campo obrigatorio!',
  date: 'O campo deve ser uma data!'
}

export const schema = yup
  .object({
    name: yup.string(validation.string).required(validation.required),
    breed: yup.string(validation.string).required(validation.required),
    gender: yup.string().required(validation.required),
    age_group: yup.string(validation.string).required(validation.required)
  })
  .required()
